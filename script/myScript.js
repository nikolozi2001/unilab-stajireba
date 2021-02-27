const navSlide = () =>{
    const burger = document.querySelector('.burger-bar');
    const nav = document.querySelector('.navigation');
    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');
    });
}

navSlide();