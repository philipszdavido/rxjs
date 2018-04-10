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

const Observable = require('./Observable')
const Subject = require('./Subject')
const BehaviorSubject = require('./BehaviorSubject')

require('./observable/from')
require('./observable/of')
require('./observable/range')
require('./observable/interval')

/** operators */
require('./operators/filter')
require('./operators/map')

exports.Observable = Observable
exports.Subject = Subject
exports.BehaviorSubject = BehaviorSubject