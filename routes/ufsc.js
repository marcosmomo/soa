module.exports = function (app) {
    var api = app.api.ufsc;

    app.route('/ufsc')
        .post(api.setUfsc); 
}