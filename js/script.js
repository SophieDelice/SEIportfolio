// alert('js is loaded')
const form = document.getElementById('contact-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const message = form.elements['message'].value;

  try {
    const response = await fetch('https://your-api-endpoint.com/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, email, message })
    });

    if (response.ok) {
      alert('Message sent!');
      form.reset();
    } else {
      throw new Error('Network response was not ok.');
    }
  } catch (error) {
    console.error('There was an error sending the message:', error);
  }
});
