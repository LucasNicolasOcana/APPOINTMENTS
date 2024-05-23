export const LOGIN_USER = 'LOGIN_USER';
export const SET_USER_APPOINTMENTS = 'SET_USER_APPOINTMENTS';

export const loginUser = (userData) => {
  return {
    type: LOGIN_USER,
    payload: userData,
  };
};

export const setUserAppointments = (appointmentsData) => {
  return {
    type: SET_USER_APPOINTMENTS,
    payload: appointmentsData,
  };
};
