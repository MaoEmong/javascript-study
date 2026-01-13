// 컬렉션(Collection)과 객체(Object)에 대한 예제

// 1. 컬렉션 (배열 - Array)
// 배열은 여러 개의 값을 순서대로 저장하는 자료 구조입니다.
// 자바스크립트의 배열은 다른 언어와 달리 여러 가지 타입의 값을 함께 저장할 수 있습니다.
let list = [1, 2, "삼", 4]; // 숫자, 문자열 등 다양한 타입의 요소를 포함하는 배열

console.log(list); // 배열 전체를 출력: [1, 2, "삼", 4]
console.log("\n"); // 줄바꿈 출력

// 배열 요소에 접근하기
// 배열의 각 요소는 0부터 시작하는 인덱스(index)를 통해 접근할 수 있습니다.
console.log(list[0]); // 첫 번째 요소 (인덱스 0): 1
console.log(list[1]); // 두 번째 요소 (인덱스 1): 2
console.log(list[2]); // 세 번째 요소 (인덱스 2): "삼"
console.log(list[3]); // 네 번째 요소 (인덱스 3): 4
console.log("\n"); // 줄바꿈 출력

// 배열 요소 값 수정하기
// 인덱스를 사용하여 특정 요소의 값을 변경할 수 있습니다.
list[2] = 3; // 세 번째 요소의 값을 "삼"에서 3으로 수정
console.log(list[2]); // 수정된 세 번째 요소 출력: 3

// 배열의 타입 확인
// 자바스크립트에서 배열의 'typeof' 연산 결과는 'object'입니다.
console.log(typeof list); // 'object' 출력
console.log("\n"); // 줄바꿈 출력

// 2. 객체 (Object) - JavaScript Object / JSON(JavaScript Object Notation)
// 객체는 키(key)와 값(value)의 쌍으로 이루어진 속성(property)들의 집합입니다.
// 중괄호 `{}`를 사용하여 정의하며, 각 속성은 쉼표로 구분합니다.
// JSON은 자바스크립트 객체 문법에서 영감을 받은 데이터 교환 표준 형식입니다.
let user = {
    no : 1, // 'no'라는 키에 숫자 1을 값으로 가짐
    name : "길동", // 'name'이라는 키에 문자열 "길동"을 값으로 가짐
    phone : "0102222", // 'phone'이라는 키에 문자열 "0102222"를 값으로 가짐
    hobbys : ["축구", "농구"] // 'hobbys'라는 키에 배열을 값으로 가짐
};

// 객체 속성 값에 접근하기
// 점(.) 표기법 또는 대괄호([]) 표기법을 사용하여 객체의 속성 값에 접근할 수 있습니다.
console.log(user.no); // 'user' 객체의 'no' 속성 값 출력: 1
console.log(user.hobbys[0]); // 'user' 객체의 'hobbys' 배열의 첫 번째 요소 출력: "축구"
console.log("\n"); // 줄바꿈 출력

// 객체 속성 값 수정하기
// 점(.) 표기법을 사용하여 특정 속성의 값을 변경할 수 있습니다.
user.no = 2; // 'user' 객체의 'no' 속성 값을 1에서 2로 수정
console.log(user); // 수정된 'user' 객체 전체 출력
// 출력 결과: { no: 2, name: '길동', phone: '0102222', hobbys: [ '축구', '농구' ] }