// https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_modal_img
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function getImageId(){
console.log(event.srcElement.id);
myImg = document.getElementById(event.srcElement.id)
modal.style.display = "block";
modalImg.src = myImg.src;
captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}