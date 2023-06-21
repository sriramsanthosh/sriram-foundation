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

var readMoreUrl = document.querySelector('.readLink1');
var readMoreText = document.querySelector('#readmore1');
var readLess1 = document.querySelector('.readless1');

var readMoreUrl2 = document.querySelector('.readLink2');
var readMoreText2 = document.querySelector('#readmore2');
var readLess2 = document.querySelector('.readless2');

readMoreUrl.addEventListener('click', function(){
    readMoreUrl.style.display = 'none';
    readMoreText.style.display = 'inline';
    readLess1.style.display = 'inline';
});

readLess1.addEventListener('click', function(){
    readMoreText.style.display = 'none';
    readMoreUrl.style.display = 'inline'; 
    readLess1.style.display = 'none';
});

readMoreUrl2.addEventListener('click', function(){
    readMoreUrl2.style.display = 'none';
    readMoreText2.style.display = 'inline';
    readLess2.style.display = 'inline';

})

readLess2.addEventListener('click', function(){
    readMoreText2.style.display = 'none';
    readMoreUrl2.style.display = 'inline';
    readLess2.style.display = 'none';
});


window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-CHLZ29Q7QG');

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAj71I1MUrbJpbuiEV9OHqLhrN9i4uYPqc",
    authDomain: "sriram-foundation.firebaseapp.com",
    databaseURL: "https://sriram-foundation-default-rtdb.firebaseio.com",
    projectId: "sriram-foundation",
    storageBucket: "sriram-foundation.appspot.com",
    messagingSenderId: "425119094940",
    appId: "1:425119094940:web:4047d361d00ac746373559",
    measurementId: "G-FYLP5J3C02"
};

//   initialize firebase
firebase.initializeApp(firebaseConfig);

//   reference your database 
var contactFormDB = firebase.database().ref("contactForm");

document.querySelector('.input-form').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();
    var firstName = document.querySelector('#Fname').value;
    var lastName = document.querySelector('#Lname').value;
    var phone = document.querySelector('#phone').value;
    var email = document.querySelector('#email').value;
    var msgcontent = document.querySelector('#message').value;

    let date = new Date().toJSON();
    saveContent(firstName, lastName, email, phone, msgcontent, date);
    window.alert("Thank you!! We will get back to you soon!");
}

const saveContent = (firstName, lastName, email, phone, msgcontent, currentDate)=>{
    var newContactForm = contactFormDB.push();
    newContactForm.set({
        FName : firstName,
        LName : lastName,
        email : email,
        phone : phone,
        msgcontent : msgcontent,
        date : currentDate
    });
}