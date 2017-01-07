import * as types from '../constants'

export function addEmployee(name, surname, middleName, email, skills) {

  return {
    type: types.ADD_EMPLOYEE,
    payload: {
      name,
      surname,
      middleName,
      email,
      skills
    },
    generateId: true
  }
}

export function deleteEmployee(id) {

  return {
    type: types.DELETE_EMPLOYEE,
    payload: {
      id
    }
  }
}
