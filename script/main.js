
function validate() {
    var username1 = document.form.email.value
    var password1 = document.form.password.value
    var username = "admin"
    var password = "123"
    if ( username1 === username && password1 === password){
        alert('Login sucessfully')
        return true;
    }
    else {
        alert('Failed to login')
        return false;
    }
}
   
 
