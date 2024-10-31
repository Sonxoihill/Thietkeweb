
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

function toggleDescription(element) {
    
    const descriptionElement = element.querySelector('.description');
    
    
    if (descriptionElement.style.display === "none") {
        descriptionElement.style.display = "block";
    } else {
        descriptionElement.style.display = "none";
    }
}

function showProducts(category) {
    
    const products = document.querySelectorAll('.product-item');
    products.forEach(function(product) {
        product.style.display = 'none';
    });

    
    const selectedProducts = document.querySelectorAll(`.product-item[data-category='${category}']`);
    selectedProducts.forEach(function(product) {
        product.style.display = 'block';
    });
}


document.querySelectorAll('.category-item').forEach(function(item) {
    item.addEventListener('click', function() {
        const category = item.querySelector('p').textContent.trim(); 
        showProducts(category); 
    });
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



