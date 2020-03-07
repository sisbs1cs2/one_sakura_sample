module.exports = class sample_controller {
    constructor () {
    }
    execute (req, res, next) {
        // var aaa = 'aaa';
        // console.log(req);
        res.render('contact', {page:'Contact Us', menuId:'contact'});
        // next();
    }
}