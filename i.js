const log = console.log;
let arr = [90, 857, 567];
let Himmel = {
  barry: "Yellow girl"
};

let F = {
  d: "from F"
};
let D = {
  fg: 90,
  diysu: "from D",
  __proto__: Himmel
};

F.__proto__ = D;

// log(F.__proto__);

function gog() {
  log(arr[0]);
  return D.diysu;
}
// gog();

/*const {
  NgScrollbar
} = require("/node_modules/ngx-scrollbar/esm5/scrollbar/ng-scrollbar.js");*/

const {
  NgScrollbar
} = require("./node_modules/ngx-scrollbar/bundles/ngx-scrollbar.umd.js");
const { ctorParameters, propDecorators, decorators } = NgScrollbar;
// log(ctorParameters, propDecorators, decorators);

class Subscription {
  constructor(next, error, complete) {
    this.next = next;
    this.error = error;
    this.complete = complete;
  }
  next(data) {
    this.next(data);
  }
  unsubscribe() {
    this.next = () => {};
    this.error = () => {};
    this.complete = () => {};
  }
}

class Observable {
  constructor() {
    this._subscribe = null;
  }

  subscribe(observer) {
    this._subscribe = observer;
    return new Subscription(observer);
  }
}

const ob = new Observable();
const ob1 = ob.subscribe(v => log(v));

ob1.next(78);
ob1.next("nnamdi chidume is crazy");
ob1.unsubscribe();
ob1.next(27);


let a = [
  {id:0},{id:90}
]
let b= a.concat([{id:80}])

// log(a[0] === b[0])

/**
    The IterableChanges interface allows us to iterate over the changes in different ways, for instance:

    Iterate over the added items.
    Iterate over the removed items.
    Iterate over the items which have changed their position.
    Iterate over all the changes.
 */
class Differ {
  constructor() {
    this._items = null
    this._added = []
    this._removed = []
  }

  create(arr) {
    this._items = arr
  }

  diff(arr) {
    this.findAdded(arr)
    this.findRemoved(arr)
    return this
  }

  findAdded(arr) {
    let b = arr
    let a = this._items

    for (let ii = 0; ii < b.length; ii++) {
      const elem = b[ii];
      for (let i = 0; i < a.length; i++) {
        const el = a[i];
        // log(elem,el)
        // log(elem === el)
        if((i == a.length-1) && (elem === el)==false && (ii == b.length-1)) {
          // log(el, " was added")
          this._added.push(el)
        }
      }  
    }
  }

  findRemoved(arr) {
    let a = arr
    let b = this._items

    for (let ii = 0; ii < b.length; ii++) {
      const elem = b[ii];
      for (let i = 0; i < a.length; i++) {
        const el = a[i];
        // log(elem,el)
        // log(elem === el)
        if((i == a.length-1) && (elem === el)==false && (ii == b.length-1)) {
          // log(el, " was added")
          this._removed.push(el)
        }
      }  
    }

  }
  forEachAddedItem(fn) {
    this._added.forEach((item) => fn(item))
  }
  forEachRemovedItem(fn) {
    this._removed.forEach((item) => fn(item))
  }
}

const d = new Differ()
d.create(a)
const diff = d.diff(b)
diff.forEachAddedItem((item)=>log('Added: ', item))
diff.forEachRemovedItem((item)=>log('Removed: ', item))
