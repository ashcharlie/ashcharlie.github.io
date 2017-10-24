// $(window).scroll(function () {
//     if ($(window).scrollTop() > 100) {
//         $('#nav').css('top', $(window).scrollTop());
//     }
// }
// );

$(document).ready(function() {
  
  $(window).scroll(function () {
      //if you hard code, then use console
      //.log to determine when you want the 
      //nav bar to stick.  
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 117) {
      $('#nav').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 116) {
      $('#nav').removeClass('navbar-fixed');
    }
  });
});


// Modal 1: Portfolio Landing Page (2015)
// Get the modal
var modal = document.getElementById('myModal01');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg01');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Modal 2: Initial Landing Page and Logo Sketches
// Get the modal
var modal = document.getElementById('myModal02');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg02');
var modalImg = document.getElementById("img02");
var captionText = document.getElementById("caption02");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Modal 3: Portfolio Wireframe and Information Architecture Outlines
// Get the modal
var modal = document.getElementById('myModal03');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg03');
var modalImg = document.getElementById("img03");
var captionText = document.getElementById("caption03");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Modal 4: Portfolio Landing Page 2017
// Get the modal
var modal = document.getElementById('myModal04');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg04');
var modalImg = document.getElementById("img04");
var captionText = document.getElementById("caption04");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
  modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
