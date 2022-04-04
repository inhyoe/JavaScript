class UserStorage {
   loginUser(id, password){
      setTimeout(() => {
            return new Promise((resolve,reject) => {
               setTimeout(() => {
                  if (
                     (id === "ellie" && password == "dream") ||
                     (id === "coder" && password == "academy")
                  ) {
                     resolve(id);
                  } else {
                     reject(new Error("not Found"));
                  }
               }, 2000);
            })
      }, 2000);
   }
   getRoles(user) {
      setTimeout(() => {
         return new Promise((resolve, reject) => {
            if (user === "ellie") {
               resolve({ name: "ellie", role: "admin" });
            } else {
               reject(new Error('no access'))
            }
         })
         
      }, 1000);
   }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const pwd = prompt('enter your pwd');

userStorage
   .loginUser(id, pwd)
   .then(userStorage.getRoles)
   .then(user => alert(
   `Hello ${user.name}, you have a ${user.role} role`))
   .catch(console.log)