function toggleMenu() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('flex');
      menu.classList.toggle('hidden');
    }


window.onload = function () {
    
const testimonials = [
    {
      quote: `"Partnering with Logix has been transformative for our logistics operations. Their expertise and innovative solutions have streamlined our supply chain, reduced costs, and significantly improved our delivery."`,
      author: "Howard Fidelstain",
      position: "CEO, GeoBoost LTD",
    },
    {
      quote: `"Logix made our shipping seamless and efficient. Their support is top-notch and we’ve saved both time and money."`,
      author: "Sarah Thompson",
      position: "Operations Head, QuickMove Inc."
    },
    {
      quote: `"From the first consultation to final delivery, Logix delivered excellence. Highly recommended!"`,
      author: "Alex Rivera",
      position: "Founder, FastPath Express",
    }
  ];

let current = 0;

  const quoteEl = document.getElementById('quote');
  const authorEl = document.getElementById('author');
  const positionEl = document.getElementById('position');


  function updateTestimonial (){
    const Testimonial = testimonials[current];
    quoteEl.textContent = Testimonial.quote
    authorEl.textContent = Testimonial.author
    positionEl.textContent = Testimonial.position

    current = (current + 1) % testimonials.length
  }

 updateTestimonial()
  
 
  setInterval(updateTestimonial,5000)

}

 function toggleCheckbox(el) {
    const box = el.querySelector('.checkbox-box');
    const isChecked = box.classList.toggle('bg-green-500');

    if (isChecked) {
      box.innerHTML = '<svg class="w-4 h-4 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" /></svg>';
    } else {
      box.innerHTML = '';
    }
  }



  // animation
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    document.querySelectorAll('.fade-in-up, .fade-in-side, .fade-in-leftside, .fade-in-top, .fade-in-scale').forEach(el => {
      observer.observe(el);
    });


    window.addEventListener("scroll",()=>{

      const section  = document.getElementById('truck-section')
      const truck = document.querySelector('.truck-img');
      const box = document.querySelector('.box-img');
      
      const sectionTop  = section.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight - 100){
        truck.classList.add('truck')
        box.classList.add('box')
      }

    })