    const username = "Lamthan"
    const password = "123456"
function checker(){
    const name = document.querySelector('#user');
    name.value;
    console.log(name.value);
    const pass = document.querySelector('#psw');
    pass.value;
    console.log(pass.value);
    if((name.value==username)&&(pass.value==password)){
        const title = document.querySelector('p');
        title.textContent='Your username and password are correct! You are logged in.';
        const box = document.querySelector('div.cen');
        box.textContent='';
    }
    else{
        const box = document.querySelector('div.cen');
        box.textContent='';
        const title = document.querySelector('p');
        title.textContent='Your username or password is incorrect! Please try again.';
    }
}
const check = document.querySelector('#id1');
check.addEventListener('click',checker);