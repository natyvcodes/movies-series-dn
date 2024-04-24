(function(){
    const openButton = document.querySelector('.nav__menu_open');
    const menu = document.querySelector('.nav__list');
    const closeMenu = document.querySelector('.nav__close');
    const body = document.querySelector('body');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav__link--show');
        body.classList.add('body--overflow-hidden'); 
    });

    closeMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav__link--show');
        body.classList.remove('body--overflow-hidden');
    });
    


})();