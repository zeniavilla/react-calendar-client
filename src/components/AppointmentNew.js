import React from 'react';

const AppointmentNew = props => {
  return (
    <form className="appt-form" onChange={props.handleTitleChange}>
      <input type="textarea" />
      <button className="btn-primary" onClick={props.handleNewAppt}>Add</button>
    </form>
  )
}

export default AppointmentNew;