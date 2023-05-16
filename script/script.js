new Swiper('.swiper', {
    //Стрелки
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    //Отключаем возможность перетаскивания слайда мышью
    simulateTouch: false,
    //Указываем количество отображаемых слайдов
    slidesPerView: 3,
    spaceBetween: 0,
    speed: 700,
});


// Скрытие и отображение блока поиска
const btnSearch = document.querySelector('.header_search_button');
let searchActive = document.querySelector('.header_search_container');
btnSearch.addEventListener(('click'), () =>{
    searchActive.classList.toggle('header_search_container--active')
});
//функция для скрытия блока при клике вне этого блока
document.addEventListener('click', (e) => {
    const click = e.composedPath().includes(searchActive);//проверяем был ли клик внутри нашего блока
    const clickBtn = e.composedPath().includes(btnSearch);//проверяем был ли клик внутри кнопки
    if (!click && !clickBtn){
        searchActive.classList.remove('header_search_container--active')
    }
});



// Аккордион на главной странице
const accordion = document.getElementsByClassName('container');

for(i = 0; i < accordion.length; i++){
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
};






















// const rangeInput = document.querySelectorAll(".range-input input"),
// priceInput = document.querySelectorAll(".price-input input"),
// range = document.querySelector(".slider .progress");
// let priceGap = 1000;

// priceInput.forEach(input =>{
//     input.addEventListener("input", e =>{
//         let minPrice = parseInt(priceInput[0].value),
//         maxPrice = parseInt(priceInput[1].value);
        
//         if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
//             if(e.target.className === "input-min"){
//                 rangeInput[0].value = minPrice;
//                 range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
//             }else{
//                 rangeInput[1].value = maxPrice;
//                 range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
//             }
//         }
//     });
// });

// rangeInput.forEach(input =>{
//     input.addEventListener("input", e =>{
//         let minVal = parseInt(rangeInput[0].value),
//         maxVal = parseInt(rangeInput[1].value);

//         if((maxVal - minVal) < priceGap){
//             if(e.target.className === "range-min"){
//                 rangeInput[0].value = maxVal - priceGap
//             }else{
//                 rangeInput[1].value = minVal + priceGap;
//             }
//         }else{
//             priceInput[0].value = minVal;
//             priceInput[1].value = maxVal;
//             range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
//             range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
//         }
//     });
// });
