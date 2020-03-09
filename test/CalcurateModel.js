'use strict'
const assert = require('chai').assert;
const target = require('../src/models/CalcurateModel');

describe('CalcurateModelのテスト', () => {
    it('消費税計算１', () => {
        let objTarget = new target();
        let price = 100;
        let actual = objTarget.calcurateTax(price);
        let expect = 108;
        assert.strictEqual(actual, expect);
    })
})
