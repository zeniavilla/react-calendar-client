const initialState = {
  title: ''
};

export const appointmentForm = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_TITLE':
      return action.obj;
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
}