// Joseph Venturi Last worked November 25, 2024

/* Blog Page Read More Function */
document.addEventListener('DOMContentLoaded', () => {
  const readMoreLink = document.querySelector('.read-more');
  const morePostsSection = document.getElementById('more-posts');

  readMoreLink.addEventListener('click', (event) => {
      event.preventDefault(); 

      if (morePostsSection.style.display === 'none' || !morePostsSection.style.display) {
          morePostsSection.style.display = 'block'; 
          readMoreLink.textContent = 'Show Less'; 
      } else {
          morePostsSection.style.display = 'none'; 
          readMoreLink.textContent = 'Read More'; 
      }
  });
});


/* Contact Form Validation */
function validateForm(event) {
  event.preventDefault(); 
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert('Please fill out all fields.');
    return false;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Please enter a valid email address.');
    return false;
  }

  alert('Form submitted successfully!');
  document.querySelector('.contact-form').submit();
}




