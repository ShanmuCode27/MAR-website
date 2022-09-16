imgArr = [2,3,4,5,6,7,8,9];
imgTitleArr = ['T-SHIRTS', 'MUGS', 'GIFT ITEMS', 'WEDDING PHOTOGRAPHY', 'CERTIFICATES', 'DESK CALENDAR', 'BANNERS', 'BUSINESS CARDS'];
imgDescriptionArr = ['Test Data', 'Test Data', 'Test Data', 'Test Data', 'Test Data', 'Test Data', 'Test Data', 'Test Data'];

let slide = document.createElement('div');
slide.classList.add('carousel-item');
for (let i = 0; i < 8; i++) {

    let slideContent = 
  `<div class="row flex-column flex-lg-row">
    <div class="col order-lg-1 p-0 d-flex justify-content-center align-items-center">
      <img src="./images/${imgArr[i]}.jpg" class="d-block w-100 img-fluid"
          alt="design mobile background">
    </div>
    <div class="col order-lg-2">
      <div class="row flex-column">
        <div class="col d-flex justify-content-center
            align-items-center ml-sm-0 ml-5">
          <div class="row flex-column w-100 justify-content-center
              justify-content-lg-start" style="margin: 7em 5em 0 5em">
            <div class="col text-left mb-3 h5 lh-1 sect-topic">
              <p>${imgTitleArr[i]} </p>
            </div>
            <div class="col">
              <p class="text-justify text-md-start text-muted h6 lh-lg
                  sect-para slant-right">
                  ${imgDescriptionArr[i]}
              </p>
            </div>
            <div class="col">
              <div class="col col-sm-12 d-flex justify-content-center
                  justify-content-md-start" style="padding: 1em 0;">
                  <button class=
                      "btn text-light col-md-5 col sect-btn">
                      TRY OUT
                  </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col carousel-control pl-5 my-5">
          <div class="count"></div>
          <div class="row w-50 d-none d-md-flex justify-content-start mt-2"
              style="margin-left: 5em; gap: 0rem;">
            <a class="carousel-control-prev"
                data-bs-target="#carouselSect3" data-bs-slide="prev">
              <span><i class="fa fa-angle-left arrow"></i></span>
              <span class="visually-hidden">Previous</span>
            </a>
            <a class="carousel-control-next"
                data-bs-target="#carouselSect3" data-bs-slide="next">
              <span><i class="fa fa-angle-right arrow"></i></span>
              <span class="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>`;

  slide.innerHTML = slideContent;

  document.querySelector('.carousel-inner').appendChild(slide.cloneNode(true));
}

const total = $('.sect-3-carousel > .carousel-item').length;
let curr = $('div.active').index() + 1;
$('.count').html('0'+curr+'/0'+total+'');

$('#carouselSect3').on('slid.bs.carousel', function() {
    curr = $('div.active').index() + 1;
   $('.count').html('0'+curr+'/0'+total+'');
});

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

$(".owl-carousel").owlCarousel({
    nav: false,
    dots: false,
    loop: true,
    margin: 30,
    responsive: {
      0: {
        items: 1
      },
      1200: {
        items: 2
      }
    },
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});

$('.go-next').click(function() {
  $(".owl-carousel").trigger('next.owl.carousel');
})
$('.go-previous').click(function() {
    $(".owl-carousel").trigger('prev.owl.carousel');
});


// $('form').submit(function (e) {
//   e.preventDefault();
//   let emailInput = $('#email').val();
//   if(emailInput.match(/[a-zA-Z0-9]+@[(a-zA-Z0-9)+\.]/g)){
//     $('#submit-btn').css({
//       "background-color": "#33cccc",
//       "color": "#000"
//     });
//     $('#email').val('');
//     setTimeout(function() {
//       $('#submit-btn').css({
//         "background-color": "#16a086",
//         "color": "#fff"
//       });
//     }, 3000)
//   } else {
//     $('#submit-btn').css({
//       "background-color": "#ff6600",
//       "color": "#000"
//     });
//     $('#email').val('');
//     setTimeout(function() {
//       $('#submit-btn').css({
//         "background-color": "#16a086",
//         "color": "#fff"
//       });
//     }, 3000)
//   }
// });


(function () {
  emailjs.init("EjBnmCoHomHUCl070");
})();

document.getElementById("myForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const serviceID = "service_ruah5zo";
  const templateID = "template_ld3l4gr";

  // send the email here
  emailjs.sendForm(serviceID, templateID, this).then(
    (response) => {
      console.log("SUCCESS!", response.status, response.text);
      alert("SUCCESS!");
    },
    (error) => {
      console.log("FAILED...", error);
      alert("FAILED...", error);
    }
  );
});