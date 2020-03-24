export const minLength = length => value => {
    if (value && value.length < length) return "Min length is " + length;
    return undefined;
}