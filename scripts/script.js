var flag = false;
var temp3 = document.querySelector('.nav-list');
var temp4 = document.querySelectorAll('.nav-link');
var temp5 = document.querySelector('main');
var temp6 = document.querySelector('.donate-bg');
var temp7 = document.querySelector('footer');
temp3.style.top = '-100vh';

function toggleNavbar(){
    var ex = toString(temp3.style.top);
    if(ex != "-100vh"){
        temp3.style.top = '-100vh';
        flag = false;
    }
}

temp5.addEventListener('click', toggleNavbar);
temp6.addEventListener('click', toggleNavbar);
temp7.addEventListener('click', toggleNavbar);

for(let k = 0; k<temp4.length; k++){
    temp4[k].addEventListener('click', function(){
        if(flag){
            temp3.style.top = '-100vh';
        }
        else{
            temp3.style.top = '0';
        }
        flag = !flag;
    });
}