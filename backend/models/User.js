const mongoose = require('../db/conn');
const { Schema } = mongoose;

const User = mongoose.model(
    'User',
    new Schema({
        name: {
            type: String,
            required: true
        },
        email:{
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        image: {
            type: String
        },
        phone: {
            type: String,
            required: true
        },
        },
        {timestamps : true}, // Para atualizações de data/horário dos dados
    )
);

module.exports = User;