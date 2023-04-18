
// --- header
// burger
const burger = document.querySelector('.burger');
const menuPage = document.querySelector('.header__page-nav');
const menuTopic = document.querySelector('.header__topic-nav');
const menuPageLinks = menuPage.querySelectorAll('.page-nav__link');
const menuTopicLinks = menuTopic.querySelectorAll('.page-nav__link');

burger.addEventListener('click', () => {

  burger.classList.toggle('burger--active');
  menuPage.classList.toggle('header__page-nav--active');
  if (window.innerWidth <= 576) {
    menuTopic.classList.toggle('header__topic-nav--active');
  }
  document.body.classList.toggle('stop-scroll');

});

const allMenu = [menuPage, menuTopic];

allMenu.forEach((elem) => {
  elem.addEventListener('click', () => {

    burger.classList.remove('burger--active');
    menuPage.classList.remove('header__page-nav--active');
    menuTopic.classList.remove('header__topic-nav--active');
    document.body.classList.remove('stop-scroll');

  });
});


// search
const searchBtn = document.querySelector('.header__search-btn');
const searchForm = document.querySelector('.header__search-form');

searchBtn.addEventListener('click', (e) => {
  e.preventDefault();
  searchForm.classList.toggle('header__search-form--active');
});

searchForm.addEventListener('focusout', () => {
  searchForm.classList.remove('header__search-form--active');
});


// on-air-play-pause
const onAirBtns = Array.from(document.querySelectorAll('.header__on-air-btn'));

onAirBtns.forEach((onAirBtn) => {
  const onAirPlay = onAirBtn.querySelector('.header__on-air-play');
  const onAirPause = onAirBtn.querySelector('.header__on-air-pause');

  onAirBtn.addEventListener('click', function () {
    if (onAirPlay.style.display != 'none') {
      onAirPlay.style.display = 'none';
      onAirPause.style.display = 'initial';
    } else {
      onAirPlay.style.display = 'initial';
      onAirPause.style.display = 'none';
    }
  })
  onAirBtn.addEventListener('focusout', function () {
    if (onAirPlay.style.display = 'none') {
      onAirPlay.style.display = 'initial';
      onAirPause.style.display = 'none';
    }
  })
});

// on-air-open
const onAirOpenBtn = document.querySelector('.header__on-air-open-btn');
const onAirWrap = document.querySelector('.header__on-air-wrapper');

onAirOpenBtn.addEventListener('click', () => {
  onAirWrap.classList.toggle('header__on-air-wrapper--active');
  onAirOpenBtn.classList.toggle('header__on-air-open-btn--active');
});




// header-modal-login
const loginBtn = document.querySelector('.header__login-btn');
const modalLogin = document.querySelector('.header__modal');
const modalWrap = modalLogin.querySelector('.modal__wrapper');
const modalCloseBtn = modalLogin.querySelector('.modal__close-btn');

loginBtn.addEventListener('click', () => {
  modalLogin.classList.toggle('header__modal--active');
  document.body.classList.toggle('stop-scroll');
});

modalCloseBtn.addEventListener('click', () => {
  modalLogin.classList.remove('header__modal--active');
  document.body.classList.remove('stop-scroll');
});

modalLogin.addEventListener('click', (e) => {
  if (e.target === modalLogin) {
    modalLogin.classList.remove('header__modal--active');
    document.body.classList.remove('stop-scroll');
  }
});


// --- podcast
// podkast-play-pause
const podcastBtns = Array.from(document.querySelectorAll('.podcast__item'));

podcastBtns.forEach((podcastBtn) => {
  const podcastPlay = podcastBtn.querySelector('.podcast__play-svg');
  const podcastPause = podcastBtn.querySelector('.podcast__pause-svg');

  podcastBtn.addEventListener('click', () => {
    if (podcastPlay.style.display != 'none') {
      podcastPlay.style.display = 'none';
      podcastPause.style.display = 'initial';
    } else {
      podcastPlay.style.display = 'initial';
      podcastPause.style.display = 'none';
    }
  })
  podcastBtn.addEventListener('focusout', () => {
    if (podcastPlay.style.display = 'none') {
      podcastPlay.style.display = 'initial';
      podcastPause.style.display = 'none';
    }
  })
});

// item-hidden
const btnMore = document.querySelector('.podcast__btn-more');
const podcastItems = document.querySelectorAll('.podcast__item');

btnMore.addEventListener('click', () => {
  podcastItems.forEach(elem => { elem.classList.add('podcast__item--visible') });
  btnMore.classList.add('podcast__btn-more--hidden');
});


// --- broadcast
// select
const element = document.querySelector('.select');
const choices = new Choices(element, {
  itemSelectText: '',
  placeholder: true,
  searchEnabled: false,
  allowHTML: false,
});


// --- guest
// accordion
new Accordion('.accordion-container', {
  duration: 150,
  onOpen: function (currentElement) {
    currentElement.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }
});


// tabs
const bloggerBtn = document.querySelectorAll('.blogger');
const guestCard = document.querySelectorAll('.guest__card');
const guestCardsWrap = document.querySelector('.guest__cards-wrapper');

bloggerBtn.forEach((elem) => {
  elem.addEventListener('click', function (el) {
    const dPath = el.currentTarget.dataset.path;

    guestCard.forEach((e) => {
      e.classList.remove('guest__card--active')
    });
    document.querySelector(`[data-target="${dPath}"]`).classList.add('guest__card--active');
    guestCardsWrap.style.background = 'none';
  });
});


// --- playlist
// radio-btn
const radioBtns = Array.from(document.querySelectorAll('.playlist__radio-label'));

radioBtns.forEach((radioBtn) => {
  radioBtn.addEventListener('keypress', (event) => {
    event.preventDefault();
    if (event.key === 'Enter') {
      radioBtn.querySelector('.playlist__radio-input').click();
    }
  })
});


// --- about
// slider
const swiper = new Swiper('.about__swiper-container', {
  slidesPerView: 4,
  spaceBetween: 30,

  breakpoints: {
    290: {
      slidesPerView: 2,
      spaceBetween: 20,
    },

    576: {
      slidesPerView: 2,
      spaceBetween: 28,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 30,
    }
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

const swiperPrev = document.getElementById('swiperPrev')
const swiperNext = document.getElementById('swiperNext')

swiperPrev.addEventListener('click', () => {
  swiper.slidePrev();
});

swiperNext.addEventListener('click', () => {
  swiper.slideNext();
});


// form
new JustValidate('.js-form', {

  colorWrong: '#D52B1E',

  rules: {

    text: {
    },

    name: {
      required: true,
      minLength: 2,
      strength: {
        custom: '^[A-Za-z0-9]+$'
      },
    },

    email: {
      required: true,
      email: true
    },
  },

  messages: {
    name: {
      required: "Вы не ввели имя",
      minLength: "Слишком короткое имя",
      strength: "Ошибка",

    },

    email: {
      required: "Вы не ввели e-mail",
      email: "Это не похоже на e-mail",
    },
  }
});

const formCheck = document.querySelector('.form__checkbox');

formCheck.addEventListener('keypress', (event) => {
  event.preventDefault();
  if (event.key === 'Enter') {
    formCheck.click();
  }
});


