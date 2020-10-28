/* logo hide on scroll */
var maxVisibleOffset = 105;
var logo = document.getElementById("smalogo");
window.onscroll = function () {
  var currOffset = window.pageYOffset;
  if (currOffset > maxVisibleOffset) {
    if (logo.style.height !== "4.5vh")
      logo.style.height = "4.5vh"
  }
  else if (currOffset < maxVisibleOffset) {
    if (logo.style.height !== "0")
      logo.style.height = "0";
  }
}


$(document).ready(function () {
  $(window).scroll(function () {


    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  // slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
    // // removing smooth scroll on slide-up button click
    // $('html').css("scrollBehavior", "auto");
  });


  // owl carousel script
  $('.carousel').owlCarousel({
    margin: 20,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  });
});


/*---------------Text Animation-----------------*/

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: true })
  .add({
    targets: '.ml1 .letter',
    scale: [0.3, 1],
    opacity: [0, 1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 1500,
    delay: (el, i) => 70 * (i + 1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 1700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

var textWrapper12 = document.querySelector('.ml12');
textWrapper12.innerHTML = textWrapper12.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.ml12 .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i

    /**These Codes are responsible for completing loop animation. if loop is false then no need to uncomment these code */
    // }).add({
    //   targets: '.ml12 .letter',
    //   translateX: [0, -30],
    //   opacity: [1, 0],
    //   easing: "easeInExpo",
    //   duration: 1100,
    //   delay: (el, i) => 100 + 30 * i
  });

var textWrapper12a = document.querySelector('.ml12a');
textWrapper12a.innerHTML = textWrapper12a.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.ml12a .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i

    /**These Codes are responsible for completing loop animation. if loop is false then no need to uncomment these code */
    // }).add({
    //   targets: '.ml12a .letter',
    //   translateX: [0, -30],
    //   opacity: [1, 0],
    //   easing: "easeInExpo",
    //   duration: 1100,
    //   delay: (el, i) => 100 + 30 * i
  });

var textWrapper12b = document.querySelector('.ml12b');
textWrapper12b.innerHTML = textWrapper12b.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.ml12b .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i

    /**These Codes are responsible for completing loop animation. if loop is false then no need to uncomment these code */
    // }).add({
    //   targets: '.ml12b .letter',
    //   translateX: [0, -30],
    //   opacity: [1, 0],
    //   easing: "easeInExpo",
    //   duration: 1100,
    //   delay: (el, i) => 100 + 30 * i
  });



var textWrapper12c = document.querySelector('.ml12c');
textWrapper12c.innerHTML = textWrapper12c.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.ml12c .letter',
    translateX: [40, 0],
    translateZ: 0,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i

    /**These Codes are responsible for completing loop animation. if loop is false then no need to uncomment these code */
    // }).add({
    //   targets: '.ml12c .letter',
    //   translateX: [0, -30],
    //   opacity: [1, 0],
    //   easing: "easeInExpo",
    //   duration: 1100,
    //   delay: (el, i) => 100 + 30 * i
  });

var textWrapper = document.querySelector('.ml14 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
  .add({
    targets: '.ml14 .line',
    scaleX: [0, 1],
    opacity: [0.5, 1],
    easing: "easeInOutExpo",
    duration: 900
  }).add({
    targets: '.ml14 .letter',
    opacity: [0, 1],
    translateX: [40, 0],
    translateZ: 0,
    scaleX: [0.3, 1],
    easing: "easeOutExpo",
    duration: 800,
    offset: '-=600',
    delay: (el, i) => 150 + 25 * i

    /**These Codes are responsible for completing loop animation. if loop is false then no need to uncomment these code */
    // }).add({
    //   targets: '.ml14',
    //   opacity: 0,
    //   duration: 1000,
    //   easing: "easeOutExpo",
    //   delay: 1000
  });
