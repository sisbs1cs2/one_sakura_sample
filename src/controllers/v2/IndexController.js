'use strict'

// extends class
const BaseController = require('../BaseController');

module.exports = class Index extends BaseController {
    execute() {
        this.setTemplete('index');
        this.setValue('page', 'HOME');
        this.setValue('menuId', 'home');
        this.render();
    }
}
