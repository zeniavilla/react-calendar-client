import React from 'react';

const Header = props => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayAbbrev = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  const { month, year } = props.selectedDate;
  const displayDays = () => {
    return dayNames.map(day => 
      <div className="col">
        <h4>{day}</h4>
      </div>
    )};

  return (
    <div>

      <h1>
        <i className="fa fa-angle-left" onClick={props.prevMonth} aria-hidden="true"></i>
        {monthNames[month]} {year}
        <i className="fa fa-angle-right" onClick={props.nextMonth} aria-hidden="true"></i>
      </h1>
      <div className="row">
        {displayDays()}
      </div>
    </div>
  )
}

export default Header;