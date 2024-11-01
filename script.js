// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal
var images = document.getElementsByClassName("gallery-item");
for (let i = 0; i < images.length; i++) {
  images[i].onclick = function() {
    modal.style.display = "flex"; // Show modal
    var img = document.getElementById("img01");
    img.src = this.src; // Get the clicked image source
    var captionText = document.getElementById("caption");
  }
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none"; // Hide modal
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Hide modal
  }
}
