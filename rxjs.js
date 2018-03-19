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

const EventEmitter = require('events')
class _Emitter extends EventEmitter {}

const __Emitter = new _Emitter()

class AsyncSubject {}
class ReplaySubject {}
class PublishSubject {}

class Observer {

    constructor() {
        this.stream = []
        this.subscribers = []
        this.fn = null
        class _Emitter extends EventEmitter {}
        const __Emitter = new _Emitter()
        this._emitter = __Emitter
        this._emitter.on('start', function() {

        })
    }

    /** push values to stream */
    next(v) {
        this.stream.push(v)
    }

    onError(v) {

    }

    onCompleted(v) {

    }
    flushStream() {
        this.stream = []
    }
    startEmit() {
        this._emitter.emit('start')
    }
}

class Observable {

    constructor(fn) {
        this._subscribe = fn
    }
    static create(fn) {
        return new Observable(fn)
    }
    _subscribe() {}
    static interval() {}
    static range() {}
    static distinct() {}
    map() {}
    filter() {}

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

/*let source = Observable.create(function(observer) {
    //console.log('Hello')
    observer.next(9)
    observer.next(90)
    observer.next(900)
    setTimeout(() => {
        observer.next(10)
            //console.log('timeout', observer)
    }, 1000)
})

source.subscribe({
    next: x => console.log(x)
})

source.subscribe({
    next: x => console.log(`Hello: ${x}`)
})
console.log('end')
*/
exports.Observable = Observable
exports.Subject = Subject
exports.BehaviorSubject = BehaviorSubject