"use strict";

const Observable = require('./../Observable');
const Operator = require('./../Operator')
const Subscriber = require('./../Subscriber')

Observable.prototype.map = function(fn) {
    return _map(fn)(this)
        /*const source = this;
        return new Observable(observer => {
            source.subscribe({
                next: (v) => observer.next(_fn(v)),
                error: (err) => observer.error(err),
                complete: () => observer.complete()
            });
        });*/
}

function _map(predicate, thisArg) {
    return function mapOperatorFunction(source) {
        return source.lift(new MapOperator(predicate, thisArg));
    };
}

class MapOperator extends Operator {
    constructor(predicate, thisArg) {
        super()
        this.predicate = predicate;
        this.thisArg = thisArg;
    }
    call(subscriber, source) {
        return source.subscribe(new MapSubscriber(subscriber, this.predicate, this.thisArg));
    };
}

class MapSubscriber extends Subscriber {

    constructor(destination, predicate, thisArg) {
        super(destination);
        this.predicate = predicate;
        this.thisArg = thisArg;
        this.count = 0;
    }

    next(value) {
        var result;
        try {
            result = this.predicate.call(this.thisArg, value, this.count++);
        } catch (err) {
            this.destination.error(err);
            return;
        }
        this.destination.next(result);
    };
}