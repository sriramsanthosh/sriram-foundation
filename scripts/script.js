var flag = true;
var temp3 = document.querySelector('.nav-list');
var temp4 = document.querySelectorAll('.nav-link');
for(let k = 0; k<temp4.length; k++){
    temp4[k].addEventListener('click', function(){
        if(flag){
            temp3.style.left = '-50%';
        }
        else{
            temp3.style.left = '0';
        }
        flag = !flag;
    });
}

var paynowButton = document.querySelector('.paynow');
var colors = ["red", "blue", "hotpink", "green", "violet", "skyblue"];

// paynowButton.style.transition = '0.4s';

let l = 0;
var lightingButton = setInterval(function(){
        let hel = "10px 20px 30px "+colors[l];
        paynowButton.style.boxShadow = hel;
        if(l == colors.length){
            l = -1;
        }
        l++;
}, 1000);