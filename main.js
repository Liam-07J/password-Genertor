function myFunction(){
    var password_amount = document.getElementById("amount_box").value;
    var password_length = document.getElementById("length_box").value;
    // genertors  amount of passwords
    for (x = 0;x < password_amount;x++){
        password = "";
        // create random letters and adds them to password varaible
        for (i = 0;i < password_length;i++){
        let ran = Math.round(Math.random() * 78);
        charcter = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890!#$%&*+‑/<=>?x@";
        let letter = charcter.charAt(ran);
        password += letter;
        }
        console.log(password);
        // TODO should add "password " + n + ":" where n is number of password generteted
        document.getElementById("output").innerHTML += "New Password:" + "<br>" +  password + "<br>";
    }
}
function clearfunc(){
    document.getElementById("output").innerHTML = "";
}    