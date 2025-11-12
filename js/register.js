function createUser() {
    let registerForm = document.querySelector('form');
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();

        let user = {
            name: document.getElementById('name').value,
            surname: document.getElementById('surname').value,
            email: document.getElementById('email').value,
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        }
        fetch('http://195.26.245.5:9505/api/clients', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        then(async response => {
            if (response.ok) {
                alert('User register successfully');
            } else {
                let data = await response.json();
                alert(data.message);
            }
        })
    })
}

createUser();
