var mongoose = require('mongoose');

var schema = mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: false
    },
    pais: {
        type: String,
        required: false
    }      

});

mongoose.model('Ufsc', schema);