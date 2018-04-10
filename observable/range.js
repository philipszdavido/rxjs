"use strict";
let Observable = require('./../Observable');
Observable.range = function(s, f) {
    if (typeof s != 'number' && typeof f != 'number') {
        throw new Error('range only accepts numbers')
    }
    if (f < s) {
        throw new Error('unaccepted range of numbers')
    }
    if (!f) {
        f = s
        s = 0
    }
    return new Observable((_obs) => {
        while (s <= f) {
            _obs.next(s)
            s++
        }
    })
};