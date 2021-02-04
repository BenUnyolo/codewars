function validatePin(pin: string): boolean {
    const sixDigi = /^[0-9]{6}$/
    const fourDigi = /^[0-9]{4}$/
    return pin.match(sixDigi) ? true : pin.match(fourDigi) ? true : false;
}

console.log(validatePin('0000'))

module.exports = validatePin