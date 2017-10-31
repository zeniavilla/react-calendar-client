const initialState = {
  title: ''
};

export const appointmentForm = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return action.appointmentForm;
    default:
      return state;
  }
}