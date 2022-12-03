// class SlideShow {
//   // static #instance = null;

//   // static getInstance() {
//   //     if(this.#instance == null) {
//   //         this.#instance = new SlideShow();
//   //     }
//   //     return this.#instance;
//   // }
  

//   constructor(){
//     this.init();
    
//   }

//   init() {
//     const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
//     const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
    
//     let currentIdx = 0; //현재 슬라이드 index
    
//     const slideCount = slideImg.length % 5 == 0 ? slideImg.length / 5 : Math.floor(slideImg.length / 5) + 1; // 슬라이드 개수 12
//     const prev = document.querySelector('.moving-left'); //이전 버튼
//     const next = document.querySelector('.moving-right'); //다음 버튼
//     const slideWidth = 600; //한개의 슬라이드 넓이
//     const slideMargin = 5; //슬라이드간의 margin 값
    
//     //전체 슬라이드 컨테이너 넓이 설정
//     slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

//     prev.addEventListener('click', function () {
//       if (currentIdx !== 0) {
//         moveSlide(currentIdx - 1);
//       }
//       console.log(
//         `
//         slideCount: ${slideCount}
//         currentIdx: ${currentIdx}
//         `
        
//       );
//     });

//     next.addEventListener('click', function () {
//       if (currentIdx < slideCount) {
//         moveSlide(currentIdx + 1);
//       }
//       console.log(
//         `
//         slideCount: ${slideCount}
//         currentIdx: ${currentIdx}
//         `
//       );
//     });

//   }


//   moveSlide(num) {
//     const slides = document.querySelector('.slides');
    
//     slides.style.left = -num * 400 + 'px';
//     currentIdx = num;
//   }
  
// }


init();

function init() {
  const slides = document.querySelector('.slides'); //전체 슬라이드 컨테이너
  const slideImg = document.querySelectorAll('.slides li'); //모든 슬라이드들
  
  let currentIdx = 0; //현재 슬라이드 index
  
  const slideCount = slideImg.length % 5 == 0 ? slideImg.length / 5 : Math.floor(slideImg.length / 5) + 1; // 슬라이드 개수 12
  const prev = document.querySelector('.moving-left'); //이전 버튼
  const next = document.querySelector('.moving-right'); //다음 버튼
  const slideWidth = 600; //한개의 슬라이드 넓이
  const slideMargin = 5; //슬라이드간의 margin 값
  
  //전체 슬라이드 컨테이너 넓이 설정
  slides.style.width = (slideWidth + slideMargin) * slideCount + 'px';

  prev.addEventListener('click', function () {
    /*첫 번째 슬라이드로 표시 됐을때는 
    이전 버튼 눌러도 아무런 반응 없게 하기 위해 
    currentIdx !==0일때만 moveSlide 함수 불러옴 */
  
    if (currentIdx !== 0) {
      moveSlide(currentIdx - 1);
    }
    console.log(
      `
      slideCount: ${slideCount}
      currentIdx: ${currentIdx}
      `
      
      );
  });
  
  next.addEventListener('click', function () {
    /* 마지막 슬라이드로 표시 됐을때는 
    다음 버튼 눌러도 아무런 반응 없게 하기 위해
    currentIdx !==slideCount - 1 일때만 
    moveSlide 함수 불러옴 */
    if (currentIdx < slideCount) {
      moveSlide(currentIdx + 1);
    }
    console.log(
      `
      slideCount: ${slideCount}
      currentIdx: ${currentIdx}
      `
      
      );
  });
}

function moveSlide(num) {
  const slides = document.querySelector('.slides');

  slides.style.left = -num * 400 + 'px';
  currentIdx = num;
}

