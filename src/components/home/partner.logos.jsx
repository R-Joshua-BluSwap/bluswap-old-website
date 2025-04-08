import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const PartnerLogos = () => {
    // slider settings
    const settings = {
        dots: false,
        infinite: true,
        speed: 900,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3,
                },
            },
        ],
    };

    return (
        <div className="m-md-5 pb-3 my-4 logos">
            <Slider {...settings}>
                <div className="logo">
                    <Image src="/assets/img/partners/partner1.png" alt="Partner 1" className="w-100 h-auto" height={100} width={100} />
                </div>
                <div className="logo">
                    <Image src="/assets/img/partners/partner2.png" alt="Partner 2" className="w-100 h-auto" height={100} width={100} />
                </div>
                <div className="logo">
                    <Image src="/assets/img/partners/partner4.png" alt="Partner 4" className="w-100 h-auto" height={100} width={100} />
                </div>
                <div className="logo">
                    <Image src="/assets/img/partners/partner6.png" alt="Partner 6" className="w-100 h-auto" height={100} width={100} />
                </div>
                <div className="logo">
                    <Image src="/assets/img/partners/partner7.png" alt="Partner 7" className="w-100 h-auto" height={100} width={100} />
                </div>
                <div className="logo">
                    <Image src="/assets/img/partners/partner9.png" alt="Partner 9" className="w-100 h-auto" height={100} width={100} />
                </div>
                <div className="logo">
                    <Image src="/assets/img/partners/partner10.png" alt="Partner 10" className="w-100 h-auto" height={100} width={100} />
                </div>
            </Slider>
        </div>
    );
};

export default PartnerLogos;
