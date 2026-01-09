// 변수 선언
let n1; // undefined
console.log(n1);

// 변수의 초기화
let n2 = 1;

// 변수의 타입 (동적 타입 = 타입추론)
let n3 = 10; // number(int)
console.log(typeof n3);

let n4 = 10.5;
console.log(typeof n4);

let n5 = "문자열";
console.log(typeof n5);

let n6 = '문자열 "안녕"';
console.log(n6);
console.log(typeof n6);

let n7 = `문자열 ${n4}`;
console.log(n7);
console.log(typeof n7);

let n8 = true;
console.log(n8);
console.log(typeof n8);

let n9 = null;
console.log(n9);
console.log(typeof n9);
