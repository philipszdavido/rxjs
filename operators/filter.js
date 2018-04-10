"use strict";

let Observable = require('./../Observable');
const Operator = require('./../Operator')
const Subscriber = require('./../Subscriber')

Observable.prototype.filter = function filter(fn) {
    return _filter(fn)(this)
        /*const source = this;
        return Observable.create(observer => {
            source.subscribe({
                next: (v) => observer.next(fn(v)),
                error: (err) => observer.error(err),
                complete: () => observer.complete()
            });
        });*/
}

function _filter(predicate, thisArg) {
    return function filterOperatorFunction(source) {
        return source.lift(new FilterOperator(predicate, thisArg));
    };
}

class FilterOperator extends Operator {
    constructor(predicate, thisArg) {
        super()
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    call(subscriber, source) {
        return source.subscribe(new FilterSubscriber(subscriber, this.predicate, this.thisArg));
    };
}

class FilterSubscriber extends Subscriber {

    constructor(destination, predicate, thisArg) {
        super(destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.count = 0;
    }

    _next(value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        if (result) {
            this.destination.next(value);
        }
    };
}