const Observable = require('./Observable')

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
module.exports = Subject