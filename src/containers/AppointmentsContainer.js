import React, { Component } from 'react';

// Components
import AppointmentListItem from '../components/AppointmentListItem';

class AppointmentsContainer extends Component {
  constructor(props) {
    super(props)
  }

  deleteAppointment = event => {
    event.preventDefault();
    console.log(event.target)
  }

  render() {
    let displayAppointments = this.props.appointments.map(
      appt => <AppointmentListItem key={appt.id} appointment={appt} deleteAppointment={this.deleteAppointment} />
    );
    return(
      <ul>
        {displayAppointments}
      </ul>
    )
  }
}

export default AppointmentsContainer;