'use strict'

module.exports = class CalcurateModel {
    calcurateTax(price) {
        let result = Math.round(price * 1.10);
        return result;
    }
}