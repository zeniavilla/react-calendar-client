const API_URL = process.env.REACT_APP_API_URL;

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

const removeAppointment = id => {
  return {
    type: 'REMOVE_APPOINTMENT',
    id
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
    return fetch(`${API_URL}/appointments`, {
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
    return fetch(`${API_URL}/appointments/${date}`, {
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
    return fetch(`${API_URL}/appointments/${id}`, {
      method: 'DELETE'
    })
    .then(response => {
      response.text()
      dispatch(removeAppointment(id))
    })
    .catch(error => console.log(error))
  }
}
