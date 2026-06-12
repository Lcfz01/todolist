$(document).ready(function() {
    
});

function checkPasswordStrength() {
    //Regex source:
    // Source - https://stackoverflow.com/a/21456918
    // Posted by Srinivas, modified by community. See post 'Timeline' for change history
    // Retrieved 2026-06-11, License - CC BY-SA 4.0

   const reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/

   const nums = "123456789";
   const mayus = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   const minus = mayus.lowe
   let password = $("#password").val();
   let passLength = password.length;
   let message = $("#strength");
   
   if(passLength === 0){
        message.text("").css("color","#252525");
   }else if(passLength < 5){
        message.text("Weak").css("color","#b11818");
   }else if(passLength < 10){
        message.text("Medium").css("color","#7a711c");
   }else if(reg.test(password)){
        message.text("Perfect!!!").css("color","#ffe600");
   }else{
        message.text("Strong").css("color","#195806");
   }


}