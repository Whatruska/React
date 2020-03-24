export const email = email => {
    if (email && email.toString().indexOf('@') === -1) return "Invalid email format";
    return undefined;
}