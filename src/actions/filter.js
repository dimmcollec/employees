import * as types from '../constants'

export function doFilter(search) {

  return {
    type: types.FILTER_EMPLOYEE,
    payload: {
      search
    }
  }
}
