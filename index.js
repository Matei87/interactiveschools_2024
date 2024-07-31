import { heroCollection } from './heroCollection.js';
import { carouselCollection } from './carouselCollection.js';
import { rotatorCollection } from './rotatorCollection.js';

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

/* SCROLL TRIGGER */
const sections = gsap.utils.toArray('#hero .container');
gsap.to(sections, {
  xPercent: -100 * (sections.length - 1),
  ease: 'ease-in',
  scrollTrigger: {
    trigger: '#hero',
    pin: true,
    scrub: 1,
    snap: 1 / (sections.length - 1),
    // base vertical scrolling on how wide the container is so it feels more natural.
    //end: '+=3500',
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

function addContainer() {
  const title = document.getElementsByClassName(' title');
  const description = document.getElementsByClassName('description');
  let element = randomHeroCollection.flat();
  for (let i = 0; i < element.length; i++) {
    title[i].innerHTML += element[i].title;
    description[i].innerHTML += element[i].description;
  }
}
addContainer();

// REDIRECT ON CLICK SVG TO #CAROUSEL
window.onload = () => {
  document.getElementById('svg').addEventListener('click', () => {
    document.getElementById('carousel').scrollIntoView();
  });

  function getAnimeData() {
    const carouselContainer = document.getElementById('carousel');
    for (let i = 0; i < carouselCollection.length; i++) {
      carouselContainer.innerHTML += `
        <div class="carousel-container">
          <img src=${carouselCollection[i].image} alt="carousel-image" />
          <span class="product">Product ${i + 1}</span>
            <a class="title" href=${carouselCollection[i].link}>${
        carouselCollection[i].description
      }</a>
        </div>
        `;
    }
  }
  getAnimeData();
};

// function getRotatorData() {
//   console.log(rotatorCollection);
//   const rotatorContainer = document.getElementById('rotator');
//   for (let i = 0; i < rotatorCollection.length; i++) {
//     rotatorContainer.innerHTML += `
// <div class="rotator-container">
//   <img src=${rotatorCollection[i].image} alt="rotator-image" />
//   <span>${rotatorCollection[i].title}</span>
//     <a class="rotator-title" href=${rotatorCollection[i].link}>
//   </a>
// </div>
// `;
//   }
// }
// getRotatorData();

////////////////////////////////////////////////////

// schoolFamily = (function () {
//   var e = $('.school-family'),
//     t = $('.school-family-popup'),
//     i = schoolFamilyCollection,
//     n = Math.min(i.length, 4),
//     o = !1;
//   var MediaItemsPopup_init = function (e) {
//       var i = MediaPlusFeedsArray,
//         n = t.find('.sf-inner');
//       MediaServiceHelper = new $.MediaServiceHelper({
//         ServiceUrl: $('#MediaPlusUrl').val(),
//         FeedsJson: i,
//         FeedGroups: sharedFeedGroups,
//         InitCallBack: function (t) {
//           for (var i = [], o = 0; o < t.FeedGroups.length; o++)
//             for (var a = 0; a < t.FeedGroups[o].FeedIds.length; a++) {
//               'events' !== t.FeedGroups[o].GroupName &&
//                 i.push(t.FeedGroups[o].FeedIds[a]);
//             }
//           i.length > 0 &&
//             (n.find('.related-cards').length &&
//               n.find('.related-cards').remove(),
//             (function (e, t, i) {
//               var n = [];
//               '' !== i && ((tempSearch = i.split(',')), (n = tempSearch)),
//                 $.MediaServiceHelper.GetMediaItemsAdvanced({
//                   FeedIds: e,
//                   TakeCount: 4,
//                   SearchTags: n,
//                   callback: function (e) {
//                     var i = '',
//                       n = '';
//                     if (e.length > 0) {
//                       t.append(
//                         "<div class='related-cards'><h3 class='related-cards-title'>Related Articles</h3><div class='column column-left'></div><div class='column column-right'></div></div>"
//                       );
//                       for (var o = 0; o < e.length; o++)
//                         o % 2
//                           ? (i += sharedGenerateMediaItemHtml(e[o], !0))
//                           : (n += sharedGenerateMediaItemHtml(e[o], !0));
//                       t.find('.related-cards .column-left').append(i),
//                         t.find('.related-cards .column-right').append(n);
//                     }
//                   },
//                 });
//             })(i, n, e));
//         },
//       });
//     },
//     a = {
//       open: function () {
//         t.addClass('opened'), this.bodyFix('open');
//       },
//       close: function () {
//         t.removeClass('opened'), this.bodyFix('close');
//       },
//       bodyFix: function (e) {
//         var t = $('html.no-touch'),
//           i = $('html.touch');
//         'open' === e
//           ? (t.css({ overflow: 'hidden' }), i.css({ overflow: 'hidden' }))
//           : 'close' === e &&
//             (t.css({ overflow: '' }), i.css({ overflow: '', position: '' }));
//       },
//       listeners: function () {
//         var e = this;
//         $('html').on('click', '.open-family-js', function () {
//           var n = parseInt($(this).attr('data-index')),
//             o = $(this).attr('data-searchtag');
//           t.hasClass('opened')
//             ? e.close()
//             : (!(function (e, i) {
//                 var n = t.find('.title'),
//                   o = t.find('.sf-content'),
//                   a = $(
//                     '.school-family-ref .cms[data-cms-index=' + i + ']'
//                   ).html();
//                 n.html(e.title), o.html(a);
//               })(i[n], n),
//               MediaItemsPopup_init(o),
//               e.open());
//         }),
//           t.find('.close-sf-popup-js').on('click', function () {
//             e.close();
//           }),
//           t.on('click', function (t) {
//             $(t.target).closest('.sf-inner').length || e.close();
//           });
//       },
//       init: function () {
//         this.listeners();
//       },
//     },
//     r =
//       "<div class='logo-item animate-show-hide logo-item-text' data-index='{INDEX}'><div class='text-container'><span class='name'>{NAME}</span><span class='sub'>{SUB}</span></div></div>",
//     s =
//       "<div class='item'><button class='item-inner open-family-js' data-index='{INDEX}' title='{TITLE}' data-searchtag='{SEARCH_TAGS}'><div class='image'><div class='img lazyload' data-bg='{IMAGE}'></div></div><div class='txt'><span class='main'>{TITLE}</span>{SUBTITLE}</div><i class='arrow g-icons g-arrow-mid-icon'></i></button></div>",
//     l =
//       "{MOVING_DOT}<div class='dot' data-dot-index={INDEX}><button title='Go to next section'></button</div>",
//     c = {
//       controllerDot: function (e) {
//         return l
//           .replace(/{INDEX}/g, e)
//           .replace(
//             /{MOVING_DOT}/g,
//             0 === e
//               ? "<div class='moving-dot'><div class='inner-dot'></div></div>"
//               : ''
//           );
//       },
//       logosTemplate: function (e, t, i) {
//         return 'logo' === e
//           ? void 0 !== t.schoolLogo && '' !== t.schoolLogo
//             ? "<div class='logo-item animate-show-hide logo-item-image lazyload' data-index='{INDEX}' data-bg='{IMAGE}'></div>"
//                 .replace(/{INDEX}/g, i)
//                 .replace(
//                   /{IMAGE}/g,
//                   cdnGeneralHelpers.getImage(t.schoolLogo, { size: 0 })
//                 )
//             : r
//                 .replace(/{INDEX}/g, i)
//                 .replace(/{NAME}/g, t.schoolName)
//                 .replace(/{SUB}/g, t.schoolSubtitle)
//           : "<div class='crest lazyload' data-bg='{IMAGE}'></div>".replace(
//               /{IMAGE}/g,
//               cdnGeneralHelpers.getImage(
//                 '/Images/assets/keys-family/crest.png',
//                 { size: 0 }
//               )
//             );
//       },
//       generateRightImage: function (e, t) {
//         var i = '';
//         return (
//           void 0 !== e.schoolSubtitle &&
//             '' !== e.schoolSubtitle &&
//             (i = "<span class='subtitle'>" + e.schoolSubtitle + '</span>'),
//           s
//             .replace(/{INDEX}/g, t)
//             .replace(
//               /{IMAGE}/g,
//               cdnGeneralHelpers.getImage(e.image, { size: 0 })
//             )
//             .replace(/{TITLE}/g, e.title)
//             .replace(/{SEARCH_TAGS}/g, e.hashtag)
//             .replace(/{SUBTITLE}/g, i)
//         );
//       },
//       init: function () {
//         var t = this,
//           o = i;
//         e.find('.logos-container').append(t.logosTemplate(!1, o[a], a));
//         for (var a = 0; a < n; a++)
//           e.find('.logos-container').append(t.logosTemplate('logo', o[a], a)),
//             e.find('.dots-controller-inner').append(t.controllerDot(a)),
//             e.find('.column-images').append(t.generateRightImage(o[a], a));
//       },
//     },
//     d = {
//       currentIndex: 0,
//       set: function () {
//         gsap.set('.animate-show-hide', { autoAlpha: 0, yPercent: -50 }),
//           this.goTo(null, null, null, !0);
//       },
//       movingDot: function (t) {
//         var i = e.find('.dot[data-dot-index=' + t + ']'),
//           n = e.find('.moving-dot');
//         e.find('.dot').removeClass('active'),
//           i.addClass('active'),
//           gsap.to(n, { y: 21 * t });
//       },
//       goTo: function (t, i, n, o) {
//         var a = this;
//         if (null !== t && null !== i) {
//           var r = e.find('.animate-show-hide[data-index=' + t + ']'),
//             s = e.find('.animate-show-hide[data-index=' + i + ']');
//           a.animate(r, s, n), a.movingDot(i), (a.currentIndex = i);
//         }
//         if (null !== o) {
//           var l = e.find(
//             '.animate-show-hide[data-index=' + a.currentIndex + ']'
//           );
//           a.movingDot(0), a.setActive(l);
//         }
//       },
//       animate: function (e, t, i) {
//         var n = gsap.timeline(),
//           o = this.removeActive(e, i),
//           a = this.setActive(t, i);
//         n.add(o).add(a, '<');
//       },
//       setActive: function (e, t) {
//         var i = gsap.timeline({ id: 'setActive' }),
//           n = 50 * t;
//         return (
//           i.fromTo(
//             e,
//             { autoAlpha: 0, yPercent: n },
//             { autoAlpha: 1, yPercent: 0 }
//           ),
//           e.addClass('active'),
//           i
//         );
//       },
//       removeActive: function (e, t) {
//         var i = -50 * t,
//           n = gsap.timeline();
//         return n.to(e, { autoAlpha: 0, yPercent: i }), n;
//       },
//       transition: function (e, t) {
//         var i = this;
//         t = t || 1;
//         e !== i.currentIndex && i.goTo(i.currentIndex, e, t, null);
//       },
//     },
//     p = {
//       currentIndex: 0,
//       scrollTo: function (e) {
//         var t = $('.open-family-js[data-index=' + e + ']').parent();
//         gsap.to(window, {
//           duration: 1,
//           scrollTo: {
//             y: t,
//             offsetY: $(window).height() / 2 - t.outerHeight(!0) / 2,
//             autoKill: !1,
//           },
//         });
//       },
//       scrollToOnClick: function () {
//         var t = this;
//         e.find('.dots-controller .dot').on('click', function () {
//           var e = $(this).attr('data-dot-index');
//           t.scrollTo(e);
//         });
//       },
//       scrollFn: function () {
//         var t = e.find('.cl-container'),
//           i =
//             (e.find('.column-logos'),
//             e.find('.column-images .item:last-child')),
//           n = e.find('.column-images .item'),
//           a = gsap.timeline();
//         o ||
//           (o = ScrollTrigger.create({
//             trigger: t,
//             start: 'center center',
//             endTrigger: i,
//             end: 'center center',
//             pin: !0,
//           })),
//           d.set(),
//           n.each(function (e, t) {
//             ScrollTrigger.create({
//               trigger: t,
//               start: 'top center-=60px',
//               end: 'top top',
//               animation: a,
//               fastScrollEnd: !0,
//               onEnter: function () {
//                 var e = parseInt($(t).find('.item-inner').attr('data-index'));
//                 d.transition(e, 1);
//               },
//               onEnterBack: function () {
//                 var e = parseInt($(t).find('.item-inner').attr('data-index'));
//                 d.transition(e, -1);
//               },
//             });
//           });
//       },
//       init: function () {
//         this.scrollFn(), this.scrollToOnClick();
//       },
//     };
//   return {
//     init: function () {
//       t.show(), c.init(), p.init(), a.init();
//     },
//   };
// })()
