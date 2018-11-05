var mongoose = require('mongoose');

module.exports = function (app) {
    var api = {};

    api.setUfsc = function (req, res) {
        console.log('set ufsc: ' + JSON.stringify(req.body));

        // sdsdsdsdsd
        mongoose.model('Ufsc').create(req.body).then(function (resp) {
            console.log("resp ufsc: "+resp);
            res.status(201).send({ status: resp });
            return;
        }, function (error) {
            console.log(error);
            res.status(500).send({ status: error });
            return;
        });
    }
    return api;
}