// 람다 표현식 (expression -> 값으로 평가될 수 있는 코드 조각)

// 함수 값!!
let m = function m1() {
  return 1;
};

let m1 = function () {};

// 람다 표현식 (ES6)
let m2 = () => 3;

let m3 = (x) => x + 1;

let m4 = (x, y) => {
  let r = x + y;
  return r / 2;
};

let m5 = (x, y) => (x + y) / 2;

let m6 = function good() {
  return 1;
};

function haha(y) {
  y();
}

haha(m6);
