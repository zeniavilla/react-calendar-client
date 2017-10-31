import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
import Dates from '../components/Dates';
import changeDate from '../actions/DateActions';

class App extends Component {
  prevMonth = event => {
    let currDate = this.props.selectedDate;
    if (currDate.month === 0) {
      this.props.changeDate({ month: 11, year: currDate.year - 1 });
    } else {
      this.props.changeDate({month: currDate.month - 1});
    }
  }

  // returns array of month dates
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

  nextMonth = event => {
    let currDate = this.props.selectedDate;
    if (currDate.month === 11) {
      this.props.changeDate({ month: 0, year: currDate.year + 1 });
    } else {
      this.props.changeDate({ month: currDate.month + 1 });
    }
  }

  render() {
    return (
      <div className="calendar">
        <Header selectedDate={this.props.selectedDate} prevMonth={this.prevMonth} nextMonth={this.nextMonth} />
        {
          this.numDaysInMonth(this.props.selectedDate.year, this.props.selectedDate.month).map(
            date => <Dates key={date} date={date + 1} />
          )
        }
        
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({ selectedDate: state.selectedDate })
}

export default connect(mapStateToProps, { changeDate })(App);
