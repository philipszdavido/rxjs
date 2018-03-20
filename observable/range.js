"use strict";
let { Observable } = require('../rxjs');
Observable.range = function(s, f) {
    if (typeof s != 'number' && typeof f != 'number') {
        throw new Error('range only accepts numbers')
    }
    if (f < s) {
        throw new Error('unaccepted range of numbers')
    }
    return new Observable((_obs) => {
        while (s <= f) {
            _obs.next(s)
            s++
        }
    })
};