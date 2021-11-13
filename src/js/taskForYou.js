
window.onload = (event) => {

  init();
  eventHandle();
};
async function init(){
  var url = new URL(window.location.href);
  var id = url.searchParams.get("id");
  var emailUser;
  
  await fetch('http://localhost:3000/users/'+id,).then(response=>{ return response.json()})
  .then((data)=>{
    
    emailUser=data.email
    console.log(emailUser)
  })



  await fetch('http://localhost:3000/tasks',).then(response=>{ return response.json()})
.then((data)=>{let dataShow="";
    data.map((values)=>{
    //  if(values.)
    findUser=values.assignedUser.split(",")
    if(findUser.includes(emailUser)){
      dataShow+=` <div class="mainHome" id=${values._id}>
      <h3 class="title">${values.title}</h1>
      <p class="number user" id=${values._id+"number"}>people </p>
      <p class="completed">completed: ${values.completed}</p>
    </div>`
    }
      
    });
    document.getElementById("mainHomes").innerHTML=dataShow
    colorNumberFunc(data);
    })
}

function colorNumberFunc(data)
{
  data.map((values)=>{
    var divID=document.getElementById(values._id)
    if(values.completed)  
    divID.setAttribute('style', 'background-color: #41de58');
    try {
      var number=values.assignedUser.split(",").length;
      var numberID=document.getElementById(values._id+"number")
  
       numberID.innerHTML=number+" member";
      

    } catch (error) {
      console.log(error)
    }
    
    })
 
}

function eventHandle(){
  let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let taskListPage = document.querySelector(".bx-grid-alt");
  let userPage = document.querySelector(".bx-user");
  let logOut=document.querySelector(".bx-log-out")
  var url = new URL(window.location.href);
  var id = url.searchParams.get("id");

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

  taskListPage.addEventListener("click",async ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
    
  
    window.location="./home.html?id="+id
   
  })
  userPage.addEventListener("click",async()=>{
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
    window.location="./taskForYou.html?id="+id
    
   
  })

  logOut.addEventListener("click",async()=>{
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
    window.location="./signIn-signUp.html?id="+id

    
  })

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   }
  }
}
 



