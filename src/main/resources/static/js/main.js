const products = document.querySelectorAll(".product");

products.onclick() = () => {
    
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