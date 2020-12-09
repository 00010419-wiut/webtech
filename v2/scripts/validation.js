//https://www.w3schools.com/js/js_validation.asp //

// The function is connected to the SUBMIT button of the form//
function validation() {
      
   //getElementById helps with adding the item to the function, if the value will be null the fuction will send a message, in this case an alert message//
   // In th case of this website and this js function, the msg do not appear, for sure a mistake in the code//
    if( document.getElementById('email').value == "" ) {
        alert( "Please provide your Email!" );
        document.getElementById('email').focus();
        return false;
     }
    if( document.getElementById('username').value == "" ) {
       alert( "Please provide your Name!" );
       document.getElementById('username').focus();
       return false;
    }
    if( document.getElementById('password').value == "" ) {
       alert( "Please Enter Password!" );
       document.getElementById('password').focus();
       return false;
    }
    if( document.getElementById('confirm').value == "" ) {
        alert( "Please Confirm Password!" );
        document.getElementById('confirm').focus();
        return false;
    }
    return( true );
 }