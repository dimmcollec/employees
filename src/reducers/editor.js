import * as types from '../constants'

const initialState = {
  editable: '',
  idEdit: null
}

export default function(state = initialState, action) {
  const { type, payload } = action

  switch (type) {

    case types.EDIT_EMPLOYEE:
      return { ...state, editable: payload.attr, idEdit: payload.id}

    default:
      return state
  }
}
