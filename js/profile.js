document.querySelector(".product-btn").addEventListener('click', () => {
    window.location.href = "userproducts.html"
})

const responseBody = JSON.parse(localStorage.getItem('body'));
const token = responseBody.token;
function userGetDetails() {
    fetch("http://195.26.245.5:9505/api/clients/get-details", {
        method: "GET",
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            document.getElementById('user-name').textContent = data.name;
            document.getElementById('user-surname').textContent = data.surname;
            document.getElementById('user-email').textContent = data.email;
            document.getElementById('user-username').textContent = data.username;
        })
}

userGetDetails()