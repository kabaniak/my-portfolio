// Get the modal
var bioModal = document.getElementById("bioModal");

// Get the button that opens the modal
var biobtn = document.getElementById("biotrigger");

// Get the <span> element that closes the modal
var span3 = document.getElementById("close-3");

// When the user clicks on the button, open the modal
biobtn.onclick = function() {
    bioModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    bioModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == bioModal) {
    bioModal.style.display = "none";
  }
}