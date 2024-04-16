const data = [
    { username: 'Lotte', password: 35 },
    { username: 'Tanja', password: 26 },
    { username: 'Shirley', password: 29 },
    { username: 'Louise', password: 26 },
    { username: 'Thomas', password: 11357 },
];

function submitLogin(event) {
    event.preventDefault();

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let userIsValidated = validateUser(username, password);

    if (userIsValidated) {
        window.location.assign('forside.html');
    } else {
        alert('Forkert kodeord');
    }
}

function validateUser(username, password) {
    let result = false;

    data.forEach(element => {
        if (element.username == username && password == element.password) {
            result = true;
        }
    });
    return result;
}

document.querySelector('form').addEventListener('submit', submitLogin);