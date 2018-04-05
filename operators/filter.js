"use strict";

let { Observable } = require('../rxjs');

Observable.prototype.filter = function filter(fn) {
    const source = this;
    return Observable.create(observer => {
        source.subscribe({
            next: (v) => observer.next(fn(v)),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        });
    });
}
exports.filter = filter