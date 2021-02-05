$(document).ready(function(){

  $(document).on('click', '.portfolio__side li', function(e){
    e.preventDefault;
    $('.portfolio__dot-active').removeClass('portfolio__dot-active');
    $(this).addClass('portfolio__dot-active'); 
  });


    // $(document).on('click', '.list', function(e){
    //     e.preventDefault;
    //     $(this).toggleClass('list__active');
    // });

  $(document).on('click', '.header__button', function(e){
    e.preventDefault;
    $(this).toggleClass('header__button-active');
    $('.header__wrap').toggleClass('header__wrap-active');
    $('.display').toggleClass('display-active');
    $('.contacts').toggleClass('contacts-active');
  });

  ////gallerypopup

    /////portfolio

  $(document).on('click', '.gallery__grid-item a', function(e){
    e.preventDefault;
    $(this).toggleClass('gallery__img__active');
  });  
    

  $(document).on('click', '.gallery__grid-item', function(e){
    e.preventDefault;
    $(this).toggleClass('gallery__img__active');
    $('.gallery__grid-item').toggleClass('gallery__item__active');
    $('.gallery__blur').toggleClass('gallery__active');
    $('.entrails').toggleClass('entrails__active');
    $('.gallery__img').toggleClass('active__background');
    $('.portfolio').toggleClass('active__background2'); 
  });    

  
  $(document).on('click', '.entrails', function(e){
    e.preventDefault;
    $(this).removeClass('entrails__active');
    $('.gallery__grid-item a').removeClass('gallery__img__active');
    $('.gallery__active').removeClass('gallery__active');
    $('.gallery__grid-item').removeClass('gallery__item__active');
    $('.gallery__grid-item').removeClass('gallery__img__active');
    $('.gallery__img').removeClass('active__background');
    $('.portfolio').removeClass('active__background2');
  });  
})
