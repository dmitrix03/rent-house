//Слайдер карточки товара на странице каталога
const slider = document.querySelector('.lider_line');
const sliderItems = Array.from(slider.children);
const btnNext = document.querySelector('.button_next');
const btnPrev = document.querySelector('.button_prev');


sliderItems.forEach(function(slide, index){

    //Скрываем все слайды, кроме первого
    if(index !== 0){
        slide.classList.add('hidden');
    }

    //Добавляем индексы
    slide.dataset.index = index;

    //Добавляем data атрибут active для первого / активного слайда
    sliderItems[0].setAttribute('data-active', '');

    //Клик по слайдам
    slide.addEventListener('click', function(){
        //Вызываем функцию
       showNextSlide('next');
    });
});

//Кнопка вперед
btnNext.onclick = function(){
    //Вызываем функцию
    showNextSlide('next');
};


//Кнопка назад
btnPrev.onclick = function(){
    //вызываем функцию
    showNextSlide('prev');
};

function  showNextSlide(direction){
    //Скрываем текущий слайд
    const currentSlide = slider.querySelector('[data-active]');
    //получаем индекс текущего слайда
    const currentSlideIndex = +currentSlide.dataset.index;
    //скрываем текущий слайд
    currentSlide.classList.add('hidden');
    currentSlide.removeAttribute('data-active');

    //Расчитываем следующий индекс в зависимости от напрвления движения
    let nextSlideIndex;
    if(direction === 'next'){
        //Показываем следующий слайд
        nextSlideIndex  = currentSlideIndex + 1 === sliderItems.length ? 0 : currentSlideIndex + 1;
    }else if(direction === 'prev'){
        nextSlideIndex  = currentSlideIndex  === 0 ? sliderItems.length - 1 : currentSlideIndex - 1;
    };
    //Показываем следующий слайд
    const nextSlide = slider.querySelector(`[data-index="${nextSlideIndex}"]`);
    nextSlide.classList.remove('hidden');
    nextSlide.setAttribute('data-active', '');
};
