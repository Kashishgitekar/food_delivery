document.getElementById('form').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const fullname = document.getElementById('fullname').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (!fullname || !email || !password || !confirmPassword) {
        alert('Please fill in all fields.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const alreadyExists = users.some(user => user.email === email);
    if (alreadyExists) {
        alert('An account with this email already exists. Please log in.');
        window.location.href = 'login.html';
        return;
    }

    const newUser = { fullname, email, password };

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Account created successfully! Please log in.');

    window.location.href = 'login.html';
});