export const SET_AUTHED_USER = 'SET_AUTHED_USER'

export const REST_AUTHED_USER='REST_AUTHED_USER'

export function setAuthedUser (id) {
  return {
    type: SET_AUTHED_USER,
    id,
  }
}

export function restAuthedUser (id) {
    return {
      type: REST_AUTHED_USER,
      id,
    }
  }