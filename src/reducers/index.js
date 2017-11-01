import { combineReducers } from 'redux';
import { selectedDate } from './selectedDate';
import { appointmentForm } from './appointmentForm';
import { dateAppointments } from './dateAppointments';

export default combineReducers({
  selectedDate,
  appointmentForm,
  dateAppointments
});