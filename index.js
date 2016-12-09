'use strict'

var es6template = require('es6-template')

exports.name = 'es6-template'
exports.inputFormats = ['es6-template']
exports.outputFormat = 'html'

exports.compile = es6template.compile
