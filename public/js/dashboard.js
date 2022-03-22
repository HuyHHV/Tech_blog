const newPost = async (event) => {
    event.preventDefault();
  
    // Collect values from the new post form
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


const delButtonHandler = async (event) => {
  const isBtn = event.target.hasAttribute('data-id');
  const isDeleteBtn = event.target.innerHTML == "DELETE";
  if (isBtn && isDeleteBtn) {
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/posts/${id}`, {
      method: 'DELETE',
      body: JSON.stringify({id}),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    
    if (response.ok) {
      location.reload();
    } else {
      alert(response.statusText);
    }
  }
};
  
const updatelButtonHandler = async (event) => {
  event.preventDefault();
  const title = event.target.querySelector('#newtitle').value;
  const contents = event.target.querySelector('#newcontents').value;
  console.log(JSON.stringify({title,contents}));

    const id = event.target.getAttribute('data-id');
    console.log(id);
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({title,contents}),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to update post');
    }
  
};


document
    .querySelector('.new-post-form')
    .addEventListener('submit', newPost);

document
  .querySelector('.post_list')
  .addEventListener('click', delButtonHandler);

const forms = document.querySelectorAll('.updatePost')

forms.forEach((currentForm) => {
  currentForm.addEventListener('submit', (event) => updatelButtonHandler(event))
})  
  