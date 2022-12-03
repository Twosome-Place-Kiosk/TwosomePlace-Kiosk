

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


class CollectionsApi {
    static #instance = null;

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new CollectionsApi();
        }
        return this.#instance;
    }

    getCollections(page) {
        let responseData = null;

        const url = location.href;
        const category = url.substring(url.lastIndexOf("/") + 1);

        $.ajax({
            async: false,
            type: "get",
            url: "/api/main/" + category,
            data: {
                "page": page
            },
            dataType: "json",
            success: (response) => {
                responseData = response.data;
            },
            error: (error) => {
                console.log(error);
            }
        });

        return responseData;

    }
}

class OptionApi {
    static #instance = null;

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new OptionApi();
        }
        return this.#instance;
    }

    getOptions() {
        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "/api/main/option",
           
            dataType: "json",
            success: (response) => {
                responseData = response.data;
            },
            error: (error) => {
                console.log(error);
            }
        });

        return responseData;

    }
}

// class PageNumber {
//     #page = 0;
//     #maxPageNumber = 0;
//     #pageNumberList = null;

//     constructor(page, totalCount) {
//         this.#page = page;
//         this.#maxPageNumber = totalCount % 16 == 0 ? Math.floor(totalCount / 16) : Math.floor(totalCount / 16) + 1;
//         this.#pageNumberList = document.querySelector(".page-number-list");
//         this.#pageNumberList.innerHTML = "";
//         this.loadPageNumbers();
//     }

//     loadPageNumbers() {
//         this.createPreButton();
//         this.createNumberButtons();
//         this.createNextButton();
//         this.addPageButtonEvent();
//     }

//     createPreButton() {
//         if(this.#page != 1) {
//             this.#pageNumberList.innerHTML += `
//                 <a href="javascript:void(0)"><li>&#60;</li></a>
//             `;
//         }
//     }

//     createNumberButtons() {
//         const startIndex = this.#page % 5 == 0 ? this.#page - 4 : this.#page - (this.#page % 5) + 1;
//         const endIndex = startIndex + 4 <= this.#maxPageNumber ? startIndex + 4 : this.#maxPageNumber;

//         for(let i = startIndex; i <= endIndex; i++) {
//             this.#pageNumberList.innerHTML += `
//                 <a href="javascript:void(0)"><li>${i}</li></a>
//             `;
//         }

//     }

        // createNextButton() {
        //     if(this.#page != this.#maxPageNumber) {
        //         this.#pageNumberList.innerHTML += `
        //             <a href="javascript:void(0)"><li>&#62;</li></a>
        //         `;
        //     }
        // }

        // addPageButtonEvent() {
        //     const pageButtons = this.#pageNumberList.querySelectorAll("li");
        //     pageButtons.forEach(button => {
        //         button.onclick = () => {
    
        //             if(button.textContent == "<"){
        //                 const nowPage = CollectionsService.getInstance().collectionsEntity.page;
        //                 CollectionsService.getInstance().collectionsEntity.page = Number(nowPage) - 1;
        //                 CollectionsService.getInstance().loadCollections();
        //             }else if(button.textContent == ">"){
        //                 const nowPage = CollectionsService.getInstance().collectionsEntity.page;
        //                 CollectionsService.getInstance().collectionsEntity.page = Number(nowPage) + 1;
        //                 CollectionsService.getInstance().loadCollections();
        //             }else {
        //                 const nowPage = CollectionsService.getInstance().collectionsEntity.page;
        //                 if(button.textContent != nowPage){
        //                 CollectionsService.getInstance().collectionsEntity.page = button.textContent;
        //                     CollectionsService.getInstance().loadCollections();
        //                 }
        //             }
        //         }
        //     });
        // }


// }

class CollectionsService {
    static #instance = null;

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new CollectionsService();
        }
        return this.#instance;
    }

    collectionsEntity = {
        page: 1,
        totalCount: 0
    }

    loadCollections() {
        const responseData = CollectionsApi.getInstance().getCollections(this.collectionsEntity.page);

        console.log(responseData);

        if(responseData.length > 0) {
            this.collectionsEntity.totalCount = responseData[0].productTotalCount;
            // new PageNumber(this.collectionsEntity.page, this.collectionsEntity.totalCount);
            this.getCollections(responseData);
        }else {
            alert("해당 카테고리에 등록된 상품 정보가 없습니다.");
            location.href = "/main/all";
        }

    }


    getCollections(responseData) {
        const collectionProducts = document.querySelector(".product-list");
        collectionProducts.innerHTML = ``;

        const collectionOptions = document.querySelector(".option-header");
        collectionOptions.innerHTML = ``;


        responseData.forEach(product => {
            collectionProducts.innerHTML += `
                <li class="product" value="${product.pdtId}">
                    <div class="product-size">&nbsp; Large</div>
                    <div class="product-image">
                        <img src="/static/images/product/${product.mainImg}">
                    </div>
                    <div class="product-info product-name">${product.productName}</div>
                    <div class="product-info product-price"> ${product.productPrice}원</div>
                </li>
            `;            
        });



        const products = document.querySelectorAll(".product");
        
        for(const [index,product] of products.entries()) {
            product.addEventListener('click', function(event){

                const modalPop = document.querySelector(".modal-wrap"); 
                const modalBg = document.querySelector(".modal-bg");
                modalPop.style.display ="block";
                modalBg.style.display ="block";
                console.log(responseData);

                collectionOptions.innerHTML = `
                    <div class="modal-imagebox">
                        <img class="modal-main-image" src="/static/images/product/${responseData[index].mainImg}">
                    </div>
                    <div class="modal-titlebox">
                        <span class="modal-pdtname">${responseData[index].productName}</span>
                        <span class="modal-price">${responseData[index].productPrice}원</span>
                    </div>
                `;

                const addBasketbutton = document.querySelector(".modal-addcart");
                const addBasketProduct = document.querySelector(".basket-product-list");
                
                addBasketbutton.onclick = () => {
                    console.log(index);
                    addBasketProduct.innerHTML +=`
                    <div class="basket-product">
                    <img class="cart-image" src="/static/images/product/${responseData[index].mainImg}">
                    <div class="countbtn-box">
                    <div class="countbtn plus-btn"><i class="plus-btn fa-solid fa-circle-plus"></i></div>
                    <div class="countbtn count-zone">1</div>
                    <div class="countbtn minus-btn"><i class="minus-btn fa-solid fa-circle-minus"></i></div>
                    </div>
                    `;
                    popClose();
                }
            })

           
         this.getColdHotOptions();
     }
}




    getColdHotOptions() {
        const responseData = OptionApi.getInstance().getOptions();
        console.log(responseData);

        const coldhotbox = document.querySelector(".modal-coldhotbox-radios");

        coldhotbox.innerHTML = ``;
        responseData.forEach((product, i) => {
            coldhotbox.innerHTML += `
                <input type="radio" id="coldhot${i}" name="coldhots" value="${product.optionName}">
                <label for="coldhot${i}">
                    <span class="cup in-cold">
                        <img class="option-img" src="/static/images/공차옵션사진/COLD HOT/${product.optionOriginName}">${product.optionName}
                    </span>
                </label>
            `;            


        });

    }

    
}

window.onload = () => {
    CollectionsService.getInstance().loadCollections();
}

