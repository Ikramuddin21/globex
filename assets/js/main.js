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
        speed: 500,
        slidesToScroll: 1,
        slidesToShow: 1,
        initialSlide: 1,
        centerMode: true,
        centerPadding: "360px"
      });
};

const testimonialsCarousel = () => {
    $('.testimonials-responsive').slick({
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        initialSlide: 0,
        centerMode: true,
        centerPadding: "35px",
    });
};

heroCarousel();
trandingCarousel();
dealsCarousel();
offersCarousel();
testimonialsCarousel();