function sine(angle) {
    return Math.sin(angle * (Math.PI / 180));
}

function cosine(angle) {
    return Math.cos(angle * (Math.PI / 180));
}

function tangent(angle) {
    return Math.tan(angle * (Math.PI / 180));
}

function logarithm(value, base = 10) {
    return Math.log(value) / Math.log(base);
}

export { sine, cosine, tangent, logarithm };