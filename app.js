document.getElementById("visitorForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent the form from submitting normally

  // Collect form data
  var name = document.getElementById("name").value;
  var surname = document.getElementById("surname").value;
  var role = document.getElementById("role").value;
  var reason = document.getElementById("reason").value;

  // Prepare data for submission
  var formData = new FormData();
  formData.append("name", name);
  formData.append("surname", surname);
  formData.append("role", role);
  formData.append("reason", reason);

  // Post the data to the Google Apps Script web app
  fetch("https://script.google.com/macros/s/AKfycbzneNAXHjlr_b4fNPgUJBRpKQNSUEIdHMnbyNj9kW2qnHib3hh-rvKgnmP9IUPU4jigLg/exec", {
    method: "POST",
    body: formData
  })
  .then(response => response.json())
  .then(data => {
    if (data.result === "success") {
      document.getElementById("message").innerText = "Submission successful!";
      document.getElementById("visitorForm").reset(); // Clear the form
    } else {
      document.getElementById("message").innerText = "Error: Submission failed!";
    }
  })
  .catch(error => {
    console.error("Error submitting data: ", error);
    document.getElementById("message").innerText = "Error: Submission failed!";
  });
});
