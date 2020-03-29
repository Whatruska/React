const getUserId = (state) => state.loginData.userId;
const getEmail = (state) => state.loginData.email;
const isLogged = (state) => state.loginData.isLogged;
const isFetching = (state) => state.loginData.isFetching;
const getErrorMessage = (state) => state.loginData.errorMessage;

export {getUserId, getEmail, isLogged, isFetching, getErrorMessage}