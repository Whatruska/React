export const required = value => {
    if (!value || value === "") return "Field is required";
    return undefined;
}