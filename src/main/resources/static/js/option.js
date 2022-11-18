// const cups = document.querySelectorAll(".cup");
// for(const cup of cups) {
//     cup.addEventListener('click', function(event){
//         cup.style.border="3px solid red";
//     })
// }

// const ices = document.querySelectorAll(".ice");
// for(const ice of ices) {
//     ice.addEventListener('click', function(event){
//         ice.style.border="3px solid red";
//     })
// }

// const sugers = document.querySelectorAll(".suger");
// for(const suger of sugers) {
//     suger.addEventListener('click', function(event){
//         suger.style.border="3px solid red";
//     })
// }

// const selects = document.querySelectorAll(".topping");
// for(const select of selects) {
//     select.addEventListener('click', function(event){
//         select.style.border="3px solid red";
//     })
// }
// const toppingInputs = document.querySelectorAll(".modal-toppingbox input[type=checkbox]");
// let count = 0;

// for(const toppingInput of toppingInputs){
//     if(count < 3) {
//         toppingInput.addEventListener('click', countCheck);
//         count++;
//         console.log(count);
//     }
// } 


function countCheck(obj){
    const toppingLabels = document.querySelectorAll(".modal-toppingbox input[type=checkbox]");
    let checkCount = 0;

    for(let i = 0; i< toppingLabels.length; i++) {
        if(toppingLabels[i].checked){
            checkCount++;
        }
    }
    
    // console.log(checkCount);
    if(checkCount > 3){
        alert("3개까지 체크할 수 있습니다.");
        obj.checked = false;
        return false;
    }
}



