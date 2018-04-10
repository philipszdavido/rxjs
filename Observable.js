const Subscriber = require('./Subscriber')
class Observable {

    constructor(fn) {
        this._subscribe = fn
    }

    static create(fn) {
        return new Observable(fn)
    }

    lift(operator) {
        var observable = new Observable();
        observable.source = this;
        observable.operator = operator;
        return observable;
    }

    _subscribe() {}

    /**
     * .subscribe({
     *  next: x=> console.log(`emitted ${x}`),
     *  error: err=> console.log(`Error ${err}`),
     *  complete: cmp=> console.log(`Completed ${cmp}`)
     * })
     * @param {*} observer 
     */
    subscribe(_observer) {
        let sink = new Subscriber(_observer)
        var operator = this.operator;

        if (operator) {
            operator.call(sink, this.source);
        } else {
            this._subscribe(sink)
        }
        return sink
    }
}
module.exports = Observable