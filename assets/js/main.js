// const displayHeroCarousel = items => {
//     const heroCarouselDiv = document.getElementById("hero-carousel");
//     items.forEach(item => {
//         heroCarouselDiv.innerHTML = `
//         <div class="carousel-item">
//             <div class="hero-carousel-left">
//                 <img src=${item.imgMain} alt="" />
//             </div>
//             <div class="hero-carousel-right">
//                 <img class src=${item.imgPrada} alt="" />
//                 <div>
//                     <h2 class="hero-subtitle">${item.subtitle}</h2>
//                     <h2>${item.price}</h2>
//                 </div>
//                 <button class="shared-btn">Explore</button>
//             </div>
//         </div>
//         `;
//     });
// };

// const loadDataHeroCarousel = async () => {
//     const res = await fetch("data.json");
//     const data = await res.json();
//     displayHeroCarousel(data.heroCarousel);

// };

const heroCarousel = () => {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1500,
    });
    // loadDataHeroCarousel();
};

const trandingCarousel = () => {
    $('.tranding-responsive').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
};

const dealsCarousel = () => {
    $('.deals-responsive').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
};
const offersCarousel = () => {
    $('.offers-responsive').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
};

heroCarousel();
trandingCarousel();
dealsCarousel();
offersCarousel();