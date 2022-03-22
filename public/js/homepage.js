
const comment = document.querySelector('.comment-section');

const commentToggle = () => {
    if (comment.classList.contains('d-none')) {
        comment.classList.remove("d-none");
    }
    else comment.classList.add("d-none");
}

const commentHandler = async (event) => {
      
    // Collect values from the login form
    const comment = document.querySelector('#commentContent').value;
      
    if (comment) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify(comment),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        // If successful, reload the page
        location.reload(); 
      } else {
        alert(response.statusText);
      }
    }
  };


document.querySelector('.cmtBtn')
        .addEventListener('click',commentToggle);

document.querySelector('#commentForm')
        .addEventListener('click',commentHandler);