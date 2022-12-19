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


const cart = {
    pdtId : 0,
    coldHot : 1,
    ice: 2,
    sugar: 2,
    // topping1: 3, 배열로 받아야하나..?
    // topping2: 3,
    // topping3: 3,

  }

class ProductOption {
    optionId = null;
    optionName = null;
    optionPrice = null;
    toppingList = null;
  
    constructor(optionId, optionName, optionPrice) {
      this.optionId = optionId;
      this.optionName = optionName;
      this.optionPrice = optionPrice;
      this.toppingList = new Array();
    }
}

class Product {
    productId = null;
    productName = null;
    productPrice = null;
    productOptionList = null;
    
    stockValue = null;
    mainImg = null;
    
    constructor(productId, productName, productPrice, mainImg) {
        this.productId = productId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.stockValue = 1;
        this.mainImg = mainImg;
        this.productOptionList = new Array();
        
    }
}

class Cart {
    static #instance = null;
    static getInstance() {
      if(this.#instance == null) {
        this.#instance = new Cart();
      }
      return this.#instance;
    }
  
    cartList = null;
    stockList = null;
  
  
    constructor() {
      this.cartList = new Array();
      this.stockList = new Array();
    
    }
  
    addProduct(product) {
      
      this.cartList.push(product);
      this.stockList.push(1);

      console.log("stockList:"+this.stockList);
      this.createCart();
    }

    createCart() {
        const basket = document.querySelector(".basket-product-list");
        basket.innerHTML = "";
        let totalprice = document.querySelector(".total-price1");
        let price = 0;

        this.cartList.forEach(item =>{
            basket.innerHTML += `
            <div class="basket-product">
                <img class="cart-image" src="/static/images/product/${item.mainImg}">
                <div class="countbtn-box">
                <div class="countbtn plus-btn"><i class="fa-solid fa-circle-plus"></i></div>
                <div class="countbtn count-zone">1</div>
                <div class="countbtn minus-btn"><i class="fa-solid fa-circle-minus"></i></div>
            </div>
            `
        })
        for(let i = 0; i<this.cartList.length; i++){
            price += this.cartList[i].productPrice;
        }
        totalprice.innerHTML = `${price}`;
        console.log(totalprice);

        const plusBtn = document.querySelector(".plus-btn");
        const minusBtn = document.querySelector(".minus-btn");
        const count = document.querySelector(".count-zone");
        

        plusBtn.onclick = () => {
            
        }

        minusBtn.onclick = () => {

        }
    }

    clearlist() {
        const clearButton = document.querySelector(".delete-button");
        
        clearButton.onclick = () => {
            this.cartList.splice(0, this.cartList.length);
            this.stockList.splice(0, this.stockList.length);
            Cart.getInstance().createCart();
          }
    
    }

    payButtonClick(product) {
        
        const orderInfo = document.querySelector(".order-info");

        ordercheck.onclick = () => {
            orderInfo.innerHTML = "";

            this.cartList.forEach(item =>{
                orderInfo.innerHTML += `
                <table class="order-table">
                    <tr>
                        <td class="order-product">${item.productName}</td>
                        <td class="order-number">1</td>
                        <td class="order-price">${item.productPrice}</td>
                    </tr>
                </table>
                <table class="order-option">
                    <tr>
                        <td>* 옵션: 
                        ${item.productOptionList[0].optionName}/
                        ${item.productOptionList[1].optionName}/
                        ${item.productOptionList[2].optionName}/
                        ${item.productOptionList[3].optionName}/
                        ${item.productOptionList[4].optionName}/
                        ${item.productOptionList[5].optionName}
                        </td>
                    </tr>
                </table>
                `;
            })
        }
    }
   
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

        $.ajax({
            async: false,
            type: "get",
            url: "/api/main/option",
            dataType: "json",
            success: (response) => {
                CollectionsService.getInstance().addProductListEvent(response);
                //여기서 response(옵션 데이터) 담아서 모달창에 뿌려주는 메소드 호출
            },
            error: (error) => {
                console.log(error);
            }
        });

    }
}

// class OrderApi {
//     createOrderRequest(orderMst) {
//         let responseData = null;

//         $.ajax({
//             async: false,
//             type: "post",
//             url: "/api/order",
//             contentType: "application/json",
//             data: JSON.stringify(orderMst),
//             dataType: "json",
//             success: (response) => {
//                 responseData = response.data;
//             },
//             error: (error) => {
//                 console.log(error);
//             }

//         });

//         return responseData;

//     }
// }

// class OrderMst {
//     #pdtStatus;
//     #orderTime;
//     #orderDate;
   
//     constructor(pdtStatus, orderTime, orderDate) {
//         this.#pdtStatus = pdtStatus;
//         this.#orderTime = orderTime;
//         this.#orderDate = orderDate; 
        
//     }

//     getPdtStatus(){return this.#pdtStatus;}
//     setPdtStatus(pdtStatus) {this.#pdtStatus = pdtStatus;}

//     getOrderTime(){return this.#orderTime;}
//     setOrderTime(orderTime) {this.#orderTime = orderTime;}

//     getOrderDate(){return this.#orderDate;}
//     setOrderDate(orderDate) {this.#orderDate = orderDate;}

//     getObject() {
//         const obj = {
//             pdtStatus : this.#pdtStatus,
//             orderTime : this.#orderTime,   
//             orderDate : this.#orderDate  
            
//         }
//         return obj;
//     }
    
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
        }
        else {
            alert("해당 카테고리에 등록된 상품 정보가 없습니다.");
            location.href = "/main/all";
        }
    }

    getCollections(responseData) {
        const collectionProducts = document.querySelector(".product-list");
        collectionProducts.innerHTML = ``;

        responseData.forEach((product, number) => {
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

        OptionApi.getInstance().getOptions();
    }

    addProductListEvent(response){
        const products = document.querySelectorAll(".product");

        const collectionOptions = document.querySelector(".option-header");
        const coldHotBox = document.querySelector(".modal-coldhotbox-radios");
        const iceBox = document.querySelector(".modal-icebox-radios");
        const sugarBox = document.querySelector(".modal-sugarbox-radios");
        const slides = document.querySelector(".slides");
        
        const responseData = CollectionsApi.getInstance().getCollections(this.collectionsEntity.page);
        const option1 = document.querySelector(".option1");
        let modalOptionPrice = document.querySelector(".modal-option-price");
        

        let checkcount = 0;

        collectionOptions.innerHTML = ``;
        coldHotBox.innerHTML = ``;
        iceBox.innerHTML = ``;
        sugarBox.innerHTML = ``;
        slides.innerHTML = ``;

        products.forEach((product, index) => {
            checkcount = 0;
            
            product.onclick = () => {
                cart['pdtId'] = responseData[index].pdtId;

                const addcartList = document.querySelector(".btn-box");
                const modalPop = document.querySelector(".modal-wrap"); 
                const modalBg = document.querySelector(".modal-bg");
                modalPop.style.display ="block";
                modalBg.style.display ="block";

                console.log(response.data); //옵션 데이터

                console.log(index);

                collectionOptions.innerHTML = `
                    <div class="modal-imagebox">
                        <img class="modal-main-image" src="/static/images/product/${responseData[index].mainImg}">
                    </div>
                    <div class="modal-titlebox">
                        <span class="modal-pdtname">${responseData[index].productName}</span>
                        <span class="modal-price">${responseData[index].productPrice}원</span>
                    </div>
                `;

                coldHotBox.innerHTML = `
                    <input type="radio" id="coldhot1" name="coldhots" value="${response.data[0].optionName}">
                    <label for="coldhot1">
                        <span class="cup in-cold">
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[0].optionOriginName}">${response.data[0].optionName}
                        </span>
                    </label>
                    <input type="radio" id="coldhot2" name="coldhots" value="${response.data[1].optionName}">
                    <label for="coldhot2">
                        <span class="cup in-cold">
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[1].optionOriginName}">${response.data[1].optionName}
                        </span>
                    </label>
                    <input type="radio" id="coldhot3" name="coldhots" value="${response.data[2].optionName}">
                    <label for="coldhot3">
                        <span class="cup in-cold">
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[2].optionOriginName}">${response.data[2].optionName}
                        </span>
                    </label>
                    <input type="radio" id="coldhot4" name="coldhots" value="${response.data[3].optionName}">
                    <label for="coldhot4">
                        <span class="cup in-cold">
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[3].optionOriginName}">${response.data[3].optionName}
                        </span>
                    </label>
                `;

                iceBox.innerHTML = `
                    <input type="radio" id="ice1" name="ices" value="${response.data[4].optionName}">
                    <label for="ice1">
                        <span class="ice less-ice">
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[4].optionOriginName}">${response.data[4].optionName}
                        </span>
                    </label>
                    <input type="radio" id="ice2" name="ices" value="${response.data[5].optionName}">
                    <label for="ice2">
                        <span class="ice less-ice">
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[5].optionOriginName}">${response.data[5].optionName}
                        </span>
                    </label>
                    <input type="radio" id="ice3" name="ices" value="${response.data[6].optionName}">
                    <label for="ice3">
                        <span class="ice less-ice">
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[6].optionOriginName}">${response.data[6].optionName}
                        </span>
                    </label>
                `;

                sugarBox.innerHTML = `
                    <input type="radio" id="sugar4" name="sugars" value="${response.data[7].optionName}">
                    <label for="sugar4">
                        <span class="sugar sugar-0" >
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[7].optionOriginName}">${response.data[7].optionName}
                        </span>
                    </label>
                    <input type="radio" id="sugar5" name="sugars" value="${response.data[8].optionName}">
                    <label for="sugar5">
                        <span class="sugar sugar-0" >
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[8].optionOriginName}">${response.data[8].optionName}
                        </span>
                    </label>
                    <input type="radio" id="sugar6" name="sugars" value="${response.data[9].optionName}">
                    <label for="sugar6">
                        <span class="sugar sugar-0" >
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[9].optionOriginName}">${response.data[9].optionName}
                        </span>
                    </label>
                    <input type="radio" id="sugar7" name="sugars" value="${response.data[10].optionName}">
                    <label for="sugar7">
                        <span class="sugar sugar-0" >
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[10].optionOriginName}">${response.data[10].optionName}
                        </span>
                    </label>
                    <input type="radio" id="sugar8" name="sugars" value="${response.data[11].optionName}">
                    <label for="sugar8">
                        <span class="sugar sugar-0" >
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[11].optionOriginName}">${response.data[11].optionName}
                        </span>
                    </label>
                `;
                
                slides.innerHTML = `
                    <li>
                        <input type="checkbox" id="topping1" name="topping" value="${response.data[12].optionName}" class="topping1" >
                        <label for="topping1">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[12].optionOriginName}">${response.data[12].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping2" name="topping" value="${response.data[13].optionName}" class="topping1">
                        <label for="topping2">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[13].optionOriginName}">${response.data[13].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping3" name="topping"  value="${response.data[14].optionName}" class="topping1"> 
                        <label for="topping3">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[14].optionOriginName}">${response.data[14].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping4" name="topping" value="${response.data[15].optionName}" class="topping1">
                        <label for="topping4">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[15].optionOriginName}">${response.data[15].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping5" name="topping" value="${response.data[16].optionName}" class="topping1">
                        <label for="topping5">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[16].optionOriginName}">${response.data[16].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping6" name="topping" value="${response.data[17].optionName}" class="topping1">
                        <label for="topping6">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[17].optionOriginName}">${response.data[17].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping7" name="topping" value="${response.data[18].optionName}" class="topping1">
                        <label for="topping7">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[18].optionOriginName}">${response.data[18].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping8" name="topping" value="${response.data[19].optionName}" class="topping1">
                        <label for="topping8">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[19].optionOriginName}">${response.data[19].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping9" name="topping" value="${response.data[20].optionName}" class="topping1">
                        <label for="topping9">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[20].optionOriginName}">${response.data[20].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping10" name="topping" value="${response.data[21].optionName}" class="topping1">
                        <label for="topping10">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[21].optionOriginName}">${response.data[21].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping11" name="topping" value="${response.data[22].optionName}" class="topping1" >
                        <label for="topping11">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[22].optionOriginName}">${response.data[22].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping12" name="topping" value="${response.data[23].optionName}" class="topping1">
                        <label for="topping12">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[23].optionOriginName}">${response.data[23].optionName}
                            </span>
                        </label>
                    </li>
                `;
                addcartList.innerHTML = `
                    <button class="btn modal-cancel" onClick="javascript:popClose();">취소</button>
                    <button class="btn modal-addcart" onClick="javascript:popClose();">주문담기</button>
                `;


                const slideImg = document.querySelectorAll('.slides li');
                let currentIdx = 0;
                const slideCount = slideImg.length % 5 == 0 ? slideImg.length / 5 : Math.floor(slideImg.length / 5) + 1;
                const prev = document.querySelector('.moving-left');
                const next = document.querySelector('.moving-right');
                const slideWidth = 600; //한개의 슬라이드 넓이
                const slideMargin = 5;

                const checkboxOptions = document.querySelectorAll(".topping1");

                slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

                prev.onclick = () => {
                    if (currentIdx != 0) {
                        this.moveSlide(currentIdx - 1);
                        currentIdx -= 1;
                    }
                    console.log(
                    `
                    slideCount: ${slideCount}
                    currentIdx: ${currentIdx}
                    `
                    );
                }

                next.onclick = () => {
                    if (currentIdx < slideCount) {
                        this.moveSlide(currentIdx + 1);
                        currentIdx += 1;
                    }
                    console.log(
                    `
                    slideCount: ${slideCount}
                    currentIdx: ${currentIdx}
                    `
                    );
                }

                let addOptionPrice = 0;
                checkboxOptions.forEach((item, index1) =>{
                    option1.innerHTML = ``;
                    modalOptionPrice.innerHTML = `0`;
                    checkcount = 0;
                    
                    item.onclick = () =>{ 
                        console.log(response.data);
                        if(checkcount < 3){
                            if(item.checked == true){
                                console.log("체크됨.");
                                checkcount++;
                            }
                            addOptionPrice += response.data[index1+12].optionPrice;
                            console.log(addOptionPrice);
                        }
                        else{
                            alert("3개까지 체크할 수 있습니다.");
                            item.checked = false;
                            return false;
                        }
                        
                        option1.innerHTML += `${item.value}/`;
                        modalOptionPrice.innerHTML = `${addOptionPrice}`;
                    }
                })

                const addBasketbutton = document.querySelector(".modal-addcart");

                    //추가버튼
                addBasketbutton.onclick = () => {
                    var modalPop = document.querySelector(".modal-wrap");
                    var modalBg = document.querySelector(".modal-bg");

                    modalPop.style.display = "none";
                    modalBg.style.display = "none";
                    
                    console.log(index);
    
                    let product = new Product(responseData[index].pdtId, responseData[index].productName, responseData[index].productPrice, responseData[index].mainImg);
    
                    let formData = new FormData(document.querySelector(".option-form"));
    
                    let selectList = [formData.get("coldhots"), formData.get("ices"), formData.get("sugars")]
                    
                    formData.forEach((value, key) => {
                        if(key == "topping"){
                            selectList.push(value);
                        }
                    });
                    
                    
                    console.log("selectList: " + selectList);
                    selectList.forEach(option => {
                        response.data.forEach(data => {
                            if(data.optionName == option){  
                                let productOption = new ProductOption(data.id, data.optionName, data.optionPrice);
                                product.productOptionList.push(productOption);
                                
                            }
                        })
                    })
                    Number(product.productPrice);
                    product.productPrice +=  addOptionPrice;
                    console.log(product);

                    Cart.getInstance().addProduct(product); 
                    Cart.getInstance().payButtonClick(product);
                }
            }
        })
        Cart.getInstance().clearlist();
        
    }

    moveSlide(num) {
        const slides = document.querySelector(".slides");
        slides.style.left = -num * 400 + 'px';
        this.currentIdx = num;
    }

    
                
    //     //order_mst에 넣기
    //     let today = new Date();
    //     let year = today.getFullYear();
    //     let month = today.getMonth();
    //     let date = today.getDate();
    //     let hours = today.getHours();
    //     let minutes = today.getMinutes();
    //     let seconds = today.getSeconds();

    //     let pdtStatus = 0;
    //     let orderTime = hours + ":" + minutes + ":" + seconds;
    //     let orderDate = year + "/" + month + "/" + date;

    //     console.log(orderTime);
    //     console.log(orderDate);

    //     const orderMst = new OrderMst(pdtStatus, orderTime, orderDate);

    //     const registerApi = new OrderApi();
    //         if(registerApi.createOrderRequest(orderMst.getObject())){
    //             alert("주문 담기 완료");
    //             // location.reload();
    //         }
        
    // }

    // saveOrder() {
    //     let today = new Date();
    //     let year = today.getFullYear();
    //     let month = today.getMonth();
    //     let date = today.getDate();
    //     let hours = today.getHours();
    //     let minutes = today.getMinutes();
    //     let seconds = today.getSeconds();

    //     let pdtStatus = 0;
    //     let orderTime = hours + ":" + minutes + ":" + seconds;
    //     let orderDate = year + "/" + month + "/" + date;

    //     console.log(orderTime);
    //     console.log(orderDate);

    //     const orderMst = new OrderMst(pdtStatus, orderTime, orderDate);

    //     const registerApi = new OrderApi();
    //         if(registerApi.createOrderRequest(orderMst.getObject())){
    //             alert("주문 담기 완료");
    //             // location.reload();
    //         }
    // }
   
}

function plus () {
    const count = document.querySelector(".count-zone");
    let countInnerHtml = document.querySelector(".count-zone").textContent;
    let countNum = Number(countInnerHtml);
    countNum += 1;
    count.innerHTML = `${countNum}`;
}

function minus () {
    const count = document.querySelector(".count-zone");
    let countInnerHtml = document.querySelector(".count-zone").textContent;
    let countNum = Number(countInnerHtml);

    countNum -= 1;
    count.innerHTML = `${countNum}`;
}


window.onload = () => {
    CollectionsService.getInstance().loadCollections();

}

