// 함수

//f(x) = x + 1  // es5 문법
// 1급 객체
function f(x, y) {
  return x + y;
}

let num = f(5, "10");
console.log(num);

// es6 문법
const add = (x, y) => {
  return x + y;
};
