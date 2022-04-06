class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if(
                (id === 'ellie' && password === 'drean')||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            }else{
                onError(new Error('not found'))
            }
        }, 2000);
    }
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'ellie'){
                onSuccess({name : 'ellie',role : 'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);
    }
}



var UserStorage = new UserStorage();
var id = prompt('enter')
var password = prompt('enter yout password');
















const UserStorage = new UserStorage();
const id = prompt('enter your id')
const password = prompt('enter your password');

