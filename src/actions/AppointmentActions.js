const API_URL = process.env.API_URL;

// Action Creators



// Aync Actions

const createAppointment = appointment => {
  return disptach => {
    return fetch(`${API_URL}/appointments`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ user: user })
    })
    .then(response => response.json())
    .then(appointment => dispatch(getAppointments(appointment)))
    .catch(error => console.log(error))
  }
}

export default createAppointment;
