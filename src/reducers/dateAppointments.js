export const dateAppointments = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATE_APPOINTMENTS':
      return action.appointments;
    case 'ADD_APPOINTMENT':
      return [...state, action.appointment];
    default:
      return state;
  }
}