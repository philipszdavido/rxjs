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
