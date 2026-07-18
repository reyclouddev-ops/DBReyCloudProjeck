const user = JSON.parse(
    localStorage.getItem("user")
);

if (!user) {

    location.href = "/login.html";

}

document.getElementById("welcome").innerHTML =
`👋 Welcome ${user.username}`;

loadStats();

async function loadStats(){

    try{

        const db =
        await API.request("/database/list");

        document.getElementById("dbCount").innerText =
        db.total || 0;

        document.getElementById("collectionCount").innerText =
        db.collections || 0;

        document.getElementById("documentCount").innerText =
        db.documents || 0;

        document.getElementById("apikeyCount").innerText =
        db.keys || 1;

    }catch(e){

        console.log(e);

    }

}

document.getElementById("createDatabase").onclick =
async()=>{

    const name =
    document.getElementById("databaseName").value.trim();

    if(!name) return;

    const data =
    await API.request(

        "/database/create",

        "POST",

        {

            name

        }

    );

    if(!data.success){

        alert("Gagal");

        return;

    }

    document.getElementById("databaseUrl").value =
    data.url;

    document.getElementById("apiKey").value =
    localStorage.getItem("apiKey");

    loadStats();

};

document.getElementById("copyUrl").onclick=()=>{

navigator.clipboard.writeText(

document.getElementById("databaseUrl").value

);

};

document.getElementById("copyKey").onclick=()=>{

navigator.clipboard.writeText(

document.getElementById("apiKey").value

);

};

function logout(){

localStorage.clear();

location.href="/login.html";

}
