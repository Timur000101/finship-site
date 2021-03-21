document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    
    // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  });

  // !HEADER SCRIPTS
  var closestItemByClass = function(item, className) {
    var node = item;

    while(node) {
      if (node.classList.contains(className)) {
        return node;
      }
      node = node.parentElement;
    }
    return null;
  };

  const body = document.querySelector('body');
  const burgerBtn = document.querySelector('.btn-menu');
  const headerMenu = document.querySelector('.header-page__nav'); 

  burgerBtn.addEventListener('click', function(e) {
    let target = e.target;
    e.preventDefault();

    headerMenu.classList.toggle('open');
    body.classList.toggle('scroll')
  });

})
