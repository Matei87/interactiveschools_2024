import { heroCollection } from './heroCollection.js';
import { carouselCollection } from './carouselCollection.js';
import { rotatorCollection } from './rotatorCollection.js';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* SCROLL TRIGGER ANIMATION */
const sections = gsap.utils.toArray('#hero .container');
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'ease-in',
  scrollTrigger: {
    trigger: '#hero',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
  },
});

const filteredHeroCollection = heroCollection.filter(
  (data) => data.title.length > 0
);

const randomHeroCollection = [];
for (let i = 0; i < 3; i++) {
  randomHeroCollection.push(
    filteredHeroCollection.splice(
      Math.floor(Math.random() * filteredHeroCollection.length),
      1
    )
  );
}

// REDIRECT ON CLICK SVG TO #CAROUSEL || #HERO and toggle active class on ROTATOR
window.onload = () => {
  document.getElementById('svg-hero').addEventListener('click', () => {
    document.getElementById('carousel').scrollIntoView();
  });

  document.getElementById('svg-footer').addEventListener('click', () => {
    document.getElementById('hero').scrollIntoView();
  });

  const links = document.querySelectorAll('.right-inner a');
  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      links.forEach((link) => {
        link.classList.remove('active');
      });
      const filterLinksElement = [...links].filter(
        (element) => element.href === e.target.href
      );
      filterLinksElement.forEach((link) => {
        link.classList.add('active');
      });
    });
  });
};

// ADD TITLE/DESCRIPTION DATA TO #HERO
function addContainer() {
  const title = document.getElementsByClassName('title');
  const description = document.getElementsByClassName('description');
  let element = randomHeroCollection.flat();
  for (let i = 0; i < element.length; i++) {
    title[i].innerHTML += element[i].title;
    description[i].innerHTML += element[i].description;
  }
}
addContainer();

//ADD DATA TO #CAROUSEL
function addCarouselData() {
  const carouselContainer = document.getElementById('carousel');
  for (let i = 0; i < carouselCollection.length; i++) {
    carouselContainer.innerHTML += `
        <div class="carousel-container">
          <img data-src=${
            carouselCollection[i].image
          } class="lazyload" alt="carousel-image" />
          <div class="carousel-details">
            <span class="product">Product ${i + 1}</span>
            <a href=${carouselCollection[i].link} target="_blank">
              <svg
                id='svg-rotator'
                xmlns='http://www.w3.org/2000/svg'
                width='54.618'
                height='10.097'
                viewBox='0 0 54.618 10.097'
              >
                <g transform='translate(54 9.743) rotate(180)'>
                  <path
                    data-name='Path 11827'
                    d='M0,0,4.695,4.695,9.39,0'
                    transform='translate(4.784) rotate(90)'
                    fill='none'
                    stroke='#fff'
                    stroke-width='2'
                  />
                  <line
                    data-name='Line 89'
                    x1='54'
                    transform='translate(0 4.695)'
                    fill='none'
                    stroke='#fff'
                    stroke-width='2'
                  />
                </g>
              </svg>
            </a>
          </div>
          <span class="title">${carouselCollection[i].description}</span>
        </div>
        `;
  }
}
addCarouselData();

//ADD DATA TO #ROTATOR
function getRotatorData() {
  const numbers = ['first', 'second', 'third', 'forth'];
  const rotatorContainer = document.getElementById('rotator');

  for (let i = 0; i < rotatorCollection.length; i++) {
    rotatorContainer.innerHTML += `
     <div class="container ${numbers[i] + '-rotator'}" id=${
      numbers[i] + '-rotator'
    }>
        <div class="left-content">
          <div class="left-inner">
            <span>${rotatorCollection[i].description}</span>
            <p>
                <span>${i + 1}</span>
                <span>/</span>
                <span>${rotatorCollection.length}</span>
            </p>
          </div>
          <div class="right-inner">
            <a class="active" href="#first-rotator"></a>
            <a href="#second-rotator"></a>
            <a href="#third-rotator"></a>
            <a href="#forth-rotator"></a>
          </div>
        </div>
        <div class="right-content">
            <img
                data-sizes="auto"
                data-src=${rotatorCollection[i].image}
                class="lazyload rotator-bg-image"
                alt="rotator-image"
             />
          <div>
           <span>${rotatorCollection[i].title}</span>
           <a
              href="${rotatorCollection[i].link}"
              target="_blank"
            >
            <svg
                id='svg-rotator'
                xmlns='http://www.w3.org/2000/svg'
                width='54.618'
                height='10.097'
                viewBox='0 0 54.618 10.097'
              >
                <g transform='translate(54 9.743) rotate(180)'>
                  <path
                    data-name='Path 11827'
                    d='M0,0,4.695,4.695,9.39,0'
                    transform='translate(4.784) rotate(90)'
                    fill='none'
                    stroke='#fff'
                    stroke-width='2'
                  />
                  <line
                    data-name='Line 89'
                    x1='54'
                    transform='translate(0 4.695)'
                    fill='none'
                    stroke='#fff'
                    stroke-width='2'
                  />
                </g>
              </svg>
              </a>
          </div>
        </div>
      </div>
`;
  }
}
getRotatorData();
