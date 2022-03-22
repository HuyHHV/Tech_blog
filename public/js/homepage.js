

const commentToggle = (event) => {
  const clickedBtn = event.target;
  const buttonContainer = clickedBtn.parentNode;
  const comment = buttonContainer.parentNode.querySelector('.comment-section');
    if (comment.classList.contains('d-none')) {
        comment.classList.remove("d-none");
    }
    else comment.classList.add("d-none");
}

const commentHandler = async (event) => {
    event.preventDefault();
    console.log(event.target)
    // Collect values from the login form
    const contents = event.target.querySelector('#commentContent').value;
    const post_id = event.target.parentNode.dataset.id;
    console.log(JSON.stringify({contents,post_id}))
    if (contents) {
      // Send a POST request to the API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        body: JSON.stringify({contents,post_id}),
        headers: { 'Content-Type': 'application/json' },
      });
      
      if (response.ok) {
        // If successful, reload the page
        contents.value = "";
        location.reload(); 
      } else {
        alert(response.statusText);
      }
    }
  };


const buttons = document.querySelectorAll('.cmtBtn')

buttons.forEach((currentBtn) => {
  currentBtn.addEventListener('click', (event) => commentToggle(event))
})

const forms = document.querySelectorAll('.commentForm')

forms.forEach((currentForm) => {
  currentForm.addEventListener('submit', (event) => commentHandler(event))
})