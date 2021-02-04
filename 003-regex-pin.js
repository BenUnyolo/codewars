function validatePin(pin) {
    var sixDigi = /^[0-9]{6}$/;
    var fourDigi = /^[0-9]{4}$/;
    return pin.match(sixDigi) ? true : pin.match(fourDigi) ? true : false;
}
console.log(validatePin('0000'));
module.exports = validatePin;
