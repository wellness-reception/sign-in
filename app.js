const form = document.getElementById('visitorForm');
const messageDiv = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const surname = document.getElementById('surname').value;
  const role = document.getElementById('role').value;
  const reason = document.getElementById('reason').value;

  // Log form data for now (this can be updated to send to Google Sheets or backend)
  console.log({ name, surname, role, reason });

  messageDiv.textContent = 'Thank you for signing in!';

  // Reset form after submission
  form.reset();
});
