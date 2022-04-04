// Synchronous callback 즉각적콜백(동기식콜백)
function printImmediately(print){
    print();
}


// Asynchronous callback(비동기식 콜백)
function printWithDelay(print,timeout){
setTimeout(print, timeout);
}


console.log('1');

console.log('3');

setTimeout(()=>{
    console.log('2');
},1000) // 비동기적인 실행 방법. (나중에 다시 불러줘) CallBack!!!!
printImmediately(()=> console.log('hello'));
//함수는 호이스팅되어서 가장 위로 갔다. 다만 출력은 순서대로


printWithDelay( () => console.log('callback'), 2000 ); //비동기