const media910 = window.matchMedia('(max-width: 910px)');

const media1200 = window.matchMedia('(max-width: 1200px)');

const media1201 = window.matchMedia('(min-width: 1201px)');

if(media910.matches){
  
   let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides-910");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 4000); // Change image every 2 seconds
    }

}

else if(media1200.matches){
  let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides-1200");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 4000); // Change image every 2 seconds
    }
}

else if(media1201.matches){
  let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides-1201");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 4000); // Change image every 2 seconds
    }
}

media910.addEventListener('change', (event) => {
  if (event.matches) {
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {

      let i;
      let slides = document.getElementsByClassName("mySlides-910");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 4000); // Change image every 2 seconds
    }
  }
});

media1200.addEventListener('change', (event) => {
  if (event.matches) {
    let slideIndex = 0;
    showSlides();
    
    function showSlides() {

      let i;
      let slides = document.getElementsByClassName("mySlides-1200");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 4000); // Change image every 2 seconds
    }
  }
});


media1201.addEventListener('change', (event) => {
  if (event.matches) {
    let slideIndex = 0;
    showSlides();

    function showSlides() {
      let i;
      let slides = document.getElementsByClassName("mySlides-1201");
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slideIndex++;
      if (slideIndex > slides.length) {
        slideIndex = 1
      }
      slides[slideIndex - 1].style.display = "block";
      setTimeout(showSlides, 4000); // Change image every 2 seconds
    }
  }
});



// Pagent More Button Style Relative To Screen Size

// const PagentButton = window.matchMedia('(max-width: 1424px)');

// if(PagentButton.matches){
//   document.querySelector('.morePageant').style.color = '#fff';
// }

// PagentButton.addEventListener('change', (event)=>{
//   if(event.matches){
//     document.querySelector('.morePageant').style.color = '#fff';
//   }
// })



// Pageant Hover function

// const Pageant1 = document.querySelectorAll('.info1');

// Pageant1.forEach(element =>{
//   element.document.querySelector('.overlay1').style.display = 'flex';
//   element.document.querySelector('.overlay1').style.justifyContent = 'center';
//   element.document.querySelector('.overlay1').style.alignItems = 'center';
//   element.document.querySelector('.cont1').style.display = 'block';
// });

document.querySelector('.info1').addEventListener("mouseenter", () => {
  document.querySelector('.overlay1').style.display = 'flex';
  document.querySelector('.overlay1').style.justifyContent = 'center';
  document.querySelector('.overlay1').style.alignItems = 'center';
  document.querySelector('.cont1').style.display = 'block';
});
document.querySelector('.info1').addEventListener("mouseleave", () => {
  document.querySelector('.overlay1').style.display = 'none';
  document.querySelector('.cont1').style.display = 'none';
});

document.querySelector('.info2').addEventListener("mouseenter", () => {
  document.querySelector('.overlay2').style.display = 'flex';
  document.querySelector('.overlay2').style.justifyContent = 'center';
  document.querySelector('.overlay2').style.alignItems = 'center';
  document.querySelector('.cont2').style.display = 'block';
});
document.querySelector('.info2').addEventListener("mouseleave", () => {
  document.querySelector('.overlay2').style.display = 'none';
  document.querySelector('.cont2').style.display = 'none';
});

document.querySelector('.info3').addEventListener("mouseenter", () => {
  document.querySelector('.overlay3').style.display = 'flex';
  document.querySelector('.overlay3').style.justifyContent = 'center';
  document.querySelector('.overlay3').style.alignItems = 'center';
  document.querySelector('.cont3').style.display = 'block';
});
document.querySelector('.info3').addEventListener("mouseleave", () => {
  document.querySelector('.overlay3').style.display = 'none';
  document.querySelector('.cont3').style.display = 'none';
});