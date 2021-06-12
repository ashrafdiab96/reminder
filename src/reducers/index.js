import * as actionTypes from '../types';
import { bake_cookie, read_cookie, delete_cookie } from 'sfcookies';

const reminderReducer = (state = [], action) => {
    let reminders = [];
    state = read_cookie("reminder");
    switch(action.type) {
        case actionTypes.ADD_REMINDER:
            reminders = [...state, {text: action.text, date: action.date, id: Math.random()}];
            bake_cookie("reminder", reminders);
            return reminders;
        case actionTypes.REMOVE_REMINDER:
            reminders = state.filter(reminder => reminder.id !== action.id);
            bake_cookie("reminder", reminders);
            return reminders;
        case actionTypes.CLEAR_REMINDERS:
            reminders = [];
            bake_cookie("reminder", reminders);
            return reminders;
        default:
            return state;
    }
};

export default reminderReducer;