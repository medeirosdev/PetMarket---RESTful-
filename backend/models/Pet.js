const mongoose = require('../db/conn');
const { Schema } = mongoose;

const Pet = mongoose.model(
    'Pet',
    new Schema({
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        weight: {
            type: Number,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        image: {
            type: Array,  // Para salvar múltiplas informações em só campo, use Array
            required: true
        },
        available: {
            type: Boolean,
        },
        user : Object,
        adopter: Object
        },
        {timestamps : true}, // Para atualizações de data/horário dos dados
    )
);

module.exports = Pet;