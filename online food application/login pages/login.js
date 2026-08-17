document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value;

    if (!username || !password) {
        alert('Please enter both username/email and password.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const matchedUser = users.find(
        user =>
            (user.email === username || user.fullname === username) &&
            user.password === password
    );

    if (matchedUser) {
        alert('Login successful! Welcome, ' + matchedUser.fullname);

        localStorage.setItem('loggedInUser', JSON.stringify(matchedUser));

    } else {
        alert('Invalid username or password. Please try again, or sign up if you don\'t have an account.');
    }
});