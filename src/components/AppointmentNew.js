import React from 'react';

// styles
import '../styles/components/appointmentForm.css';

const AppointmentNew = props => {
  return (
    <form className="appt-form" onChange={props.handleTitleChange}>
      <input type="textarea" value={props.appointmentForm.title} placeholder="Title" />
      <button className="btn-primary" onClick={props.handleNewAppt}><i class="fa fa-plus" aria-hidden="true"></i></button>
    </form>
  )
}

export default AppointmentNew;