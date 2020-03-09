'use strict'

// extends class
const BaseController = require('../BaseController');

// require
const CalcurateModel = require('../../models/CalcurateModel');

module.exports = class CampaignController extends BaseController {
    execute() {
        this.setTemplete('campaign');
        this.setValue('page', 'キャンペーン（テスト）');
        this.setValue('menuId', 'home');
        let calcurate = new CalcurateModel();
        this.setValue('price1', calcurate.calcurateTax(9876));
        this.setValue('price2', calcurate.calcurateTax(8765));
        this.setValue('price3', calcurate.calcurateTax(7654));
        this.setValue('price4', calcurate.calcurateTax(5678));
        this.render();
    }
}
