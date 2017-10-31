import React from 'react';

const Dates = props => {
  console.log(typeof(props.date))
  return (
    <div className="col" id={props.date}>
      {typeof(props.date) === 'number' ? props.date : '-'}
    </div>
  )
}

export default Dates;