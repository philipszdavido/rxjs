let { Observable, Subject, BehaviorSubject } = require('./rxjs.js')
require('./observable/from')
require('./observable/of')

/** */
var subject = new BehaviorSubject(0); // 0 is the initial value
subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});
subject.next(1);
subject.next(2);
subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});
subject.next(3);
/** */
return
var subject = new Subject();
subject.subscribe({
    next: (v) => console.log('observerA: ' + v)
});
subject.subscribe({
    next: (v) => console.log('observerB: ' + v)
});

var observable = Observable.from([1, 2, 3]);
observable.subscribe(subject);
/*subject.next(1);
subject.next(2);*/

let arr = Observable.from(['madrid', 'juve'])
arr.subscribe({
    next: x => console.log(x)
})
let _of = Observable.of(1, 2)
_of.subscribe({
    next: x => console.log(x)
})
let source = Observable.create(function(observer) {
    //console.log('Hello')
    //observer.next(9)
    //  observer.next(90)
    //    observer.next(900)
    setTimeout(() => {
        //        observer.next(10)
        //console.log('timeout', observer)
    }, 1000)
})

source.subscribe({
    next: x => console.log(x)
})

source.subscribe({
    next: x => console.log(`Hello: ${x}`)
})