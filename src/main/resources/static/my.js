
function myFunction() {
    var email;

    email = document.getElementById("email").value;

        var reg =/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

        if (reg.test(email) == false) 
        {
            document.getElementById("numloc").style.color = "red";
            document.getElementById("numloc").innerHTML =email+" is an Invalid Email,Please Enter a Valid Email";
            return false;
        }
   return true;
}
