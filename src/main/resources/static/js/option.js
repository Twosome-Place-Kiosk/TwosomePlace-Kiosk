const cups = document.querySelectorAll(".cup");
for(const cup of cups) {
    cup.addEventListener('click', function(event){
        cup.style.border="3px solid red";
    })
}

const ices = document.querySelectorAll(".ice");
for(const ice of ices) {
    ice.addEventListener('click', function(event){
        ice.style.border="3px solid red";
    })
}

const sugers = document.querySelectorAll(".suger");
for(const suger of sugers) {
    suger.addEventListener('click', function(event){
        suger.style.border="3px solid red";
    })
}

const selects = document.querySelectorAll(".topping");
for(const select of selects) {
    select.addEventListener('click', function(event){
        select.style.border="3px solid red";
    })
}