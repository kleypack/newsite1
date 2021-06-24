if (matchMedia('only screen and (min-width: 800px)').matches) {
  // smartphone/iphone... maybe run some small-screen related dom scripting?

  var slideIndex = 1;
  showDivs(slideIndex);

  function plusDivs(n) {
    showDivs(slideIndex += n);
  }

  function currentDiv(n) {
    showDivs(slideIndex = n);
  }

  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("gallery-slide");
    var dots = document.getElementsByClassName("gallery-indicator");
    if (n > x.length) {slideIndex = 1}    
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" gallery-indicator-active", "");
    }
    x[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " gallery-indicator-active";


  }

}