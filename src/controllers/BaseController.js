'use strict'
module.exports = class BaseController
{
    // ベースコントローラ
    constructor (req, res) {
        this.req = req;
        this.res = res;
        this.templete = '';
        this.params = {};
    }

    setTemplete(path) {
        this.templete = path;
    }

    setValue(key, value) {
        this.params[key] = value;
    }

    render() {
        this.res.render(this.templete, this.params);
    }
}