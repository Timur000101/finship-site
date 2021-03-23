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

function dropDown(){
  if (window.innerWidth <= 540){  
    let el;
    if (event.srcElement.className == "h3" || event.srcElement.className == "arrow_down"){
      el = event.srcElement.parentElement
    }
    else{
      el = event.srcElement
    }
    
    if (el.querySelector('.arrow_down').style.display === "none"){
      el.querySelector('.arrow_down').style.display = "block"
      el.querySelector('.arrow_up').style.display = "none"
    }
    else{
      el.querySelector('.arrow_down').style.display = "none"
      el.querySelector('.arrow_up').style.display = "block"
    }
    let items = el.parentElement.querySelectorAll('.footer_main_row_item')
    console.log();
    if (window.getComputedStyle(items[0], null).getPropertyValue("display") === 'none'){
      items.forEach(element => {
        element.style.display = "block"
      });
    }else{
      items.forEach(element => {
        element.style.display = "none"
      });
    }
  }
}