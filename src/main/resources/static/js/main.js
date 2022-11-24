const products = document.querySelectorAll(".product");

for(const product of products) {
    product.addEventListener('click', function(event){
        
        var modalPop = $('.modal-wrap');
        var modalBg = $('.modal-bg');

        $(modalPop).show();
        $(modalBg).show();
    })
}

const ordercheck = document.querySelector(".pay-button");

ordercheck.addEventListener('click', function(event){

    const modalPop1 = document.querySelector(".modal-wrap1"); 
    const modalBg1 = document.querySelector(".modal-bg1");

    modalPop1.style.display ="block";
    modalBg1.style.display ="block";
})

const modalClose = document.querySelector(".modal-close");

modalClose.addEventListener('click', function(event){
    const modalPop1 = document.querySelector(".modal-wrap1");
    const modalBg1 = document.querySelector(".modal-bg1");

    modalPop1.style.display ="none";
    modalBg1.style.display ="none";

})

const modalPay = document.querySelector(".modal-pay");

modalPay.addEventListener('click', function(event){
    const modalPop2 = document.querySelector(".modal-wrap2");
    const modalBg2 = document.querySelector(".modal-bg2");

    modalPop2.style.display ="block";
    modalBg2.style.display ="block";

    const modalPop1 = document.querySelector(".modal-wrap1");
    const modalBg1 = document.querySelector(".modal-bg1");

    modalPop1.style.display ="none";
    modalBg1.style.display ="none";

})

const payYes = document.querySelector(".pay-yes-btn");

payYes.addEventListener('click', function(event){

    const modalPop2 = document.querySelector(".modal-wrap2");
    const modalBg2 = document.querySelector(".modal-bg2");

    modalPop2.style.display ="none";
    modalBg2.style.display ="none";

})

const payNo = document.querySelector(".pay-no-btn");

payNo.addEventListener('click', function(event){

    const modalPop2 = document.querySelector(".modal-wrap2");
    const modalBg2 = document.querySelector(".modal-bg2");

    modalPop2.style.display ="none";
    modalBg2.style.display ="none";

})







const adminLoginBtn = document.querySelector(".admin-login-btn");

adminLoginBtn.onclick = () => {
    location.href="/account/login";
}

const homeBtn = document.querySelector(".atag-white-btn");

homeBtn.onclick = () => {
    location.href="/banner";
}

