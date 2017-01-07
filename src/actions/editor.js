import * as types from '../constants'

export function editEmployee(attr, id) {

  return {
    type: types.EDIT_EMPLOYEE,
    payload: {
      attr,
      id
    }
  }
}

export function confirmEditEmployee(id, fieldName, data) {

  return {
    type: types.CONFIRM_EDIT_EMPLOYEE,
    payload: {
      id,
      fieldName,
      data
    }
  }
}
