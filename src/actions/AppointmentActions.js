const API_URL = process.env.REACT_API_URL;

// Action Creators

const getAppointments = date => {
  return {
    type: 'GET_DATE_APPOINTMENTS',
    date
  }
}

// Aync Actions

const createAppointment = appointment => {
  debugger
  return dispatch => {
    return fetch("http://localhost:3001/api/appointments", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ appointment: appointment })
    })
    .then(response => response.json())
    .then(appointment => dispatch(getAppointments(appointment.date)))
    .catch(error => console.log(error))
  }
}

export default createAppointment;
