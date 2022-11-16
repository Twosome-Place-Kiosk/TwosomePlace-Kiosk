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