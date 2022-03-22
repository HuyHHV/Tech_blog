const newPost = async (event) => {
    event.preventDefault();
  
    // Collect values from the login form
    const title = document.querySelector('#title').value;
    const contents = document.querySelector('#contents').value;
  
    if (title && contents) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: JSON.stringify({ title, contents }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
        // If successful, redirect the browser to the dashboard page
        document.location.replace('/');
      } else {
        alert('Your post must have title and content');
      }
    }
  };
  
document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPost);
  
  
  