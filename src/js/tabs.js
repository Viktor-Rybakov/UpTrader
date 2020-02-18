let link1 = document.querySelector('.js-menu__link_trade');
let link2 = document.querySelector('.js-menu__link_invest');
let link3 = document.querySelector('.js-menu__link_invite');
let secondSection = document.querySelector('.js-second-section');
let container1 = document.querySelector('.js-tabs__container_1');
let container2 = document.querySelector('.js-tabs__container_2');
let container3 = document.querySelector('.js-tabs__container_3');
let tabLink1 = document.querySelector('.js-tabs__link1');
let tabLink2 = document.querySelector('.js-tabs__link2');
let tabLink3 = document.querySelector('.js-tabs__link3');


link1.onclick = function() {
  event.preventDefault();

  secondSection.scrollIntoView({behavior: "smooth"});

  if ( container1.getAttribute('aria-expanded') == 'false') {
    container1.classList.add('tabs__container_active');
    container1.setAttribute('aria-expanded', true);
    tabLink1.classList.add('tabs__link_active');
    container2.classList.remove('tabs__container_active');
    container2.setAttribute('aria-expanded', false);
    tabLink2.classList.remove('tabs__link_active');
    container3.classList.remove('tabs__container_active');
    container3.setAttribute('aria-expanded', false);
    tabLink3.classList.remove('tabs__link_active');
  }
};

link2.onclick = function() {
  event.preventDefault();

  secondSection.scrollIntoView({behavior: "smooth"});

  if ( container2.getAttribute('aria-expanded') == 'false') {
    container2.classList.add('tabs__container_active');
    container2.setAttribute('aria-expanded', true);
    tabLink2.classList.add('tabs__link_active');
    container1.classList.remove('tabs__container_active');
    container1.setAttribute('aria-expanded', false);
    tabLink1.classList.remove('tabs__link_active');
    container3.classList.remove('tabs__container_active');
    container3.setAttribute('aria-expanded', false);
    tabLink3.classList.remove('tabs__link_active');
  }
};

link3.onclick = function() {
  event.preventDefault();
  console.log(container3.getAttribute('aria-expanded'));

  secondSection.scrollIntoView({behavior: "smooth"});

  if ( container3.getAttribute('aria-expanded') == 'false' ) {
    container3.classList.add('tabs__container_active');
    container3.setAttribute('aria-expanded', true);
    tabLink3.classList.add('tabs__link_active');
    container1.classList.remove('tabs__container_active');
    container1.setAttribute('aria-expanded', false);
    tabLink1.classList.remove('tabs__link_active');
    container2.classList.remove('tabs__container_active');
    container2.setAttribute('aria-expanded', false);
    tabLink2.classList.remove('tabs__link_active');
  }
};

tabLink1.onclick = function() {
  event.preventDefault();

  if ( container1.getAttribute('aria-expanded') == 'false' ) {
    container1.classList.add('tabs__container_active');
    container1.setAttribute('aria-expanded', true);
    tabLink1.classList.add('tabs__link_active');
    container2.classList.remove('tabs__container_active');
    container2.setAttribute('aria-expanded', false);
    tabLink2.classList.remove('tabs__link_active');
    container3.classList.remove('tabs__container_active');
    container3.setAttribute('aria-expanded', false);
    tabLink3.classList.remove('tabs__link_active');
  }
};

tabLink2.onclick = function() {
  event.preventDefault();

  if ( container2.getAttribute('aria-expanded') == 'false' ) {
    container2.classList.add('tabs__container_active');
    container2.setAttribute('aria-expanded', true);
    tabLink2.classList.add('tabs__link_active');
    container1.classList.remove('tabs__container_active');
    container1.setAttribute('aria-expanded', false);
    tabLink1.classList.remove('tabs__link_active');
    container3.classList.remove('tabs__container_active');
    container3.setAttribute('aria-expanded', false);
    tabLink3.classList.remove('tabs__link_active');
  }
};

tabLink3.onclick = function() {
  event.preventDefault();

  if ( container3.getAttribute('aria-expanded') == 'false' ) {
    container3.classList.add('tabs__container_active');
    container3.setAttribute('aria-expanded', true);
    tabLink3.classList.add('tabs__link_active');
    container1.classList.remove('tabs__container_active');
    container1.setAttribute('aria-expanded', false);
    tabLink1.classList.remove('tabs__link_active');
    container2.classList.remove('tabs__container_active');
    container2.setAttribute('aria-expanded', false);
    tabLink2.classList.remove('tabs__link_active');
  }
};