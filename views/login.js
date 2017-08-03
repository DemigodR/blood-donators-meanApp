var uname;
var pswd;
console.log('page entered');
function submit(){
    uname = document.getElementById('uname');
    pswd = document.getElementById('pswd');
    alert("asdfasd");
    validate();
}



function validate(){
    if(uname === 'Admin' && pswd === "admin"){
        this.uname1 = 'Admin';
    }
    else if(uname === 'user' && pswd === "user"){ // will look into the database for this
        this.name1 = 'user';
    }
    else
        this.name1 = 'error';
    var person = {
        uname1: name1
    }
}

module.exports = validate;