
// // Get all the shape elements
// const shapes = document.querySelectorAll('.shape');

// // Function to generate random position and size for shapes
// function getRandomPosition() {
//   const containerRect = document.querySelector('.container').getBoundingClientRect();
//   return {
//     x: Math.floor(Math.random() * (containerRect.width - 100)),
//     y: Math.floor(Math.random() * (containerRect.height - 100)),
//     size: Math.floor(Math.random() * 50) + 50
//   };
// }

// // Function to animate the shapes
// function animateShapes() {
//   shapes.forEach(shape => {
//     const { x, y, size } = getRandomPosition();
//     const duration = 20; // Duration in seconds
//     const delay = Math.random() * duration; // Random delay between 0 and duration

//     shape.style.transition = `left ${duration}s ease ${delay}s, top ${duration}s ease ${delay}s, width ${duration}s ease ${delay}s, height ${duration}s ease ${delay}s`;
//     shape.style.left = `${x}px`;
//     shape.style.top = `${y}px`;
//     shape.style.width = `${size}px`;
//     shape.style.height = `${size}px`;
//   });

//   requestAnimationFrame(animateShapes);
// }

// // Start the animation
// animateShapes();


// // Add event listeners for form interactions
// const form = document.querySelector('.admission-form');
// const submitButton = document.querySelector('.submit-button');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   submitForm();
// });

// submitButton.addEventListener('click', () => {
//   form.classList.add('form-submitted');
// });

// // Function to handle form submission
// function submitForm() {
//   // Implement your form submission logic here
//   console.log('Form submitted!');

//   // Reset the form
//   form.reset();
//   form.classList.remove('form-submitted');
// }

// // Add animations to the form fields
// const formFields = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

// formFields.forEach(field => {
//   field.addEventListener('focus', () => {
//     field.classList.add('field-focused');
//   });

//   field.addEventListener('blur', () => {
//     field.classList.remove('field-focused');
//   });
// });


// Get all the shape elements
const shapes = document.querySelectorAll('.shape');

// Function to generate random position and size for shapes
function getRandomPosition() {
  const containerRect = document.querySelector('.container').getBoundingClientRect();
  return {
    x: Math.floor(Math.random() * (containerRect.width - 100)),
    y: Math.floor(Math.random() * (containerRect.height - 100)),
    size: Math.floor(Math.random() * 50) + 50
  };
}

// Function to animate the shapes
function animateShapes() {
  shapes.forEach(shape => {
    const { x, y, size } = getRandomPosition();
    const duration = 20; // Duration in seconds
    const delay = Math.random() * duration; // Random delay between 0 and duration

    shape.style.transition = `left ${duration}s ease ${delay}s, top ${duration}s ease ${delay}s, width ${duration}s ease ${delay}s, height ${duration}s ease ${delay}s`;
    shape.style.left = `${x}px`;
    shape.style.top = `${y}px`;
    shape.style.width = `${size}px`;
    shape.style.height = `${size}px`;
  });

  requestAnimationFrame(animateShapes);
}

// Start the animation
animateShapes();

// Add event listeners for form interactions
const form = document.querySelector('.admission-form');
const submitButton = document.querySelector('.submit-button');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  try {
    const formData = new FormData(form);
    const response = await fetch('/admission_form', {
      method: 'POST',
      body: formData
    });

    if (response.ok) {
      window.location.href = '/admission_success';
    } else {
      alert('Error submitting the form. Please try again.');
    }
  } catch (error) {
    console.error('Error submitting the form:', error);
    alert('An error occurred. Please try again later.');
  }
});

submitButton.addEventListener('click', () => {
  form.classList.add('form-submitted');
});

// Add animations to the form fields
const formFields = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

formFields.forEach(field => {
  field.addEventListener('focus', () => {
    field.classList.add('field-focused');
  });

  field.addEventListener('blur', () => {
    field.classList.remove('field-focused');
  });
});