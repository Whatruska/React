const getCurrentProfile = (state) => state.profilePage.currentProfile;
const isFetching = (state) => state.profilePage.isFetching;
const getStatus = (state) => state.profilePage.status;

export {getCurrentProfile, isFetching, getStatus}