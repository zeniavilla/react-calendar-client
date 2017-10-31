import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import Dates from '../components/Dates';
import AppointmentNew from '../components/AppointmentNew';

// Actions
import changeDate from '../actions/DateActions';
import createAppointment from '../actions/AppointmentActions';
import updateTitle from '../actions/AppointmentFormActions';

class App extends Component {
  prevMonth = () => {
    let currDate = this.props.selectedDate;
    if (currDate.month === 0) {
      this.props.changeDate({ month: 11, year: currDate.year - 1, day: '' });
    } else {
      this.props.changeDate({ month: currDate.month - 1, day: '' });
    }
  }
  
  nextMonth = () => {
    let currDate = this.props.selectedDate;
    if (currDate.month === 11) {
      this.props.changeDate({ month: 0, year: currDate.year + 1, day: '' });
    } else {
      this.props.changeDate({ month: currDate.month + 1, day: '' });
    }
  }

  // Returns array of month dates
  numDaysInMonth = (year, month) => {
    let numDays = new Date(year, month + 1, 0).getDate();
    let datesArray = Array.apply(null, {length: numDays}).map(Number.call, Number);
    for (let i = 0; i < this.firstDayOfMonth(year, month + 1); i++) {
      datesArray.unshift(undefined);
    }
    return datesArray;
  }

  firstDayOfMonth = (year, month) => {
    return new Date(year, month - 1, 1).getDay();
  }

  handleOnClick = event => {
    if (this.props.selectedDate.day !== '') {
      document.getElementById(`day-${this.props.selectedDate.day}`).classList.remove("selected")
    }
    document.getElementById(event.target.id).className += " selected";
    this.props.changeDate({ day: parseInt(event.target.id.split('-')[1]) });
  }

  createAppt = event => {
    event.preventDefault();
    console.log(event.target)
    // this.props.createAppointment(this.props.selectedDate);
  }

  updateTitleChange = event => {
    const currentTitle = Object.assign({},
      this.props.appointmentForm, {
        title: event.target.value
    });

    this.props.updateTitle(currentTitle);
  }

  // Reset 'selected' date class when switching to a new month
  componentDidUpdate = (prevProps, prevState) => {
    if (this.props.selectedDate.month !== prevProps.selectedDate.month && prevProps.selectedDate.day !== '') {
      document.getElementById(`day-${prevProps.selectedDate.day}`).classList.remove("selected")
    }
  }

  render() {
    return (
      <div>
        <div className="calendar">
          <Header selectedDate={this.props.selectedDate} prevMonth={this.prevMonth} nextMonth={this.nextMonth} />
          <div className="dates-rows">
            {
              this.numDaysInMonth(this.props.selectedDate.year, this.props.selectedDate.month).map(
                date => <Dates key={date} date={date + 1} handleOnClick={this.handleOnClick} />
              )
            }
          </div>
        </div>
        {this.props.selectedDate.day !== '' ? <AppointmentNew handleNewAppt={this.createAppt} handleTitleChange={this.updateTitleChange} /> : 'Select a date to schedule an appointment.'}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({ 
    selectedDate: state.selectedDate,
    appointmentForm: state.appointmentForm
  })
}

export default connect(mapStateToProps, { changeDate, createAppointment, updateTitle })(App);
