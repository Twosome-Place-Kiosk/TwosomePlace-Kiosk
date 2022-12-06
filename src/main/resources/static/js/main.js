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
    optionCategoryId = null;
    optionName = null;
    optionPrice = null;
    optionOriginName = null;
  
    constructor(optionId, optionCategoryId, optionName, optionPrice, optionOriginName) {
      this.optionId = optionId;
      this.optioptionCategoryIdonId = optionCategoryId;
      this.optionName = optionName;
      this.optionPrice = optionPrice;
      this.optionImg = optionImg;
      this.optionOriginName = optionOriginName;
    }
}

class Product {
    productId = null;
    categoryId = null;
    productName = null;
    productPrice = null;
    productOptionList = null;
    stockValue = null;
    mainImg = null;
    
    constructor(productId, categoryId, productName, productPrice, mainImg) {
        this.productId = productId;
        this.categoryId = categoryId;
        this.productName = productName;
        this.productPrice = productPrice;
        this.mainImg = mainImg;
        this.stockValue = 1;
        this.productOptionList = new Array();
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
        let responseData = null;

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

        // return responseData;

    }
}

class OrderApi {
    createOrderRequest(orderMst) {
        let responseData = null;

        $.ajax({
            async: false,
            type: "post",
            url: "/api/order",
            contentType: "application/json",
            data: JSON.stringify(orderMst),
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

class OrderMst {
    #pdtStatus;
    #orderTime;
    #orderDate;
   
    constructor(pdtStatus, orderTime, orderDate) {
        this.#pdtStatus = pdtStatus;
        this.#orderTime = orderTime;
        this.#orderDate = orderDate; 
        
    }

    getPdtStatus(){return this.#pdtStatus;}
    setPdtStatus(pdtStatus) {this.#pdtStatus = pdtStatus;}

    getOrderTime(){return this.#orderTime;}
    setOrderTime(orderTime) {this.#orderTime = orderTime;}

    getOrderDate(){return this.#orderDate;}
    setOrderDate(orderDate) {this.#orderDate = orderDate;}

    getObject() {
        const obj = {
            pdtStatus : this.#pdtStatus,
            orderTime : this.#orderTime,   
            orderDate : this.#orderDate  
            
        }
        return obj;
    }
    
}

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

        collectionOptions.innerHTML = ``;
        coldHotBox.innerHTML = ``;
        iceBox.innerHTML = ``;
        sugarBox.innerHTML = ``;
        slides.innerHTML = ``;

        products.forEach((product, index) => {
            product.onclick = () => {
                cart['pdtId'] = responseData[index].pdtId;

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
                console.log(index);
                coldHotBox.innerHTML = `
                    <input type="radio" id="coldhot" name="coldhots" value="${response.data[0].optionName}">
                    <label for="coldhot">
                        <span class="cup in-cold">
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[0].optionOriginName}">${response.data[0].optionName}
                        </span>
                    </label>
                    <input type="radio" id="coldhot" name="coldhots" value="${response.data[1].optionName}">
                    <label for="coldhot">
                        <span class="cup in-cold">
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[1].optionOriginName}">${response.data[1].optionName}
                        </span>
                    </label>
                    <input type="radio" id="coldhot" name="coldhots" value="${response.data[2].optionName}">
                    <label for="coldhot">
                        <span class="cup in-cold">
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[2].optionOriginName}">${response.data[2].optionName}
                        </span>
                    </label>
                    <input type="radio" id="coldhot" name="coldhots" value="${response.data[3].optionName}">
                    <label for="coldhot">
                        <span class="cup in-cold">
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[3].optionOriginName}">${response.data[3].optionName}
                        </span>
                    </label>
                `;
                iceBox.innerHTML = `
                    <input type="radio" id="ice" name="ices" value="${response.data[4].optionName}">
                    <label for="ice">
                        <span class="ice less-ice">
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[4].optionOriginName}">${response.data[4].optionName}
                        </span>
                    </label>
                    <input type="radio" id="ice" name="ices" value="${response.data[5].optionName}">
                    <label for="ice">
                        <span class="ice less-ice">
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[5].optionOriginName}">${response.data[5].optionName}
                        </span>
                    </label>
                    <input type="radio" id="ice" name="ices" value="${response.data[6].optionName}">
                    <label for="ice">
                        <span class="ice less-ice">
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[6].optionOriginName}">${response.data[6].optionName}
                        </span>
                    </label>
                `;
                sugarBox.innerHTML = `
                    <input type="radio" id="sugar" name="sugars" value="${response.data[7].optionName}">
                    <label for="sugar">
                        <span class="sugar sugar-0" >
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[7].optionOriginName}">${response.data[7].optionName}
                        </span>
                    </label>
                    <input type="radio" id="sugar" name="sugars" value="${response.data[8].optionName}">
                    <label for="sugar">
                        <span class="sugar sugar-0" >
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[8].optionOriginName}">${response.data[8].optionName}
                        </span>
                    </label>
                    <input type="radio" id="sugar" name="sugars" value="${response.data[9].optionName}">
                    <label for="sugar">
                        <span class="sugar sugar-0" >
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[9].optionOriginName}">${response.data[9].optionName}
                        </span>
                    </label>
                    <input type="radio" id="sugar" name="sugars" value="${response.data[10].optionName}">
                    <label for="sugar">
                        <span class="sugar sugar-0" >
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[10].optionOriginName}">${response.data[10].optionName}
                        </span>
                    </label>
                    <input type="radio" id="sugar" name="sugars" value="${response.data[11].optionName}">
                    <label for="sugar">
                        <span class="sugar sugar-0" >
                            <img class="option-img" src="/static/images/공차옵션사진/${response.data[11].optionOriginName}">${response.data[11].optionName}
                        </span>
                    </label>
                `;
                slides.innerHTML = `
                    <li>
                        <input type="checkbox" id="topping" name="topping" onclick="countCheck(this);">
                        <label for="topping">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[12].optionOriginName}">${response.data[12].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping" name="topping" onclick="countCheck(this);">
                        <label for="topping">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[13].optionOriginName}">${response.data[13].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping" name="topping" onclick="countCheck(this);">
                        <label for="topping">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[14].optionOriginName}">${response.data[14].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping" name="topping" onclick="countCheck(this);">
                        <label for="topping">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[15].optionOriginName}">${response.data[15].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping" name="topping" onclick="countCheck(this);">
                        <label for="topping">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[16].optionOriginName}">${response.data[16].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping" name="topping" onclick="countCheck(this);">
                        <label for="topping">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[17].optionOriginName}">${response.data[17].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping" name="topping" onclick="countCheck(this);">
                        <label for="topping">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[18].optionOriginName}">${response.data[18].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping" name="topping" onclick="countCheck(this);">
                        <label for="topping">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[19].optionOriginName}">${response.data[19].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping" name="topping" onclick="countCheck(this);">
                        <label for="topping">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[20].optionOriginName}">${response.data[20].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping" name="topping" onclick="countCheck(this);">
                        <label for="topping">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[21].optionOriginName}">${response.data[21].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping" name="topping" onclick="countCheck(this);">
                        <label for="topping">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[22].optionOriginName}">${response.data[22].optionName}
                            </span>
                        </label>
                    </li>
                    <li>
                        <input type="checkbox" id="topping" name="topping" onclick="countCheck(this);">
                        <label for="topping">
                            <span class="topping topping-">
                                <img class="option-img" src="/static/images/공차옵션사진/${response.data[23].optionOriginName}">${response.data[23].optionName}
                            </span>
                        </label>
                    </li>
                `;

                const slideImg = document.querySelectorAll('.slides li');
                let currentIdx = 0;
                const slideCount = slideImg.length % 5 == 0 ? slideImg.length / 5 : Math.floor(slideImg.length / 5) + 1;
                const prev = document.querySelector('.moving-left');
                const next = document.querySelector('.moving-right');
                const slideWidth = 600; //한개의 슬라이드 넓이
                const slideMargin = 5;

                slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

                prev.onclick = () => {
                    if (currentIdx !== 0) {
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

                this.optionClick(responseData);
                    }
                })
        
                
                // const addBasketbutton = document.querySelector(".modal-addcart");
                // const addBasketProduct = document.querySelector(".basket-product-list");
                
                // addBasketbutton.onclick = () => {
                //     console.log(index);

                //     addBasketProduct.innerHTML +=`
                //     <div class="basket-product">
                //     <img class="cart-image" src="/static/images/product/${responseData[index].mainImg}">
                //     <div class="countbtn-box">
                //     <div class="countbtn plus-btn" onclick="plus()"><i class="plus-btn fa-solid fa-circle-plus"></i></div>
                //     <div class="countbtn count-zone">1</div>
                //     <div class="countbtn minus-btn" onclick="minus()"><i class="minus-btn fa-solid fa-circle-minus"></i></div>
                //     </div>
                //     `;
                //     popClose();

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

    }
    moveSlide(num){
        const slides = document.querySelector(".slides");
        slides.style.left = -num * 400 + 'px';
        this.currentIdx = num;
    }
    

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

    getOptions() {
       
        // responseData.forEach((product, i) => {
        //     if(i < 4){
        //         coldHotBox.innerHTML += `
        //             <input type="radio" id="coldhot${i}" name="coldhots" value="${product.optionName}">
        //             <label for="coldhot${i}">
        //                 <span class="cup in-cold">
        //                     <img class="option-img" src="/static/images/공차옵션사진/${product.optionOriginName}">${product.optionName}
        //                 </span>
        //             </label>
        //         `;
        //     } 
        //     else if(i>=4 && i<7){
        //         iceBox.innerHTML += `
        //             <input type="radio" id="ice${i-4}" name="ices" value="${product.optionName}">
        //             <label for="ice${i-4}">
        //                 <span class="ice less-ice">
        //                     <img class="option-img" src="/static/images/공차옵션사진/${product.optionOriginName}">${product.optionName}
        //                 </span>
        //             </label>
        //         `;
        //     }
        //     else if(i>=7 && i<12){
        //         sugarBox.innerHTML += `
        //             <input type="radio" id="sugar${i-7}" name="sugars" value="${product.optionName}">
        //             <label for="sugar${i-7}">
        //                 <span class="sugar sugar-0" >
        //                     <img class="option-img" src="/static/images/공차옵션사진/${product.optionOriginName}">${product.optionName}
        //                 </span>
        //             </label>
        //         `;
        //     }
        //     else {
        //         slides.innerHTML += `
        //             <li>
        //                 <input type="checkbox" id="topping${i-12}" name="topping" onclick="countCheck(this);">
        //                 <label for="topping${i-12}">
        //                     <span class="topping topping-">
        //                         <img class="option-img" src="/static/images/공차옵션사진/${product.optionOriginName}">${product.optionName}
        //                     </span>
        //                 </label>
        //             </li>
        //         `;
        //     }
        // });

        
    }

   

    // 배열로 수정해야됨
    optionClick(responseData) {
        console.log(responseData);

        const radioOptions = document.querySelectorAll(".optionbox input[type=radio]");
        const checkboxOptions = document.querySelectorAll(".optionbox input[type=checkbox]");
        const option1 = document.querySelector(".option1");
        const option2 = document.querySelector(".option2");
        const option3 = document.querySelector(".option3");
        const option4 = document.querySelector(".option4");
        const option5 = document.querySelector(".option5");
        const option6 = document.querySelector(".option6");

        for(let i=0; i<radioOptions.length; i++){
            radioOptions[i].addEventListener('click', function(){
                if( i>=0 && i<4 ){
                    option1.innerHTML = `
                        ${responseData[i].optionName}/
                    `;
                }
                else if( i>=4 && i<7 ){
                    option2.innerHTML = `
                        ${responseData[i].optionName}/
                    `;
                }
                else if( i>=7 && i<12 ){
                    option3.innerHTML = `
                        ${responseData[i].optionName}/
                    `;
                }
                
            })
        }
        for (let i=0; i<checkboxOptions.length; i++) {
            checkboxOptions[i].addEventListener('click', function(){
                if(option4.innerHTML.length == 0){
                    option4.innerHTML = `
                        ${responseData[i+12].optionName}/
                    `;
                }
                else if(option4.innerHTML.length > 0 && option5.innerHTML.length == 0){
                    option5.innerHTML = `
                        ${responseData[i+12].optionName}/
                    `;
                }
                else if(option4.innerHTML.length > 0 && option5.innerHTML.length > 0) {
                    option6.innerHTML = `
                        ${responseData[i+12].optionName}
                    `;
                }
            })
        }
    }
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

//////////////////////////////////////////////////////////////////////////////







window.onload = () => {
    CollectionsService.getInstance().loadCollections();
}

