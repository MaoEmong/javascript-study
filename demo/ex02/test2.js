let list = [1, 2, 3, 4, 5];

// 앝은 복사
let r = list;

// 깊은 복사
let ar = [list[0], list[1], list[2], list[3], list[4]];

// for문을 돌면서 새로운 리스트를 만들어주는 함수(깊은 복사)
let newlist = list.map((i) => i * 2);

console.log(newlist);
