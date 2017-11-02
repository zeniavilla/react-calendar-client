import React, { Component } from 'react';
import { connect } from 'react-redux';

// Components
import AppointmentListItem from '../components/AppointmentListItem';

// Actions
import { deleteAppointment } from '../actions/AppointmentActions';

// Styles
import '../styles/components/appointments.css';

class AppointmentsContainer extends Component {
  constructor(props) {
    super(props)
  }

  handleDeleteAppointment = event => {
    event.preventDefault();
    this.props.deleteAppointment(event.target.id);
  }

  render() {
    let displayAppointments = this.props.appointments.map(
      appt => <AppointmentListItem key={appt.id} appointment={appt} deleteAppointment={this.handleDeleteAppointment} />
    );
    return(
      <div className="appointments-container">
        {displayAppointments}
      </div>
    )
  }
}

export default connect(null, { deleteAppointment })(AppointmentsContainer);