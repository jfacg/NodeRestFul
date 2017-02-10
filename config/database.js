const mongoose = require('mongoose')

module.exports = mongoose.connect('mongodb://localhost/db_finance')

mongoose.Error.messages.general.require = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite minimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é menor que o limite minimo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido para o atributo '{PATH}'."
