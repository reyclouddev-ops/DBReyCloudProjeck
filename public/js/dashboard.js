const user =
JSON.parse(
localStorage.getItem("user")
);

if(user){

document.getElementById("welcome").innerHTML=
`Welcome ${user.username} 👋`;

}

document
.getElementById("createDatabase")
.onclick=()=>{

alert(
"Create Database Coming Soon"
);

};

document
.getElementById("copyUrl")
.onclick=()=>{

navigator.clipboard.writeText(

document
.getElementById("databaseUrl")
.value

);

alert("URL Copied");

};

document
.getElementById("copyKey")
.onclick=()=>{

navigator.clipboard.writeText(

document
.getElementById("apiKey")
.value

);

alert("API KEY Copied");

};
