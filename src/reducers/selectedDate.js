const initialState = {
  month: new Date().getMonth(),
  year: new Date().getFullYear(),
  day: ''
};

export const selectedDate = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_DATE':
      return Object.assign({}, state, action.changes)
    default:
      return state;
  }
}