const getUsers = (state) => state.userList.users;
const getPageSize = (state) => state.userList.pageSize;
const getPageCount = (state) => state.userList.pageCount;
const isFetching = (state) => state.userList.isFetching;

export {getUsers, getPageCount, getPageSize, isFetching}