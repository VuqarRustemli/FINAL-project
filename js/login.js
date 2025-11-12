document.getElementById("loginForm").addEventListener("submit", (e) => {
    e.preventDefault();
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    const user = {
        username: username,
        password: password
    }

    fetch("http://195.26.245.5:9505/api/auth", {
        method: "POST",
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
    }).then(response => {
        return response.json()
    })
        .then(data => {
            console.log(data)
            localStorage.setItem('body', JSON.stringify(data.body))
            alert("User login successfully!")
            window.location.href = "index.html"
        })

});