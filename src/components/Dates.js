import React from 'react';

// Styles
import '../styles/components/dates.css';

const Dates = props => {
  return (
    <div>
      {
        isNaN(props.date) 
        ? <div className="col"></div> 
        : <div className="col" id={`day-${props.date}`} onClick={props.handleOnClick}>
          {props.date}
        </div>
      }
    </div>
  )
}

export default Dates;