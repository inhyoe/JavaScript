function fetchUser(){
    return new Promise((resolve,reject)=>{
        // do network request in 10 sec...
        // return 'ellie'; 그냥 return 상태로 두면 pending(대기)상태임.
        // 그러므로 resolve or reject를 호출해줘야함.
        resolve('ellie')
    });
}

async function fetchUser1(){
    return 'ellie1'
}

const user = fetchUser();
const user2 = fetchUser1();
console.log('me');
// console.log(user);
user.then(console.log); // 비동기함수라 일반적인 console.log보다 늦게 실행됨.
user2.then(console.log)
console.log('me');

// 2.await ✨

function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
    // 프로미스를 리턴하며 ms초가 지나면 reslove를 리턴함.
}

async function getApple(){
    await delay(1000);
    // throw '에러다!!';
    return '🍎';
}

async function getBanana(){
    await delay(1000);
    return '🍌';
}
//=> 훨씬 쉬움.
// function getBanana1(){
//     return delay(1000)
//     .then(()=> '🍌');
// } // promise방식

function pickFruits(){
    return getApple()
    .then(apple =>{
        return getBanana()
        .then(banana => `${apple} + ${banana}`)
    })
}
pickFruits().then(console.log); // 콜백헬이 떠오른다...


// 해결하기위해 async를 사용

async function pickFruits2(){
    const applePromise = getApple();
    const BananaPromise = getBanana();
    const apple = await applePromise;
    const banana = await BananaPromise;
    return `${apple} + ${banana}`;
}
pickFruits2().then(console.log)

// 3. useful Promise APIs
function pickAllFruits(){
    return Promise.all([getApple(),getBanana()])
    .then(fruits => fruits.join(' + '))
}

pickAllFruits().then(console.log)

// 가장 먼저

function pickOnlyOne(){
    return Promise.race([getApple(),getBanana()])
}

pickOnlyOne().then(console.log)