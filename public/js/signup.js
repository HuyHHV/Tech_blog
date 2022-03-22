 
const signupFormHandler = async (event) => {
    event.preventDefault();
    const username = document.querySelector('#name-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    
    if (!username&&!password) {
    return alert("your user name and password cannot be empty");
    }

    if (password.length <8) {
    return alert("your password length must longer than 8 characters");
    }
    
    if (username && password) {
        // Send a POST request to the API endpoint
        const response = await fetch('/api/users/', {
          method: 'POST',
          body: JSON.stringify({ username, password }),
          headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
          // If successful, redirect the browser to the dashboard page
          document.location.replace('/dashboard');
        } else {
          alert('Incorrect user name or password, please try again');
        }
      }
};
  

document.querySelector('.signup-form')
        .addEventListener('submit', signupFormHandler);
