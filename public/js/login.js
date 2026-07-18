document.getElementById("loginBtn").onclick = async () => {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();

    const data = await API.request(
        "/auth/login",
        "POST",
        {
            username,
            password
        }
    );

    if (!data.success) {

        alert("Login gagal");

        return;

    }

    localStorage.setItem(
        "user",
        JSON.stringify(data.user)
    );

    localStorage.setItem(
        "apiKey",
        data.apiKey || ""
    );

    location.href = "/dashboard.html";

};
