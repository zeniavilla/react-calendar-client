const API_URL = process.env.REACT_API_URL;

// Action Creators

const setAppointments = appointments => {
  return {
    type: 'GET_DATE_APPOINTMENTS',
    appointments
  }
}

const addAppointment = appointment => {
  return {
    type: 'ADD_APPOINTMENT',
    appointment
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
      dispatch(addAppointment(appointment))
      dispatch(resetForm())
    })
    .catch(error => console.log(error))
  }
}

export const getAppointments = date => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/appointments/${date}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(appointments => dispatch(setAppointments(appointments)))
    .catch(error => console.log(error))
  }
}

export const deleteAppointment = id => {
  return dispatch => {
    return fetch(`http://localhost:3001/api/appointments/${id}`, {
      method: 'DELETE'
    }).then(response => response.json())
    .catch(error => console.log(error))
  }
}
