class Subscription {
    constructor(unsubscribe) {
        if (unsubscribe) {
            this.unsubscribe = unsubscribe            
        }
        this.subscriptions = []
    }
    unsubscribe() {
        this.subscriptions.forEach((subscription)=> {
            subscription = null
        }, this);
    }
    add(observer) {
        this.subscriptions.push(observer)
    }
}
module.exports = Subscription