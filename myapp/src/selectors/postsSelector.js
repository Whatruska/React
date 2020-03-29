const getUsers = (state) => state.userPages.users;
const getPostCounts = (state) => state.userPages.myPostsCount;

export {getPostCounts, getUsers}