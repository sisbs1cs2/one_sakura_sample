'use strict'
const assert = require('chai').assert;
const target = require('../src/controllers/v2/CampaignController');

describe('CampaignControllerのテスト', () => {
    it('ダミーテスト１', () => {
        let objTarget = new target('aaa', 'bbb');
        //objTarget.execute();
        assert.strictEqual(objTarget.req, 'aaa');
        assert.strictEqual(objTarget.res, 'bbb');
    })
    it('ダミーテスト２', () => {
        let objTarget = new target('aaa', 'bbb');
        //objTarget.execute();
        assert.strictEqual(objTarget.req, 'aaa');
        assert.strictEqual(objTarget.res, 'bbb');
    })
    it('ダミーテスト３', () => {
        let objTarget = new target('aaa', 'bbb');
        //objTarget.execute();
        assert.strictEqual(objTarget.req, 'aaa');
        assert.strictEqual(objTarget.res, 'bbb');
    })
})
