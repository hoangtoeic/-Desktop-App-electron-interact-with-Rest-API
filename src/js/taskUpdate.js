const inputs = document.querySelectorAll(".input");
let inputName=document.querySelector('#id01')
var url = new URL(window.location.href);
var id = url.searchParams.get("id");

console.log(id)

var myAssign={
  "id":""+id
  //"check":"true"

}
console.log(myAssign)
//w3.displayObject("id0", myAssign);
inputName.value=id


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
