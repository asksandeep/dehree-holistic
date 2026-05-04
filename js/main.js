


/*******************************************************************************************/

document.addEventListener("DOMContentLoaded", function(){
        
    window.addEventListener('scroll', function() {
       
        if (window.scrollY > 200) {
            document.getElementById('navbar_top').classList.add('fixed-top');
            // add padding top to show content behind navbar
            navbar_height = document.querySelector('.navbar').offsetHeight;
            document.body.style.paddingTop = navbar_height + 'px';
        } else {
            document.getElementById('navbar_top').classList.remove('fixed-top');
             // remove padding top from body
            document.body.style.paddingTop = '0';
        } 
    });
}); 


// ***************************************************************************** // 




/*=============================================
  =             Mobile menu                  =
=============================================*/

$(function(){
  $('.menu-toggle, nav.mobilemenu a').on('click', function(){
    $('nav.mobilemenu').toggleClass('open');
    $('main').toggleClass('back').toggleClass('blur');
    $('.mobile-blur-bg').fadeToggle();
  });

  $('.mobile-blur-bg').on('click', function(){
    $('nav.mobilemenu').removeClass('open');
    $('main').removeClass('back blur');
    $(this).fadeOut();
  });
});


/*=============================================
  =                   Form                  =
=============================================*/


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".form");
    const emailInput = form.querySelector("input[type='email']");
    const popup = document.querySelector(".thankyou-popup");
    const overlay = document.querySelector(".overlay");

    
    // âœ… Show popup on form submit
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent form from reloading the page

      overlay.style.display = "block";
      popup.style.display = "flex";

      form.reset(); // Optional: clear form after submission
    });

    // âœ… Close popup when clicking on overlay
    overlay.addEventListener("click", function () {
      overlay.style.display = "none";
      popup.style.display = "none";
    });
  });


  function handleFormSubmit() {
    // Show the popup and overlay after a short delay to allow form submission
    setTimeout(() => {
        document.querySelector(".overlay").style.display = "block";
        document.querySelector(".thankyou-popup").style.display = "flex";
    }, 100);

    // Keep the user on the same page
    return true;
}

document.addEventListener("DOMContentLoaded", function () {
    const overlay = document.querySelector(".overlay");
    const popup = document.querySelector(".thankyou-popup");

    // Close popup when clicking on overlay
    overlay.addEventListener("click", function () {
        overlay.style.display = "none";
        popup.style.display = "none";
        document.querySelector(".customForm").reset(); // Optional: reset the form
    });
});




document.querySelectorAll("img").forEach(img => {
  img.loading = "lazy";
});





$('.testimonial3').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    autoplay:true,
    navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
   // nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        800: {
            items: 2
        },
        1000: {
            items: 2
        }
        ,
        1200: {
            items: 3
        }
    }
})
