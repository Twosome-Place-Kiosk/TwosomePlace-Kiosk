class ProductMst {
    #category;
    #name;
    #price;
  

    constructor(category, name, price) {
        this.#category = category;
        this.#name = name;
        this.#price = price;
        

    }

    getCategory() {return this.#category;}
    setCategory(category) {this.#category = category;}

    getName() {return this.#name;}
    setName(name) {this.#name = name;}

    getPrice() {return this.#price;}
    setPrice(price) {this.#price = price;}

    getObject() {
        const obj = {
            category: this.#category,
            name: this.#name,
            price: this.#price

        }
        return obj;
    }
}

class CommonApi {
    getCategoryList() {
        let responseResult = null;

        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/product/category",
            dataType: "json",
            success: (response) => {4
                console.log(response.data);
                responseResult = response.data;
            },
            error: (error) => {
                console.log(error);
            }
        });

        return responseResult;
    }
}

class ProductApi {
    static #instance = null;

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new ProductApi();
        }
        return this.#instance;
    }

    createProductRequest(formData) {
        let responseData = null;

        $.ajax({
            async: false,
            type: "post",
            url: "/api/admin/product",
            enctype: "multipart/form-data",
            contentType: false,
            processData: false,
            data: formData,
            dataType: "json",
            success: (response) => {
                // responseData = response.data;
                console.log(response.data);
            },
            error: (error) => {
                console.log(error);

                let entries = formData.entries();
                for (const pair of entries) {
                    console.log(pair[0]+ ', ' + pair[1]); 
                }
            }
        })
        
    }

    getProductListRequest(listRequestParams) {
        let responseData = null;

        $.ajax({
            async: false,
            type: "get",
            url: "/api/admin/product",
            data: listRequestParams,
            dataType: "json",
            success: (response) => {
                responseData = response.data;
            },
            error: (error) => {
                console.log(error);
            }
        })

        return responseData;
    }
}

class RegisterEventService {
    #categorySelectObj;
    #nameInputObj;
    #priceInputObj;
    #registButtonObj;


    constructor() {
        this.#categorySelectObj = document.querySelector(".product-category");
        this.#nameInputObj = document.querySelector(".product-name");
        this.#priceInputObj = document.querySelector(".product-price");
        this.#registButtonObj = document.querySelector(".regist-button");
     
        this.init();

        this.addCategorySelectEvent();
        this.addNameInputEvent();
        this.addPriceInputEvent();
        this.addRegistButtonEvent();
    }

    init() {
        this.#nameInputObj.disabled = true;
        this.#priceInputObj.disabled = true;
        this.#registButtonObj.disabled = true;
    }

    addCategorySelectEvent() {
        this.#categorySelectObj.onchange = () => {
            if(this.#categorySelectObj.value != "none") {
                this.#nameInputObj.disabled = false;
            }else {
                this.#nameInputObj.disabled = true;
            }
        }
    }

    addNameInputEvent() {
        this.#nameInputObj.onkeyup = () => {
            if(this.#nameInputObj.value.length != 0) {
                this.#priceInputObj.disabled = false;
            }else {
                this.#priceInputObj.disabled = true;
            }
        }
    }

    addPriceInputEvent() {
        this.#priceInputObj.onkeyup =() => {
            if(this.#priceInputObj.value.length != 0 ){
                this.#registButtonObj.disabled = false;
            }else{
                this.#registButtonObj.disabled = true;
            }
         }
    
    }

    addRegistButtonEvent() {
        const filesInput = document.querySelector(".files-input");
        const imgAddButton = document.querySelector(".regist-button");

        const formData = new FormData();

        imgAddButton.onclick = () => {
            filesInput.click();
        }

        filesInput.onchange = () => {

            var fileList = filesInput.files;

            var reader = new FileReader();

            reader.readAsDataURL(fileList [0]);

            // reader.onload = function  () {
            //     imgContainer.src = reader.result ;
            // }; 
            formData.append("files", filesInput.files[0]);
        }

        this.#registButtonObj.onclick = () => {
            
            formData.append("category", this.#categorySelectObj.value);

            formData.append("name", this.#nameInputObj.value);

            formData.append("price", this.#priceInputObj.value);

            ProductApi.getInstance().createProductRequest(formData);
        }
    }
}

class RegisterService { 
    static #instance = null;

    static getInstance() {
        if(this.#instance == null) {
            this.#instance = new RegisterService();
        }
        return this.#instance;
    }

    constructor() {
        this.loadRegister();
    }

    loadRegister() {
        new RegisterEventService();
    }

    getCategoryList() {
        const commonApi = new CommonApi();
        const productCategoryList = commonApi.getCategoryList();

        const productCategory = document.querySelector(".product-category");
        productCategory.innerHTML = `<option value="none">상품 종류</option>`;

        productCategoryList.forEach(category => {
            productCategory.innerHTML += `
            <option value="${category.id}">${category.name}</option>
            `;
        })

    }

    
}

window.onload = () => {
    RegisterService.getInstance().getCategoryList();
    
}