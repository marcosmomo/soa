module.exports = function (app) {
    var api = app.api.order;

    app.route('/order')
        .post(api.setOrder)
        .delete(api.delOrder);
}