'use strict'
const assert = require('chai').assert;
const target = require('../src/controllers/v2/IndexController');

describe('IndexControllerのテスト', () => {
    it('テスト１', () => {
        let objTarget = new target('aaa', 'bbb');
        //objTarget.execute();
        assert.strictEqual(objTarget.req, 'aaa');
        assert.strictEqual(objTarget.res, 'bbb');
    })
    it('テスト２', () => {
        let objTarget = new target('aaa', 'bbb');
        //objTarget.execute();
        assert.strictEqual(objTarget.req, 'aaa');
        assert.strictEqual(objTarget.res, 'bbb');
    })
    it('テスト３', () => {
        let objTarget = new target('aaa', 'bbb');
        //objTarget.execute();
        assert.strictEqual(objTarget.req, 'aaa');
        assert.strictEqual(objTarget.res, 'bbb');
    })
})
