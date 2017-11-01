export const dateAppointments = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATE_APPOINTMENTS':
      return action.appointments;
    default:
      return state;
  }
}