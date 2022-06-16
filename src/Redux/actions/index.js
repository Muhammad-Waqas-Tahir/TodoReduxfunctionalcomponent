import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./type";

export const addtodo = (message) => ({
  type: ADD_TODO,
  message,
});

export const deletetodo = (id) => ({
  type: DELETE_TODO,
  id,
});
export const updatetodo = (message, id) => ({
  type: UPDATE_TODO,
  message,
  id,
});
