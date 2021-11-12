const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const login=document.getElementById("submited")
const signup=document.getElementById("signuped")
const msgSignUp=document.getElementById("msgSignUp")
const msgSignIn=document.getElementById('msgSignIn')
const emailLogin=document.getElementById('emailLogin')
const passLogin=document.getElementById('passLogin')
const nameSignUp=document.getElementById('nameSignUp')
const ageSignUp=document.getElementById('ageSignUp')
const emailSignUp=document.getElementById('emailSignUp')
const passwordSignUp=document.getElementById('passwordSignUp')
//const msgSignUp=document.getElementById('msgSignUp')

signup.addEventListener("click",()=>{
//  msgSignUp.value='Name is not empty'
//msgSignUp.innerHTML='Name is not empty'
//console.log(nameSignUp.value)
  if(!nameSignUp.value){
    msgSignUp.innerHTML='Name is not empty'
  }
  else if (!ageSignUp.value)
  {
    msgSignUp.innerHTML='Age is not empty'
  }
  else if (!emailSignUp.value){
    msgSignUp.innerHTML='Email is not empty'
  }
  else if(!passwordSignUp.value){
    msgSignUp.innerHTML='Password is not empty'
  }
  else 
  {
     console.log('abc')
    const data = { age: ageSignUp.value,
       password:passwordSignUp.value,
       email:emailSignUp.value,
       name:nameSignUp.value
      };

  fetch('http://localhost:3000/users', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data=> {
      console.log(data)
     if(data.err)
  msgSignUp.innerHTML=data.err
    else {
      var id=data._id
      console.log(id)
     
    window.location="./home.html?id="+id
  }
   }
)
  .catch((error) => {
    console.log('Error:', error);

  });

  }
  
})
login.addEventListener("click",()=>{
  var email=emailLogin.value
  var password=passLogin.value
 // console.log(email)
  //const data = { email: 'alex2@gmail.com', password:'1234567'};
  const data = { email: email, password:password};

  fetch('http://localhost:3000/users/login', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    console.log( data.err);
     if(data.err)
    // console.log(data.err)
    msgSignIn.innerHTML=data.err
    else {
   
      var id=data._id
    window.location="./home.html?id="+id
  }
  })
  .catch((error) => {
    console.log('Error:', error);
  });
})
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});
