// const api_url = "https://employeedetails.free.beeceptor.com/my/api/path";
// const response = await fetch(url);
    
// // Storing data in form of JSON
// var data = await response.json();
// console.log(data);
 fetch('http://localhost:3000/tasks',).then(response=>{ return response.json()})
.then((data)=>{let dataShow="";
    data.map((values)=>{
        dataShow+=` <div class="mainHome" id=${values._id}>
        <h1 class="title"></h1>
        <p class="description">description:${values.description}</p>
        <p class="completed">completed:${values.completed}</p>
      </div>`
    });
    document.getElementById("mainHomes").innerHTML=dataShow
    })




let sidebar = document.querySelector(".sidebar");
  let closeBtn = document.querySelector("#btn");
  let searchBtn = document.querySelector(".bx-search");

  closeBtn.addEventListener("click", ()=>{
    sidebar.classList.toggle("open");
    menuBtnChange();//calling the function(optional)
  });

  searchBtn.addEventListener("click",async ()=>{ // Sidebar open when you click on the search iocn
    sidebar.classList.toggle("open");
    menuBtnChange(); //calling the function(optional)
   
  })

  // following are the code to change sidebar button(optional)
  function menuBtnChange() {
   if(sidebar.classList.contains("open")){
     closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
   }else {
     closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
   }
  }