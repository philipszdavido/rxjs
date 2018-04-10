const Observer = require('./Observer')

class Subscriber extends Observer {
    constructor(obs, error, complete) {
        super()
        this.destination = obs
    }
    next(v) {
        this.destination.next(v)
    }
}
module.exports = Subscriber