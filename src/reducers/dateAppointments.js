export const dateAppointments = (state = [], action) => {
  switch (action.type) {
    case 'GET_DATE_APPOINTMENTS':
      return action.appointments;
    case 'ADD_APPOINTMENT':
      return [...state, action.appointment];
    case 'REMOVE_APPOINTMENT':
      return state.filter(obj => obj.id !== parseInt(action.id));
    default:
      return state;
  }
}