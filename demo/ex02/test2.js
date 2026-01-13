// 컬렉션
// 자바스크립트는 배열이 따로 없고 리스트, 맵으로 사용함
// 추가, 수정, 삭제, 검색
// 불변 - 기존 데이터가 변하면 변경이 불가능함
let list = [1, 2, 3, 4, 5];

// 1. 수정
// 앝은 복사
let r = list;
// 깊은 복사
let ar = [list[0], list[1], list[2], list[3], list[4]];
// for문을 돌면서 새로운 리스트를 만들어주는 함수(깊은 복사)
let newlist = list.map((i) => i * 2);
console.log(newlist);
console.log("-----------------------------");

// 2, 추가 (전개연산자 -> 자기의 타입을 버리고 알맹이만 뿌린다)
// 프리비어스 데이터와 넥스트 데이터
let addList = [...list, 9];
console.log("list", list);
console.log("addlist", addList);
console.log("-----------------------------");

// 3. 검색
let searchList = list.filter((i) => i == 3);
console.log(searchList);
console.log("-----------------------------");

// 삭제
let delList = list.filter((i) => i != 3);
console.log(delList);
console.log("-----------------------------");
