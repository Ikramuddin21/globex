const headerWrapper = document.querySelector(".header-wrapper");
const headerLists = document.querySelector(".header-lists");
const headerRight = document.querySelector(".header-right");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".menu-close-icon");

const showMenu = () => {
    headerLists.classList.add("show-nav-item");
    headerRight.classList.add("show-nav-item");
    headerWrapper.classList.add("header-mobile-bg");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
};

const hideMenu = () => {
    headerLists.classList.remove("show-nav-item");
    headerRight.classList.remove("show-nav-item");
    headerWrapper.classList.remove("header-mobile-bg");
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
};


// slick slider
const heroCarousel = () => {
    $('.single-item').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        autoplay: true,
        speed: 1000,
        autoplaySpeed: 1500,
        arrows: false
    });
};

const trandingCarousel = () => {
    $('.tranding-responsive').slick({
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 650,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
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
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: false
                }
            },
            {
                breakpoint: 700,
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
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        initialSlide: 1,
        centerMode: true,
        centerPadding: "360px",
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    centerPadding: "0"
                }
            }
        ]
    });
};

const testimonialsCarousel = () => {
    $('.testimonials-responsive').slick({
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "35px",
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    centerPadding: "0"
                }
            }
        ]
    });
};

heroCarousel();
trandingCarousel();
dealsCarousel();
offersCarousel();
testimonialsCarousel();