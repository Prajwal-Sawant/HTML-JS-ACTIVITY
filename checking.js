document.getElementById("submit").addEventListener("click", function (event) {
    event.preventDefault();
 
    checkData();
 });
 
 
 var email = document.getElementById("email");
 var pass1 = document.getElementById("pass1");
 
 
 function checkData() {
    
    var emailValue = email.value.trim();
    var pass1Value = pass1.value.trim();
 
    if (emailValue == "") {
       setError(email, "Email can't be blank");
    } else if (!isEmail(emailValue)) {
       setError(email, "Email is not Valid");
    } else if(emailValue != "prajwal.s@sankeysolutions.com"){
        setError(email, "Email is not Valid");
    } else {
        
            setSuccess(email);
        
    
    }
 
 
    if (pass1Value == "") {
       setError(pass1, "Password can't be blank");
    } else if (pass1Value.length < 8){
        setError(pass1, "Minimum 8 Characters Required");
    } else if (pass1Value != "Prajwal@2002"){
        setError(pass1, "Password is not Valid");
    } else {
       setSuccess(pass1);
    }
 
 }
 
 
 function setError(u, msg) {
    var parentBox = u.parentElement;
   parentBox.className = "input-field error";
   var span = parentBox.querySelector("span");
   var fa = parentBox.querySelector(".fa");
   span.innerHTML = msg;
   span.style.color="red";
   fa.className = "fa fa-exclamation-circle";
 }
 
 function setSuccess(u) {
    var parentBox = u.parentElement;
    parentBox.className = "input-field success";
    var fa = parentBox.querySelector(".fa");
    fa.className = "fa fa-check-circle";
 }
 
 function isEmail(e) {
    var reg = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(e);
 }