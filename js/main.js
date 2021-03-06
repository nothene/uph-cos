function nav(){
    if(document.getElementById("sidenav").style.width == "0px"){
        document.getElementById("sidenav").style.width = "200px";
        document.getElementById("main").style.marginLeft = "200px";
    } else {
        document.getElementById("sidenav").style.width = "0px";
        document.getElementById("main").style.marginLeft = "0px";
    }
}

function check(cookie_name){
    var name = cookie_name + "=";
    var data = decodeURIComponent(document.cookie);
    var arr = data.split(";");
    for(var i = 0; i < arr.length; i++){
        var c = arr[i];
        while(c.charAt(0) == ' '){
            c = c.substring(1);
        }
        if(c.indexOf(name) == 0){
            return c.substring(name.length);
        }
    }
    return "";
}

function set(cookie_name, cookie_value){
    document.cookie = cookie_name + "=" + cookie_value + ";";
}

function login(){
    var a = document.getElementById('username').value;
    var b = document.getElementById('password').value;
    if(a == 'user' && b == 'user'){
        set("login_status", "true");
        window.location = "home.html";
    }
}

function logout(){
    alert("Logout successful");
    set("login_status", "false");
    window.location = "home.html";
}

function init(){
    document.getElementById("sidenav").style.width = "0px";
    document.getElementById("main").style.marginLeft = "0px";
    if(check('login_status') == 'true'){
        document.getElementById("login_status").innerHTML = "Logged in as User (<a href='home.html' onclick='logout()'>Logout</a>)";
    } else {
        document.getElementById("login_status").innerHTML = "You are not logged in (<a href='login.html'>Login</a>)";
    }
}

function hello(){
    if(check('login_status') == 'true'){
        document.getElementById("hello").innerHTML = "Hello there, User";
    } else {
        document.getElementById("hello").innerHTML = "Welcome to COS Home Page";
    }
}

function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

function add_menu(){
    readTextFile("makanan.json", function(text){
        var data = JSON.parse(text);
        alert(text);
    });
}

// function adjustheight(){
//     document.getElementById("content").style.height = (screen.height).toString + "px";
//     alert((screen.height).toString() + "px");
// }