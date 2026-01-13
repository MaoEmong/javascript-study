// 변수 선언 및 초기화, 데이터 타입 학습 예제

// 1. 변수 선언
// 'let' 키워드를 사용하여 변수 'n1'을 선언합니다.
// 값을 할당하지 않으면 자바스크립트는 기본적으로 'undefined'를 할당합니다.
let n1; // n1은 현재 undefined 값을 가짐
console.log(n1); // console에 n1의 현재 값(undefined)을 출력

// 2. 변수의 초기화
// 'let' 키워드를 사용하여 변수 'n2'를 선언함과 동시에 값 1로 초기화합니다.
let n2 = 1;

// 3. 변수의 타입 (동적 타입 지정 및 타입 추론)
// 자바스크립트는 동적 타입(Dynamically Typed) 언어로, 변수 선언 시 타입을 명시하지 않습니다.
// 변수에 할당되는 값에 따라 타입이 자동으로 결정(타입 추론)됩니다.

// 숫자형 (Number) - 정수
let n3 = 10; // n3에 정수 10을 할당하여 number 타입이 됨
console.log(typeof n3); // 'typeof' 연산자는 변수의 데이터 타입을 문자열로 반환 (예: "number")

// 숫자형 (Number) - 실수
let n4 = 10.5; // n4에 실수 10.5를 할당하여 number 타입이 됨
console.log(typeof n4); // 'number' 출력

// 문자열 (String) - 큰따옴표 사용
let n5 = "문자열"; // n5에 문자열을 할당하여 string 타입이 됨
console.log(typeof n5); // 'string' 출력

// 문자열 (String) - 작은따옴표 사용 및 문자열 내 따옴표 포함
let n6 = '문자열 "안녕"'; // n6에 문자열을 할당. 작은따옴표 안에 큰따옴표를 사용할 수 있음.
console.log(n6); // "문자열 "안녕"" 출력
console.log(typeof n6); // 'string' 출력

// 문자열 (String) - 템플릿 리터럴 (Template Literal) (ES6+)
// 백틱(``)을 사용하여 문자열을 정의하며, '${변수명}' 문법으로 변수나 표현식을 문자열 안에 쉽게 삽입할 수 있습니다.
let n7 = `문자열 ${n4}`; // n7에 템플릿 리터럴을 사용하여 문자열과 변수 n4의 값을 결합
console.log(n7); // "문자열 10.5" 출력
console.log(typeof n7); // 'string' 출력

// 불리언 (Boolean)
// 논리적인 참(true) 또는 거짓(false) 값을 가집니다.
let n8 = true; // n8에 논리값 true를 할당하여 boolean 타입이 됨
console.log(n8); // true 출력
console.log(typeof n8); // 'boolean' 출력

// Null (널)
// '값이 없음'을 명시적으로 나타낼 때 사용합니다. 의도적으로 비어있는 값을 표현합니다.
let n9 = null; // n9에 null을 할당
console.log(n9); // null 출력
// 주의: JavaScript의 역사적인 버그로 인해 'typeof null'은 'object'를 반환합니다.
// 이는 null이 객체가 아님에도 불구하고 하위 호환성을 위해 수정되지 않고 있습니다.
console.log(typeof n9); // 'object' 출력 (실제로는 기본형 타입)