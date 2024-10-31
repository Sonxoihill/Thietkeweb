 
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
 