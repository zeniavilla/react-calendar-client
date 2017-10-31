import { combineReducers } from 'redux';
import { selectedDate } from './selectedDate';
import { appointmentForm } from './appointmentForm';

export default combineReducers({
  selectedDate,
  appointmentForm
});