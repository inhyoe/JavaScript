
class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === "ellie" && password == "dream") ||
        (id === "coder" && password == "academy")
      ) {
        onSuccess(id);
      } else {
        onError(new Error("not Found"));
      }
    }, 2000);
  }
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        onError(new Error('no access'))
      }
    }, 1000);
  }
}

const UserStorage = new UserStorage();
const id = prompt('enter your id');
const pwd = prompt('enter your pwd');

UserStorage.loginUser(
  id,
  pwd,
  user => {
    UserStorage.getRoles(user,
      (userWithRole) => {
        alert(
          `Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
        )
      },
      (error) => {
        console.log('error');
      })
  },
  error => {console.log('error');});


