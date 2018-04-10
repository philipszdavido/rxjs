"use strict";
let Observable = require('./../Observable');
Observable.interval = function(_time) {
    if (typeof _time != 'number') {
        throw new Error('invalid argument')
    }
    return new Observable((_obs) => {
        let _i = 0
        setInterval(() => {
            _obs.next(_i)
            _i++
        }, _time)
    })
};