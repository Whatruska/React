export const minLength = length => value => {
    if (value && value.length < length) return "Min length is " + length;
    else if (!value) return "Field is empty"
    return undefined;
}