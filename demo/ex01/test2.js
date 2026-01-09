// 컬렉션과 오브젝트

// 1. 컬렉션
let list = [1,2,"삼",4];

console.log(list);
console.log("\n");
console.log(list[0]);
console.log(list[1]);
console.log(list[2]);
console.log(list[3]);
console.log("\n");
list[2] = 3;
console.log(list[2]);
console.log(typeof list);
console.log("\n");

// 2. 오브젝트 javascript object / json(javascript object notation)
let user = {
    no : 1,
    name : "길동",
    phone : "0102222",
    hobbys : ["축구", "농구"]
};
console.log(user.no);
console.log(user.hobbys[0]);
console.log("\n");
user.no = 2;
console.log(user);
