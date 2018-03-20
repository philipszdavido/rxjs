/**
 * Author: Chidume Nnamdi
 */

/**
 * let ob = Rx.Observable.create((observer)=>{
 *  observer.onNext(42)
 *  observer.onCompleted()
 * })
 * 
 * ob.subscribe((v)=>{
 *  console.log(v)
 * })
 */

class AsyncSubject {}
class ReplaySubject {}
class PublishSubject {}

class Observer {

    /** push values to stream */
    next() {}
    error() {}
    complete() {}
}

class Observable {

    constructor(fn) {
        this._subscribe = fn
    }

    static create(fn) {
        return new Observable(fn)
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
        this._subscribe(_observer)
    }
}

class Subject extends Observable {
    constructor() {
        super()
        this.observers = []
    }
    subscribe(sub) {
        this.observers.push(sub)
    }
    next(v) {
        this.observers.forEach((ob) => {
            ob.next(v)
        })
    }
}
class BehaviorSubject extends Subject {
    constructor(_value) {
        super()
        this._value = _value
    }
    subscribe(_obs) {
        Subject.prototype.subscribe.call(this, _obs)
        _obs.next(this._value)
    }
    next(_v) {
        Subject.prototype.next.call(this, this._value = _v)
    }
}

exports.Observable = Observable
exports.Subject = Subject
exports.BehaviorSubject = BehaviorSubject