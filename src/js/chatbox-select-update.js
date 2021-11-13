const inputs = document.querySelectorAll(".input");
  let inputName=document.querySelector('#id01');

  

window.onload = (event) => {

  initMultiselect();
};

function initMultiselect() {
  initOption()
beforecheckboxStatusChange()
  document.addEventListener("click", function(evt) {
    var flyoutElement = document.getElementById('myMultiselect'),
      targetElement = evt.target; // clicked element

    do {
      if (targetElement == flyoutElement) {
        // This is a click inside. Do nothing, just return.
        //console.log('click inside');
        return;
      }

      // Go up the DOM
      targetElement = targetElement.parentNode;
    } while (targetElement);

    // This is a click outside.
    toggleCheckboxArea(true);
    //console.log('click outside');
  });
}

function initOption(){

 
  // document.getElementById("mySelectOptions").innerHTML=dataShow
 }


async function beforecheckboxStatusChange() {

  const titleTask=document.getElementById("titleTask")
  const descriptionTask=document.getElementById("descriptionTask")
  const commentTask=document.getElementById("commentTask")
  const msg=document.getElementById('msg')
  var multiselect = document.getElementById("mySelectLabel");
 var multiselectOption = multiselect.getElementsByTagName('option')[0];
 const finishedList=document.getElementById("finishedList")
 const backTask=document.getElementById("backTask")
 const deleteTask=document.getElementById("deleteTask")
 const updateTask=document.getElementById("updateTask")
 var url = new URL(window.location.href);
 var id = url.searchParams.get("id");

///////////////////////////////////////********BACK TASK********////////
backTask.addEventListener("click",function(){
  window.location="./home.html?id="+id
})
///////////////////////////////////////********BACK TASK********////////

///////////////////////////////////////********DELETE TASK********////////
deleteTask.addEventListener("click",function(){
  fetch('http://localhost:3000/tasks/'+idTask, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .then(data => {

      window.location="./home.html?id="+id
      // Do some stuff...
    })
    .catch(err => console.log(err));
})
///////////////////////////////////////********DELETE TASK********////////


///////////////////////////////////////********UPDATE TASK********////////
 updateTask.addEventListener("click",function(){
  updateFunc()
})

  var url = new URL(window.location.href);
  var idTask = url.searchParams.get("idTask");
  var values2="Nothing is selected"
  await fetch('http://localhost:3000/tasks/'+idTask,).then(response=>{ return response.json()})
  .then((data)=>{
    console.log(data.assignedUser)
    var a=data.title
   if(a) {
     titleTask.value=a}

            else titleTask.value=""
   
    if(data.description)        
    descriptionTask.value=data.description
          else descriptionTask.value=""
    if(data.commentTask)
     commentTask.value=data.commentTask
     else commentTask.value=""
     if(data.assignedUser)

     values2=data.assignedUser
     if(data.completed) finishedList.value=1;
     else finishedList.value=2

   });




  var multiselect = document.getElementById("mySelectLabel");
  var multiselectOption = multiselect.getElementsByTagName('option')[0];

  
  var checkboxes = document.getElementById("mySelectOptions");
  //console.log('checkboxes'+checkboxes)

  var checkedCheckboxes = checkboxes.querySelectorAll('input[type=checkbox]:checked');
  //console.log('checkedCheckboxes'+checkedCheckboxes)
////////////////////////////*********BEFORE**********///////////////////////


await fetch('http://localhost:3000/users',).then(response=>{ return response.json()})
  .then((data)=>{
    var dataShow="";
 // var data=['one','two','three','four','five']
  data.map((values)=>{
      dataShow+=`

    <label for="${values.email}"><input type="checkbox" id="${values.email}" 
    onchange="checkboxStatusChange()" value="${values.email}" /> ${values.email}</label>

    `
  });
  document.getElementById("mySelectOptions").innerHTML=dataShow

      })

values2=values2.split(",")
var beforeCheckedCheckboxes=checkboxes.querySelectorAll('input[type=checkbox]')


for(const item of beforeCheckedCheckboxes){
//  console.log(item.getAttribute('value'))
  if(values2.includes(item.getAttribute('value')))
  item.checked=true
}
////////////////////////////////////////////////////////////////////////////
  // for (const item of checkedCheckboxes) {
  //   var checkboxValue = item.getAttribute('value');
  //   values.push(checkboxValue);
  // }

  
  

  multiselectOption.innerText = values2;
  console.log(values2)
}




function checkboxStatusChange() {
  var multiselect = document.getElementById("mySelectLabel");
  var multiselectOption = multiselect.getElementsByTagName('option')[0];

  var values = [];
  var checkboxes = document.getElementById("mySelectOptions");
  //console.log('checkboxes'+checkboxes)

  var checkedCheckboxes = checkboxes.querySelectorAll('input[type=checkbox]:checked');
  //console.log('checkedCheckboxes'+checkedCheckboxes)
////////////////////////////*********BEFORE**********///////////////////////
// var beforeCheckedCheckboxes=checkboxes.querySelectorAll('input[type=checkbox]')
// var beforeListEmail=['one','two','three']
// for(const item of beforeCheckedCheckboxes){
//   var 
// }
////////////////////////////////////////////////////////////////////////////
  for (const item of checkedCheckboxes) {
    var checkboxValue = item.getAttribute('value');
    values.push(checkboxValue);
  }

  var dropdownValue = "Nothing is selected";
  if (values.length > 0) {
    dropdownValue = values.join(',');
  }

  multiselectOption.innerText = dropdownValue;
  console.log(values)
}



function toggleCheckboxArea(onlyHide = false) {
  var checkboxes = document.getElementById("mySelectOptions");
  var displayValue = checkboxes.style.display;

  if (displayValue != "block") {
    if (onlyHide == false) {
      checkboxes.style.display = "block";
    }
  } else {
    checkboxes.style.display = "none";
  }
}
////////////////////////*********updateFunc*********//////////////////////
function updateFunc(){
  
  const titleTask=document.getElementById("titleTask")
  const descriptionTask=document.getElementById("descriptionTask")
  const commentTask=document.getElementById("commentTask")
  const msg=document.getElementById('msg')
  var multiselect = document.getElementById("mySelectLabel");
 var multiselectOption = multiselect.getElementsByTagName('option')[0];
 const finishedList=document.getElementById("finishedList")
 
 var commentTaskStr=commentTask.value

  var optionStr=multiselectOption.value
var dropdownValue = "Nothing is selected";
if(optionStr.includes(dropdownValue)){
  msg.innerHTML='Anyone who assigned for ?'
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
var url = new URL(window.location.href);
var id = url.searchParams.get("id");
//var url = new URL(window.location.href);
var idTask = url.searchParams.get("idTask");
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
  
  
  fetch('http://localhost:3000/tasks/'+idTask, {
    method: 'PATCH', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response => response.json())
  .then(data=> {
    console.log('after update')
      console.log(data)
     if(data.err)
  {}
    else {
     
      console.log(id)
     
    window.location="./home.html?id="+id
  }
   }
  )
  .catch((error) => {
  //  console.log('Error:', error);
  
  });
  }
}