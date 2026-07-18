const API = {

    BASE: window.location.origin + "/api",

    async request(url, method = "GET", body = null) {

        const headers = {
            "Content-Type": "application/json"
        };

        const apiKey = localStorage.getItem("apiKey");

        if (apiKey) {
            headers["x-api-key"] = apiKey;
        }

        const res = await fetch(this.BASE + url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null
        });

        return await res.json();

    }

};
