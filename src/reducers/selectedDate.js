const initialState = {
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  day: ''
};

export const selectedDate = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_SELECTED_MONTH':
      return state.month;
    default:
      return state;
  }
}