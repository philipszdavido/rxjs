'use strict'

const Observer = require('./Observer')
const Subscription = require('./Subscription')

class Subscriber extends Subscription /*implements Observer*/ {
    constructor(obs, error, complete) {
        super()
        if (typeof obs == 'function') {
            this.next = obs
        } else {
            this.destination = obs            
        }
    }
    next(v) {
        this.destination.next(v)
    }
}
module.exports = Subscriber