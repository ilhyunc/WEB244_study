function validation(){
    let value = doucment.getElementById('id1').value.trim();
    
    if(value==""){
        document.getElementById('error').innerHTML="First Name Can Not be empty"
        return false;
    }

    if(value.length<5){
        document.getElementById('error').innerHTML="First Name Can Not be empty"
    }
    return true;
}