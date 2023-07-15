export const getInitials = (input) => {
    const regex = /^(\w)\w*(?:\s+(\w)\w*)?$|^(\w)$/;
    const matches = input.match(regex);
    if (matches) {
        return (matches[1] || "") + (matches[2] || matches[3] || "");
    }
    return "";
};
