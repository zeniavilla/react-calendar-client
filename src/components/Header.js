import React from 'react';

// Styles
import '../styles/components/header.css';

const Header = props => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayAbbrev = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat'];
  const { month, year } = props.selectedDate;
  const displayDays = () => {
    return dayAbbrev.map(day => 
      <div className="col" key={dayAbbrev.indexOf(day)} id={dayAbbrev.indexOf(day)}>
        <h4>{day}</h4>
      </div>
    )};

  return (
    <div>
      <h1>
        <span className="btn-round left" onClick={props.prevMonth}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </span>
        {monthNames[month]} {year}
        <span className="btn-round right" onClick={props.nextMonth}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </span>
      </h1>
      <div className="headerRow">
        {displayDays()}
      </div>
    </div>
  )
}

export default Header;
