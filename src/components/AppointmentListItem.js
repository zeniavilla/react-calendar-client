import React from 'react';

const AppointmentListItem = props => {
  const { id, title } = props.appointment;
  return (
    <div className="col-cal light-row">
      <span className="appointment-details">{title}</span>
      <button className="btn-delete" onClick={props.deleteAppointment}>
        <i className="fa fa-times" aria-hidden="true" id={id}></i>
      </button>
    </div>
  )
}

export default AppointmentListItem;