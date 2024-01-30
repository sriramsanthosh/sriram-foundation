var flag = false;
var temp3 = document.querySelector('.nav-list');
var temp4 = document.querySelectorAll('.nav-link');
var temp5 = document.querySelector('main');
var temp6 = document.querySelector('.donate-bg');
var temp7 = document.querySelector('footer');
var temp8 = document.querySelector('.logo-container');

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
temp8.addEventListener('click', toggleNavbar);


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
}


const saveContent = (firstName, lastName, email, phone, msgcontent, currentDate)=>{
    var newContactForm = contactFormDB.push();
    let detailsofUser = {
        FName : firstName,
        LName : lastName,
        email : email,
        phone : phone,
        msgcontent : msgcontent,
        date : currentDate
    }
    newContactForm.set({detailsofUser});
    let ownerEmail = "sriramsanthosh321@gmail.com"
    let ownerEmail2 = "sriramsanthosh80@gmail.com"
    let msgbody2 = `<div>
    <h2>Hey ${firstName},</h2><h3> How do you do? Thanks for contacting Sriram Foundation. <br> </h3>
    <div style = "margin:auto; padding: 0 30px; border: 2px solid lightgray; text-align: center; width:fit-content">
        <h2>Your Message </h2>
        <h2>"${msgcontent}"</h2>
    </div>
    <h3>I will get into touch in short time <b>:)</b></h3>
    <h3>Please subscribe to my youtube channel <a href="https://www.youtube.com/channel/UCqFxWlMFmpOCyjQQBmsi6-g" target="_blank" style="text-decoration:underline;">Study&nbsp;With&nbsp;Sriram</a> </h3>
        </div>`;
    Email.send({
        SecureToken : "eae2712b-1d24-42ce-be46-e8e728dca769",
        To : `${email}, ${ownerEmail2}`,
        From : `${ownerEmail}`,
        Subject : "Thank you for Contacting Sriram Foundation",
        Body : msgbody2
    })
    .then(
      message => alert("Thank you!! I will get back to you soon! Please check your inbox (as well as in spam box) for my message")
    );
}

