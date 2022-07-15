export const SET_AUTH_USER = "SET_AUTH_USER";
export const LOGOUT_AUTH_USER = "LOGOUT_AUTH_USER";
export function setAuthUser(id) {
  return {
    type: SET_AUTH_USER,
    id,
  };
}
export function logoutAuthUser() {
  return {
    type: LOGOUT_AUTH_USER,
    id: null,
  };
}
export function handleLoginUser(id) {
  return (dispatch) => {
    dispatch(setAuthUser(id));
  };
}
export function handleLogoutUser(id) {
  return (dispatch) => {
    dispatch(logoutAuthUser());
  };
}
