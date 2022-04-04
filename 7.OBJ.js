const obj = {}; // 'object literal' syntax
const obj2 = new Object() // 'object constructor' syntax


const ellie = {name : 'ellie', age:4}

ellie.hasJob = true; // 동적으로 object에 추가 가능
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2.computed properties
ellie['hasJob'] = true;
console.log(ellie['hasJob']); // 보통 value값이 명확한 경우는 dot으로 씀 

console.log(ellie.name);    // dot or
console.log(ellie['name']); // computed property. (Key always String type!)

function printValue(obj,key){
    console.log(obj[key]);
    // console.log(obk.key); xx 실행되지 않음 
}

printValue(ellie,'name')

// 3. Property value shorthand

const person1 = { name: 'bob',age :2}
const person2 = { name: 'steve',age :3}
const person3 = { name: 'dave',age :4}


const person4 = new Person('ellie',30)

console.log(person4);

// 4. constructor function (생성자함수)
function Person(name,age){
    // return{
    //     name,
    //     age
    // } <-- 이렇게 해도 됨

    // this = {};
    this.name = name,
    this.age = age
    // return this
}

// 5. in operator(생성자): property existence check(key in obj)
console.log('name' in ellie);
console.log('age' in ellie); // key in obj

console.log('random' in ellie); // false
console.log(ellie.obj);         // undefined

// 6. for..in vs for..of
// for(key in obj)

for(key in ellie){
    console.log(key); // 키들이 출력됨
}

//for value of iterable

const array = [1,2,3,4];
for (let i = 0; i< array.length; i++){
    console.log(i); // <- 너무 김
}

for( value of array){
    console.log(value);
}

// 7. Fun cloning
const user = { name: 'ellie', age:'20'};
const user2 = user;

user2.name = 'coder'
console.log(user); // 참조하는 값이 같기때문에

const user3 = {};
for (key in user){
    user3[key] = user[key];
}
console.clear();
console.log(user3);

const user4 = Object.assign({} ,user);
console.log(user4);

const fruit1 = {color : 'red'};
const fruit2 = {color:'blue', size:'big'}
const mixed = Object.assign({},fruit1,fruit2) //동일한 요소가 있다면 뒤에있는 요소가 덮어씌움
console.log(mixed.color);
console.log(mixed.size);