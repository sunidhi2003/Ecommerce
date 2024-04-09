'use strict';

// modal variables
const modal = document.querySelector('[data-modal]');
const modalCloseBtn = document.querySelector('[data-modal-close]');
const modalCloseOverlay = document.querySelector('[data-modal-overlay]');

// modal function
const modalCloseFunc = function () { modal.classList.add('closed') }

// modal eventListener
modalCloseOverlay.addEventListener('click', modalCloseFunc);
modalCloseBtn.addEventListener('click', modalCloseFunc);





// notification toast variables
const notificationToast = document.querySelector('[data-toast]');
const toastCloseBtn = document.querySelector('[data-toast-close]');

// notification toast eventListener
toastCloseBtn.addEventListener('click', function () {
  notificationToast.classList.add('closed');
});





// mobile menu variables
const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {

  // mobile menu function
  const mobileMenuCloseFunc = function () {
    mobileMenu[i].classList.remove('active');
    overlay.classList.remove('active');
  }

  mobileMenuOpenBtn[i].addEventListener('click', function () {
    mobileMenu[i].classList.add('active');
    overlay.classList.add('active');
  });

  mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
  overlay.addEventListener('click', mobileMenuCloseFunc);

}





// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}



 // Get all elements with class name 'countdown'
 const countdowns = document.querySelectorAll('.countdown');

 // Function to update countdown timer
 function updateCountdown() {
   countdowns.forEach(countdown => {
     const countdownContents = countdown.querySelectorAll('.display-number');
 
     // Get the remaining time values from each countdown content
     let days = parseInt(countdownContents[0].textContent);
     let hours = parseInt(countdownContents[1].textContent);
     let minutes = parseInt(countdownContents[2].textContent);
     let seconds = parseInt(countdownContents[3].textContent);
 
     // Update the countdown timer
     if (seconds > 0) {
       seconds--;
     } else {
       seconds = 59;
 
       if (minutes > 0) {
         minutes--;
       } else {
         minutes = 59;
 
         if (hours > 0) {
           hours--;
         } else {
           hours = 23;
 
           if (days > 0) {
             days--;
           } else {
             // If the countdown reaches 0, you can take appropriate action here
             clearInterval(timer); // Stop the timer
             console.log('Countdown expired');
           }
         }
       }
     }
 
     // Update the countdown content with new values
     countdownContents[0].textContent = days < 10 ? `0${days}` : days;
     countdownContents[1].textContent = hours < 10 ? `0${hours}` : hours;
     countdownContents[2].textContent = minutes < 10 ? `0${minutes}` : minutes;
     countdownContents[3].textContent = seconds < 10 ? `0${seconds}` : seconds;
   });
 }
 
 // Run the countdown update function every second (1000 milliseconds)
 const timer = setInterval(updateCountdown, 1000);
 

 
  var product_total_amt = document.getElementById('product_total_amt');
  var shipping_charge = document.getElementById('shipping_charge');
  var total_cart_amt = document.getElementById('total_cart_amt');
  var discountCode = document.getElementById('discount_code1');

  const updateCart = (itemprice, quantity) => {
    var itemPrice = parseInt(itemprice.innerHTML);
    var currentQuantity = parseInt(quantity.value);
    var updatedPrice = itemPrice * currentQuantity;

    product_total_amt.innerHTML = updatedPrice;
    total_cart_amt.innerHTML = updatedPrice + parseInt(shipping_charge.innerHTML);
  };

  const addToCart = (itemprice, quantity) => {
    var currentQuantity = parseInt(quantity.value);
    quantity.style.background = '#fff';
    quantity.style.color = '#000';

    updateCart(itemprice, quantity);
  };

  const decreaseNumber = (incdec, itemprice, quantity) => {
    var itemval = document.getElementById(incdec);

    if (itemval.value > 0) {
      itemval.value = parseInt(itemval.value) - 1;
      addToCart(itemprice, quantity);
    }
  };

  const increaseNumber = (incdec, itemprice, quantity) => {
    var itemval = document.getElementById(incdec);

    if (itemval.value < 5) {
      itemval.value = parseInt(itemval.value) + 1;
      addToCart(itemprice, quantity);
    }
  };

  const discount_code = () => {
    let totalamtcurr = parseInt(total_cart_amt.innerHTML);
    let error_trw = document.getElementById('error_trw');

    if (discountCode.value === 'thapa') {
      let newtotalamt = totalamtcurr - 15;
      total_cart_amt.innerHTML = newtotalamt;
      error_trw.innerHTML = "Hurray! code is valid";
    } else {
      error_trw.innerHTML = "Try Again! Valid code is thapa";
    }
  };
