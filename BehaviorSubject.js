const Subject = require('./Subject')

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
module.exports = BehaviorSubject