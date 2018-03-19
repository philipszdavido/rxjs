"use strict";
let { Observable } = require('../rxjs');
//var from_1 = require('../../observable/from');
Observable.of = function(params) {
    let _p = []
    if (typeof params !== 'array') {
        for (var key in arguments) {
            _p.push(arguments[key])
        }
    } else {
        _p = params
    }
    return new Observable((_obs) => {
        for (var index = 0; index < _p.length; index++) {
            var element = _p[index];
            _obs.next(element)
        }
    })
};