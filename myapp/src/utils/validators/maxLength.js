export const maxLength = (length) => {
    return (value) => {
    if (value && value.length > length) return "Max length is " + length;
    return undefined;
    }
}