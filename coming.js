let email=''

function validar_email( email ) 
    {
        var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return regex.test(email) ? true : false;
    }

function sendEmail(){
    email=document.getElementById('email').value
    if(validar_email(email)){
        alert('Good')                   
    }
    else{
        document.getElementById('error').style.visibility='visible'
        document.getElementById('message').style.visibility='visible'        
    }   
    }
    
function hideError(){
    document.getElementById('error').style.visibility='hidden'
    document.getElementById('message').style.visibility='hidden'
}