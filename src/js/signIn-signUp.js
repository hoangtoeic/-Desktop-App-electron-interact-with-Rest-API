const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const login=document.getElementById("submited")
const signup=document.getElementById("signuped")
const msgSignUp=document.getElementById("msgSignUp")
const msgSignIn=document.getElementById('msgSignIn')
signup.addEventListener("click",()=>{

})
login.addEventListener("click",()=>{
  const data = { email: 'alex2@gmail.com', password:'1234567'};

  fetch('http://localhost:3000/users/login', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data => {
    //console.log( data.err);
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
