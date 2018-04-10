"use strict";
let Observable = require('./../Observable');
//var from_1 = require('../../observable/from');
Observable.from = function(params) {
    return new Observable((_obs) => {
        for (var index = 0; index < params.length; index++) {
            var element = params[index];
            _obs.next(element)
        }
    })
};