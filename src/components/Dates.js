import React from 'react';

const Dates = props => {
  console.log(typeof(props.date))
  return (
    <div className="col" id={props.date}>
      {isNaN(props.date) ? '' : props.date}
    </div>
  )
}

export default Dates;