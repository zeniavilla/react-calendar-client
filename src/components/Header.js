import React from 'react';

const Header = props => {
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];  
  const { month, year } = props.selectedDate;
  return (
    <div>
      <h1>{monthNames[month]} {year}</h1>
    </div>
  )
}

export default Header;