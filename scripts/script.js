const title = ['mug.jpg', 'visiting.jpg', 'calendar.jpg', 'wedding.jpg', 'tshirt.jpg', 'certificate.jpg', 'gift.jpg'];
const description = [
  'We got you covered with variety of mugs. The cool gift to enjoy a hot drink',
  'The reputation depends on the look and quality of your business cards. Get the best one !',
  'The plan ahead is always on the calendar',
  'Make your Wedding, Birthday Celebrations, Anniversaries and any kind of occassion the best experience',
  'Show your brand in the look !. Customized high quality Tshirt for your team',
  'The awards are to be remembered for the good',
  'What would you wanna wish to gift ?'
]

for(let i = 0; i < title.length; i++) {

    let index = title[i].indexOf('.');
    let name = title[i].substring(0, index);

    let slideContent = 
  `
  <div class="row">
  <div class="col-12 col-lg-7 mt-5 text-center text-lg-start p-0 pt-5">
    <img class="pt-lg-5 move_img_left" src="./images/design/${title[i]}" alt="frame image"
      width="322" height="462">
  </div>
  <div class="col py-5 my-5">
    <div class="p-0 pt-lg-5 px-4 pb-3 content_wrapper">
      <h2 class="text-uppercase pt-0 pb-1 green_color content_heading">
        ${name}
      </h2>
      <p class="pt-3 pb-4 lh-lg grey_color gotham_light content_para">
        ${description[i]}
      </p>
      <button type="button" class="btn btn-success mb-5 rounded-0 my_btn">CONTACT</button>
    </div>
  </div>
  </div>
  `;

  let slide = document.createElement('div');
  slide.classList.add('carousel-item');
  slide.innerHTML = slideContent;
  document.querySelector('#design-carousel > .carousel-inner').appendChild(slide.cloneNode(true));
}


const total = $('#design-carousel > .carousel-inner > .carousel-item').length;
let curr = $('.carousel-item.active').index() + 1;
$('.count_slides').html('0'+curr+'/0'+total+'');

$('#design-carousel').on('slid.bs.carousel', function() {
    curr = $('div.active').index() + 1;
   $('.count_slides').html('0'+curr+'/0'+total+'');
});


let myOffcanvas = document.getElementById('offcanvasRight');
let bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
document.getElementById("open-menu").addEventListener('click',function (e){
  bsOffcanvas.toggle();
});


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

AOS.init();
