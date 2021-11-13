const inputs = document.querySelectorAll(".input");
let inputName=document.querySelector('#id01')
const createTask=document.getElementById("createTask")
const finishedList=document.getElementById("finishedList")
const backTask=document.getElementById("backTask")
var multiselect = document.getElementById("mySelectLabel");
const multiselectOption = multiselect.getElementsByTagName('option')[0];
var url = new URL(window.location.href);
const titleTask=document.getElementById("titleTask")
const descriptionTask=document.getElementById("descriptionTask")
const commentTask=document.getElementById("commentTask")
const msg=document.getElementById('msg')

///////////////////////////////////////********BACK TASK********////////
backTask.addEventListener("click",function(){
  var id = url.searchParams.get("id");
  window.location="./home.html?id="+id
})
///////////////////////////////////////********BACK TASK********////////
createTask.addEventListener("click",()=>{
 
  var commentTaskStr=commentTask.value

  var optionStr=multiselectOption.value
var dropdownValue = "Nothing is selected";
if(optionStr.includes(dropdownValue)){
  msg.innerHTML='who is assigned the task??'
}
else if (!titleTask.value)
{
  msg.innerHTML='Title is not empty'
}
else if (!descriptionTask.value){
  msg.innerHTML='Description is not empty'
}

 

else 
{
  var titleTaskStr=titleTask.value
  var finished = finishedList.options[finishedList.selectedIndex].text;
var descriptionTaskStr=descriptionTask.value

var id = url.searchParams.get("id");
  
if(!commentTaskStr) commentTaskStr=""
  console.log(finished)
  console.log(titleTaskStr)
  console.log(optionStr)
  console.log(descriptionTaskStr)
  console.log(commentTaskStr)
  console.log(id)
  
  const data = { 
    description: descriptionTaskStr,
  commentTask:commentTaskStr,
    completed:finished,
   title:titleTaskStr,
    assignedUser:optionStr,
    createdUser:id
   };
  
  
  fetch('http://localhost:3000/tasks', {
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
  {}
    else {
      let id=data.createdUser
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

// var id = url.searchParams.get("id");

// console.log(id)

// var myAssign={
//   "id":""+id
  

// }
// console.log(myAssign)

// inputName.value=id


function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
 
   let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});









