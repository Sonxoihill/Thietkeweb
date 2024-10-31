let lastScrollTop = 0; 
            
              window.onscroll = function() {
                  const header = document.querySelector('header');
                  const nav = document.querySelector('nav');
                  const st = window.pageYOffset || document.documentElement.scrollTop; 
            
                  
                  if (st > lastScrollTop) {
                      
                      header.classList.add('scrolled'); 
                      document.body.classList.remove('scrolled-up'); 
                  } else {
                      
                      header.classList.remove('scrolled'); 
                      if (st <= header.offsetHeight) {
                          document.body.classList.add('scrolled-up'); 
                      }
                  }
            
                  lastScrollTop = st <= 0 ? 0 : st; 
              };