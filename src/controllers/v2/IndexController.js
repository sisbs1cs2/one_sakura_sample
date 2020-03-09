'use strict'

// extends class
const BaseController = require('../BaseController');

// require
const CalcurateModel = require('../../models/CalcurateModel');

module.exports = class IndexController extends BaseController {
    execute() {
        this.setTemplete('index');
        this.setValue('page', 'ホーム（テスト）');
        this.setValue('menuId', 'home');
        let calcurate = new CalcurateModel();
        this.setValue('price', calcurate.calcurateTax(9876));
        this.setValue('use', calcurate.calcurateTax(4567));
        this.render();
    }
}
