function canIterate(obj) {
    return obj != null && typeof obj[Symbol.iterator] === 'function';
}

module.exports = canIterate;
