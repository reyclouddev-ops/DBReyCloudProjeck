document.getElementById("registerBtn").onclick = async () => {

    const username =
        document.getElementById("username").value.trim();

    const password =
        document.getElementById("password").value.trim();

    const confirm =
        document.getElementById("confirm").value.trim();

    if (password !== confirm) {

        alert("Password tidak sama");

        return;

    }

    const data = await API.request(
        "/auth/register",
        "POST",
        {
            username,
            password
        }
    );

    if (!data.success) {

        alert("Register gagal");

        return;

    }

    alert("Register berhasil");

    location.href = "/login.html";

};
