//the action types are defined in a separate file
import * as types from '../constants/ActionTypes'

//These actions are the payloads of information that will send data from the
//application to the 'store' which holds the universal state of the entire application.

//The Action creators are the functions that create actions.  In redux, action creators return an action

//good idea to pass as little data to each action as possible

//actions for todo's and lists

//todo actions

export function addTodo(text) {
  return {
    type: types.ADD_TODO,
    text
  }
}

export function deleteTodo(id) {
  return {
    type: types.DELETE_TODO,
    id
  }
}

export function editTodo(id, text) {
  return {
    type: types.EDIT_TODO,
    id,
    text
  }
}

export function completeTodo(id) {
  return {
    type: types.COMPLETE_TODO,
    id
  }
}

export function completeAll() {
  return {
    type: types.COMPLETE_ALL
  }
}

export function clearCompleted() {
  return {
    type: types.CLEAR_COMPLETED
  }
}

//LIST Actions
export function addList(listtext) {
  return {
    type: types.ADD_LIST,
    listtext
  }
}

export function deleteList(id) {
  return {
    type: types.DELETE_LIST,
    id
  }
}

export function editList(id, listtext) {
  return {
    type: types.EDIT_LIST,
    id,
    listtext
  }
}
