import React from 'react';

const AppointmentNew = props => {
  return (
    <form className="appt-form" onChange={props.handleTitleChange}>
      <input type="textarea" value={props.appointmentForm.title} />
      <button className="btn-primary" onClick={props.handleNewAppt}>Add</button>
    </form>
  )
}

export default AppointmentNew;