  
  let lastScrollTop = 0; 

  window.onscroll = function() {
      const header = document.querySelector('header');
      const nav = document.querySelector('nav');
      const st = window.pageYOffset || document.documentElement.scrollTop; 
  
      
      if (st > lastScrollTop) {
          
          nav.style.top = '0'; 
      } else {
          
          if (st <= header.offsetHeight) {
              nav.style.top = '40px'; 
          } else {
              nav.style.top = '0'; 
          }
      }
  
      lastScrollTop = st <= 0 ? 0 : st; 
  };
  

var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 2,  
    spaceBetween: 10,  
    loop: true,        
    navigation: {      
        nextEl: ".swiper-button-next1",
        prevEl: ".swiper-button-prev1",
    },
    slidesPerGroup: 1, 
});

var swiper = new Swiper(".mySwiper2", {
    slidesPerView: 4,   
    spaceBetween: 10,  
    loop: true,        
    navigation: {      
        nextEl: ".swiper-button-next2",
        prevEl: ".swiper-button-prev2",
    },
    slidesPerGroup: 1, 
});

var swiper = new Swiper(".mySwiper3", {
    slidesPerView: 3,  
    spaceBetween: 10,  
    loop: true,       
    navigation: {      
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    },
    slidesPerGroup: 1,
});
var swiper = new Swiper(".mySwiper4", {
    slidesPerView: 4,  
    spaceBetween: 10,  
    loop: true,       
    navigation: {      
        nextEl: ".swiper-button-next4",
        prevEl: ".swiper-button-prev4",
    },
    slidesPerGroup: 1, 
});




const categoryItems = document.querySelectorAll('.category-item');
const productItems = document.querySelectorAll('.product-item');


categoryItems.forEach(category => {
    category.addEventListener('click', function() {
        const selectedCategory = this.getAttribute('data-category');

        
        productItems.forEach(product => {
            const productCategory = product.getAttribute('data-category');

            
            if (selectedCategory === 'all' || productCategory === selectedCategory) {
                product.style.display = 'block'; 
            } else {
                product.style.display = 'none'; 
            }
        });
    });
});