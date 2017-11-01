import React from 'react';

const AppointmentListItem = props => {
  const { id, title } = props.appointment;
  return (
    <li>
      <span className="appointment-details">{title}</span>
      <button className="btn-delete" onClick={props.deleteAppointment} id={id}>Delete</button>
    </li>
  )
}

export default AppointmentListItem;