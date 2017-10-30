import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Header from '../components/Header';
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
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({ selectedDate: state.selectedDate })
}

export default connect(mapStateToProps, { changeDate })(App);
