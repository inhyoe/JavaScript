
// Promise is a Javascript object for asynchronous operation ->비동기적인
// state : pending(수행중) - > fulfilled or rejected (완료한 상태 성공 or 실패)
// Producer vs Consumer

// 1. Producer
// execute
// when new Promise is created, the executor runs automatically.

const promise = new Promise((resolve, reject) => {
  // doing some heavy work
  console.log('doing something...');
  setTimeout(() => {
    // resolve('ellie')

    reject(new Error('no network'))
  }, 2000)
})

// 2.Consumers: then, catch, finally
promise
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.log(value);
  })
  .finally(()=>{
    console.log('finally');
  })

  //3. Promise chaining
  const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(() => {
      resolve(1)
    }, 2000);
  })

  fetchNumber
  .then(num => num*2)
  .then(num => num *3)
  .then(num => {
    return new Promise((resolve,reject) =>{
      setTimeout(()=> resolve(num-1),1000)
    });
  })
  
  .then(num => console.log(num))


  // 4. Error Handling

  const getHen = () => 
  new Promise((resolve,reject) => {setTimeout(() => {
    resolve(`🐓`)
  }, 1000);})

  const getEgg = hen => new Promise((resolve, reject) =>{
    setTimeout(() => {
      // resolve(`${hen} => 🥚`)
      reject(new Error(`error! ${hen} => 🥚`))
    }, 1000);
  })

  const cook = egg => new Promise((resolve,reject) => {
    setTimeout(() => {
      resolve(`${egg} => 🍗`)
    }, 1000);
  })

  getHen()
  .then(hen => getEgg(hen))
  .catch(error =>{
    return '🥖'; // 이것 덕분에 실패하지 않음.
  })
  .then(egg => cook(egg))
  .then(meal => console.log(meal)) // then으로 쭉쭉 내려오면서 처리하는 리턴값이 같이 내려옴
  .catch(console.log)

  // 5.  