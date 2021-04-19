const windowWidth = window.innerWidth;

if (windowWidth >= 1024) {
    const BOX_SIZE = 40;

    const countBox = Math.ceil((windowWidth / BOX_SIZE) * (window.innerHeight / BOX_SIZE)) + 100; 
    
    for (let i = 0; i <= countBox; i++) {
        const box = document.createElement('span');
        document.querySelector('.container').appendChild(box);
    }
}

const swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });