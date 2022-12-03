// Get the modal
var project1Modal = document.getElementById("project1Modal");
var project2Modal = document.getElementById("project2Modal");

// Get the button that opens the modal
var project1btn = document.getElementById("project1btn");
var project2btn = document.getElementById("project2btn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
project1btn.onclick = function() {
    project1Modal.style.display = "block";
}
project2btn.onclick = function() {
    project2Modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    project1Modal.style.display = "none";
    project2Modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == project1Modal) {
    project1Modal.style.display = "none";
  }
  if (event.target == project2Modal) {
    project2Modal.style.display = "none";
  }
}