"use strict";

let { Observable } = require('../rxjs');

Observable.prototype.map = function(_fn) {
    const source = this;
    return new Observable(observer => {
        source.subscribe({
            next: (v) => observer.next(_fn(v)),
            error: (err) => observer.error(err),
            complete: () => observer.complete()
        });
    });
}