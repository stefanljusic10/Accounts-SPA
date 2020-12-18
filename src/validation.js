function formValidation() {
  let inputsArray = document.getElementsByTagName("input");
  let isValid = true;

  for (let i = 0; i < inputsArray.length; i++) {
    if(!inputsArray[i].value){
      isValid = false;
      inputsArray[i].setAttribute("placeholder", "Please fill this field");
      break;
    }
  }

  if(isValid){

  }
}

document.querySelector("#save-btn").addEventListener("click", formValidation);
