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

    var modalPop1 = $('.modal-wrap1');
    var modalBg1 = $('.modal-bg1');

    $(modalPop1).show();
    $(modalBg1).show();
})


const hideordercheck = document.querySelector(".modal-pay");

hideordercheck.addEventListener('click', function(event){

    var modalPop1 = $('.modal-wrap1');
    $(modalPop1).hide();

    var modalPop2 = $('.modal-bg2');
    $(modalPop2).hide();


})


const pay = document.querySelector(".modal-pay");

pay.addEventListener('click', function(event){

    var modalPop2 = $('.modal-wrap2');
    $(modalPop2).show();
    
    var modalBg2 = $('.modal-bg2');
    $(modalBg2).show();

})