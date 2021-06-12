import * as actionTypes from '../types';

export const add_reminder = (text, date) => {
    const action = {
        type: actionTypes.ADD_REMINDER,
        text,
        date
    }
    return action;
};

export const remove_reminder = (id) => {
    const action = {
        type: actionTypes.REMOVE_REMINDER,
        id
    };
    return action;
};

export const clear_reminders = () => {
    const action = {
        type: actionTypes.CLEAR_REMINDERS
    };
    return action;
};