const getUsers = (state) => state.messagesPage.users;
const getMessages = (state) => state.messagesPage.messages;
const getMsg = (state) => state.messagesPage.msg;

export {getMessages, getMsg, getUsers}
