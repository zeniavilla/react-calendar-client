const API_URL = process.env.REACT_API_URL;

// Action Creators

const getAppointments = date => {
  return {
    type: 'GET_DATE_APPOINTMENTS',
    date
  }
}

export const updateTitle = obj => {
  return {
    type: 'UPDATE_TITLE',
    obj
  }
}

const resetForm = () => {
  return {
    type: 'RESET_FORM'
  }
}

// Aync Actions

export const createAppointment = appointment => {
  return dispatch => {
    return fetch("http://localhost:3001/api/appointments", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ appointment: appointment })
    })
    .then(response => response.json())
    .then(appointment => {
      dispatch(getAppointments(appointment.date))
      dispatch(resetForm())
    })
    .catch(error => console.log(error))
  }
}
