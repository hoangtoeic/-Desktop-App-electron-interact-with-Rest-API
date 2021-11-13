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

    fetch('http://localhost:3000/users',).then(response=>{ return response.json()})
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



    
  }

  function beforecheckboxStatusChange() {
    var multiselect = document.getElementById("mySelectLabel");
    var multiselectOption = multiselect.getElementsByTagName('option')[0];
  
    
    var checkboxes = document.getElementById("mySelectOptions");
    //console.log('checkboxes'+checkboxes)

    var checkedCheckboxes = checkboxes.querySelectorAll('input[type=checkbox]:checked');
    //console.log('checkedCheckboxes'+checkedCheckboxes)
  ////////////////////////////*********BEFORE**********///////////////////////
  var beforeCheckedCheckboxes=checkboxes.querySelectorAll('input[type=checkbox]')
  var values=['one','two','three']
  for(const item of beforeCheckedCheckboxes){
    if(values.includes(item.getAttribute('value')))
    item.checked=true
  }
  ////////////////////////////////////////////////////////////////////////////
    // for (const item of checkedCheckboxes) {
    //   var checkboxValue = item.getAttribute('value');
    //   values.push(checkboxValue);
    // }
  
    var dropdownValue = "Nothing is selected";
    if (values.length > 0) {
      dropdownValue = values.join(',');
    }
  
    multiselectOption.innerText = dropdownValue;
    console.log(values)
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