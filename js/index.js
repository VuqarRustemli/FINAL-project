const responseBody = JSON.parse(localStorage.getItem('body'));
const username = responseBody.username;

document.getElementById("username").innerHTML = username;
