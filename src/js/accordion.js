let visuallyHidden = document.querySelector('.js-visually-hidden');
let tabsContent1 = document.querySelector('.js-tabs__content1');
let tabsContent2 = document.querySelector('.js-tabs__content2');
let tabsContent3 = document.querySelector('.js-tabs__content3');
let accordionTab1 = document.querySelector('.js-tabs__accordion_tab1');
let accordionTab2 = document.querySelector('.js-tabs__accordion_tab2');
let accordionTab3 = document.querySelector('.js-tabs__accordion_tab3');

if ( document.documentElement.clientWidth <= 768 ) {
  visuallyHidden.classList.remove('visually-hidden');
  container1.classList.remove('tabs__container_active');
  container1.setAttribute('aria-expanded', true);
  container2.classList.remove('tabs__container_active');
  container2.setAttribute('aria-expanded', true);
  container3.classList.remove('tabs__container_active');
  container3.setAttribute('aria-expanded', true);
}

window.addEventListener('resize', function(event) {
  if ( document.documentElement.clientWidth > 768 ) {
    visuallyHidden.classList.add('visually-hidden');
    container1.classList.add('tabs__container_active');
    container1.setAttribute('aria-expanded', true);
    tabsContent1.setAttribute('aria-expanded', true);
    container2.classList.remove('tabs__container_active');
    container2.setAttribute('aria-expanded', false);
    tabsContent2.setAttribute('aria-expanded', false);
    container3.classList.remove('tabs__container_active');
    container3.setAttribute('aria-expanded', false);
    tabsContent3.setAttribute('aria-expanded', false);
  } else if ( document.documentElement.clientWidth <= 768 ) {
    visuallyHidden.classList.remove('visually-hidden');
    container1.classList.remove('tabs__container_active');
    container1.setAttribute('aria-expanded', true);
    tabsContent1.setAttribute('aria-expanded', false);
    container2.classList.remove('tabs__container_active');
    container2.setAttribute('aria-expanded', true);
    tabsContent2.setAttribute('aria-expanded', false);
    container3.classList.remove('tabs__container_active');
    container3.setAttribute('aria-expanded', true);
    tabsContent3.setAttribute('aria-expanded', false);
  }
});

accordionTab1.onclick = function() {
  accordionTab1.classList.toggle('tabs__accordion_active');
  tabsContent1.classList.toggle('tabs__content_active');
  container1.classList.toggle('tabs__container_active');

  if ( tabsContent1.getAttribute('aria-expanded') == 'false') {
    tabsContent1.setAttribute('aria-expanded', true);
    secondSection.classList.add('second-section_bg-off');
  } else if ( tabsContent1.getAttribute('aria-expanded') == 'true' ) {
    tabsContent1.setAttribute('aria-expanded', false);
    secondSection.classList.remove('second-section_bg-off');
  }

  accordionTab2.classList.remove('tabs__accordion_active');
  tabsContent2.classList.remove('tabs__content_active');
  tabsContent2.setAttribute('aria-expanded', false);
  container2.classList.remove('tabs__container_active');

  accordionTab3.classList.remove('tabs__accordion_active');
  tabsContent3.classList.remove('tabs__content_active');
  tabsContent3.setAttribute('aria-expanded', false);
  container3.classList.remove('tabs__container_active');

}

accordionTab2.onclick = function() {
  accordionTab2.classList.toggle('tabs__accordion_active');
  tabsContent2.classList.toggle('tabs__content_active');
  container2.classList.toggle('tabs__container_active');

  if ( tabsContent2.getAttribute('aria-expanded') == 'false') {
    tabsContent2.setAttribute('aria-expanded', true);
    secondSection.classList.add('second-section_bg-off');
  } else if ( tabsContent2.getAttribute('aria-expanded') == 'true' ) {
    tabsContent2.setAttribute('aria-expanded', false);
    secondSection.classList.remove('second-section_bg-off');
  }

  accordionTab1.classList.remove('tabs__accordion_active');
  tabsContent1.classList.remove('tabs__content_active');
  tabsContent1.setAttribute('aria-expanded', false);
  container1.classList.remove('tabs__container_active');

  accordionTab3.classList.remove('tabs__accordion_active');
  tabsContent3.classList.remove('tabs__content_active');
  tabsContent3.setAttribute('aria-expanded', false);
  container3.classList.remove('tabs__container_active');
}

accordionTab3.onclick = function() {
  accordionTab3.classList.toggle('tabs__accordion_active');
  tabsContent3.classList.toggle('tabs__content_active');
  container3.classList.toggle('tabs__container_active');

  if ( tabsContent3.getAttribute('aria-expanded') == 'false') {
    tabsContent3.setAttribute('aria-expanded', true);
    secondSection.classList.add('second-section_bg-off');
  } else if ( tabsContent3.getAttribute('aria-expanded') == 'true' ) {
    tabsContent3.setAttribute('aria-expanded', false);
    secondSection.classList.remove('second-section_bg-off');
  }

  accordionTab1.classList.remove('tabs__accordion_active');
  tabsContent1.classList.remove('tabs__content_active');
  tabsContent1.setAttribute('aria-expanded', false);
  container1.classList.remove('tabs__container_active');

  accordionTab2.classList.remove('tabs__accordion_active');
  tabsContent2.classList.remove('tabs__content_active');
  tabsContent2.setAttribute('aria-expanded', false);
  container2.classList.remove('tabs__container_active');
}