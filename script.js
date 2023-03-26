let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
 showSlides((slideIndex += n));
}

function currentSlide(n) {
 showSlides((slideIndex = n));
}

function showSlides(n) {
 let i;
 let slides = document.getElementsByClassName("mySlides");
 let dots = document.getElementsByClassName("dot");
 if (n > slides.length) {
  slideIndex = 1;
 }
 if (n < 1) {
  slideIndex = slides.length;
 }
 for (i = 0; i < slides.length; i++) {
  slides[i].style.display = "none";
 }
 for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
 }
 slides[slideIndex - 1].style.display = "block";
 dots[slideIndex - 1].className += " active";
}

// owl carousel

$("#owl-carousel").owlCarousel({
 loop: true,
 margin: 30,
 autoplayDuration: 1000,
 autoplay: true,
 dots: true,
 nav: false,
 items: 2,
});

// count down odometer

var a = 0;
$(window).scroll(function () {
 var oTop = $("#counter").offset().top - window.innerHeight;
 if (a == 0 && $(window).scrollTop() > oTop) {
  $(".counter-value").each(function () {
   var $this = $(this),
    countTo = $this.attr("data-count");
   $({
    countNum: $this.text(),
   }).animate(
    {
     countNum: countTo,
    },

    {
     duration: 2000,
     easing: "swing",
     step: function () {
      $this.text(Math.floor(this.countNum));
     },
     complete: function () {
      $this.text(this.countNum);
      //alert('finished');
     },
    }
   );
  });
  a = 1;
 }
});

// count down random

function countdown(max) {
 return Math.floor(Math.random() * max);
}

// right to left slide

$(".owl-carousel").owlCarousel({
 rtl: false,
 loop: true,
 margin: 10,
 nav: true,
 autoplay: true,
 autoplayTimeout: 1000,
 autoplayHoverPause: true,
 responsive: {
  0: {
   items: 1,
  },
  600: {
   items: 3,
  },
  1000: {
   items: 5,
  },
 },
});
