import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from "./actionTypes";

export const addContact = (data) => {
  return {
    type: ADD_CONTACT,
    payload: data,
  };
};

export const editContact = (data) => {
  return {
    type: EDIT_CONTACT,
    payload: data,
  };
};

export const deleteContact = (data) => {
  return {
    type: DELETE_CONTACT,
    payload: data,
  };
};
