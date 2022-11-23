const products = document.querySelectorAll(".product");

for(const product of products) {
    product.addEventListener('click', function(event){
        
        var modalPop = $('.modal-wrap');
        var modalBg = $('.modal-bg');

        $(modalPop).show();
        $(modalBg).show();
    })
}

function popOpen() {
    var modalPop = $('.modal-wrap');
    var modalBg = $('.modal-bg');

    $(modalPop).show();
    $(modalBg).show();
}

function popClose() {
   var modalPop = $('.modal-wrap');
   var modalBg = $('.modal-bg');

   $(modalPop).hide();
   $(modalBg).hide();

}



const ordercheck = document.querySelector(".atag-white-btn");
ordercheck.addEventListener('click', function(event){

    var modalPop1 = $('.modal-wrap1');
    var modalBg1 = $('.modal-bg1');

    $(modalPop1).show();
    $(modalBg1).show();
})

function popOpen1() {
var modalPop1 = $('.modal-wrap1');
var modalBg1 = $('.modal-bg1');

$(modalPop1).show();
$(modalBg1).show();
}

function popClose1() {
var modalPop1 = $('.modal-wrap1');
var modalBg1 = $('.modal-bg1');

$(modalPop1).hide();
$(modalBg1).hide();

}
