function validate() {

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mobile = document.getElementById("mobile").value;
    var pass = document.getElementById("pass").value;

    if (name == "") {
        alert("Enter Name");
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        alert("Enter Valid Email");
        return false;
    }

    if (mobile.length != 10 || isNaN(mobile)) {
        alert("Enter 10 Digit Mobile Number");
        return false;
    }

    if (pass.length < 6) {
        alert("Password must be at least 6 characters");
        return false;
    }

    alert("Registration Successful");
    return true;
}