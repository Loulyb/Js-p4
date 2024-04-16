// Get the modal
var modal = document.getElementById("myModal");


// Get the button that opens the modal for "Click Me"
var clickMeButton = document.querySelector(".item button:first-of-type");


// Get the button that opens the modal for "Info"
var infoButton = document.querySelector(".item button:last-of-type");


// When the user clicks on the "Click Me" button, open the modal with upload picture feature
clickMeButton.addEventListener("click", function() {
    // Your code to open the modal with upload picture feature goes here
    console.log("Click Me button clicked!");
    // Example: Display alert for demonstration purposes
    alert("Upload picture feature will be implemented here.");
});


// When the user clicks on the "Info" button, open the modal with the same popup as item2
infoButton.addEventListener("click", function() {
    // Your code to open the modal with the same popup as item2 goes here
    console.log("Info button clicked!");
    modal.style.display = "block"; // Example: Open the modal
});


// Get the button that opens the modal for "item2"
var buttons = document.querySelectorAll(".item2 button");
console.log("Number of buttons found:", buttons.length);


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
console.log("Close button found:", span);


// When the user clicks on the button for "item2", open the modal
buttons.forEach(function(button) {
  button.onclick = function() {
    console.log("Button clicked!");
    modal.style.display = "block";
    // Populate modal with content
    var imageSrc = this.parentNode.querySelector("img").src;
    var title = this.parentNode.querySelector("h2").innerText;
    var description = this.parentNode.querySelector("p").innerText;
    document.getElementById("modalImage").src = imageSrc;
    document.getElementById("modalTitle").innerText = title;
    document.getElementById("modalDescription").innerText = description;
  }
});


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  console.log("Close button clicked!");
  modal.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    console.log("Clicked outside the modal!");
    modal.style.display = "none";
  }
}
// Get the modal for upload picture
var uploadModal = document.getElementById("uploadModal");


// Get the button that opens the upload picture modal
var uploadButton = document.querySelector(".item button:first-of-type");


// Get the close button for the upload picture modal
var uploadCloseButton = uploadModal.querySelector(".close");


// When the user clicks on the "Click Me" button, open the upload picture modal
uploadButton.addEventListener("click", function() {
    uploadModal.style.display = "block"; // Open the upload picture modal
});


// When the user clicks on the close button or outside the upload picture modal, close it
window.addEventListener("click", function(event) {
  if (event.target == uploadModal || event.target == uploadCloseButton) {
    uploadModal.style.display = "none";
  }
});
// Get the upload button
var uploadButton = document.querySelector("#uploadModal .modal-button");


// Get the confirmation modal
var confirmationModal = document.getElementById("confirmationModal");


// Add event listener to the upload button
uploadButton.addEventListener("click", function() {
    // Close the upload modal
    var uploadModal = document.getElementById("uploadModal");
    uploadModal.style.display = "none";
   
    // Show confirmation modal
    confirmationModal.style.display = "block";
});


// Close confirmation modal when the close button is clicked
var closeButton = confirmationModal.querySelector(".close");
closeButton.addEventListener("click", function() {
    confirmationModal.style.display = "none";
});


// Get the Nej tak button
var nejTakButton = document.querySelector(".nejtak-button");


// Add event listener to the Nej tak button
nejTakButton.addEventListener("click", function() {
    // Close the modal
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
});