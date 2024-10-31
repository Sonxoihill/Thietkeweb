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
 
 function validateForm() {
    
    const vatCode = document.getElementById("vat-code").value;
    const companyName = document.getElementById("company-name").value;
    const address = document.getElementById("address").value;
    const taxcode = document.getElementById("taxcode").value;
    const customerName = document.getElementById("customer-name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    let isValid = true;
    
    if (!vatCode || isNaN(vatCode)) {
        document.getElementById("vatError").textContent = "Mã đăng ký hóa đơn VAT phải là số và không được để trống.";
        document.getElementById("vatError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("vatError").style.display = "none";
    }

    if (!companyName) {
        document.getElementById("companyError").textContent = "Tên công ty không được để trống.";
        document.getElementById("companyError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("companyError").style.display = "none";
    }

    if (!address) {
        document.getElementById("addressError").textContent = "Địa chỉ không được để trống.";
        document.getElementById("addressError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("addressError").style.display = "none";
    }

    if (!taxcode) {
        document.getElementById("taxError").textContent = "Mã số thuế không được để trống.";
        document.getElementById("taxError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("taxError").style.display = "none";
    }

    if (!customerName) {
        document.getElementById("nameError").textContent = "Tên khách hàng không được để trống.";
        document.getElementById("nameError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("nameError").style.display = "none";
    }

    if (!email) {
        document.getElementById("emailError").textContent = "Email không được để trống.";
        document.getElementById("emailError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    if (!phone || isNaN(phone)) {
        document.getElementById("phoneError").textContent = "Số điện thoại phải là số và không được để trống.";
        document.getElementById("phoneError").style.display = "block";
        isValid = false;
    } else {
        document.getElementById("phoneError").style.display = "none";
    }

    if (isValid) {
        alert("Thông tin hợp lệ! Đang gửi...");
    }
}
