import PartnerLogos from '@/components/home/partner.logos';
import Image from 'next/image';
import Head from 'next/head';
import React, { useEffect } from 'react'
import EnquireNowForm from '@/components/form/enquire-now';
import Link from 'next/link';

const EnquireNow = () => {

    useEffect(() => {
        const initializeSlick = () => {
            const isLgScreen = window.innerWidth >= 992;

            if (isLgScreen) {
                $(".key-features-carousel").slick({
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 3000,
                    responsive: [
                        {
                            breakpoint: 992,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 1,
                            },
                        },
                        {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            },
                        },
                    ],
                });

                const originalSlides = $(
                    ".key-features-carousel .slick-slide:not(.slick-cloned)"
                );
                const bulletsContainer = $(".bullets");
                bulletsContainer.empty();

                originalSlides.each(function (index) {
                    if (index >= $(".key-features-carousel .box").length) return;
                    const bullet = $('<div class="bullet"></div>');
                    if (index === 0) bullet.addClass("active");
                    bullet.on("click", function () {
                        $(".key-features-carousel").slick("slickGoTo", index);
                    });
                    bulletsContainer.append(bullet);
                });

                $(".key-features-carousel").on(
                    "afterChange",
                    function (event, slick, currentSlide) {
                        $(".bullets .bullet").removeClass("active");
                        $(".bullets .bullet")
                            .eq(currentSlide % $(".key-features-carousel .box").length)
                            .addClass("active");
                    }
                );
            }
        };

        if (typeof window !== "undefined" && typeof $ !== "undefined") {
            initializeSlick();
        }

        return () => {
            const $carousel = $(".key-features-carousel");
            if ($carousel.length && $carousel.hasClass("slick-initialized")) {
                $carousel.slick("unslick");
            }
        };
    }, []);


    // Feature data
    const features = [
        {
            title: "FineX – Advanced Financial Management",
            description: "Optimize cash flow, manage settlements, and enhance financial efficiency with our smart FineX solutions.",
            icon: "/assets/img/svg/finex.png"
        },
        {
            title: "Digital Banking & Escrow Payment Processing",
            description: "Secure transactions with escrow services, digital banking integration, and fraud-proof processing.",
            icon: "/assets/img/svg/digital.png"
        },
        {
            title: "AI-Powered Payment Analytics",
            description: "Gain real-time insights, automate reconciliation, and make data-driven decisions with our smart analytics.",
            icon: "/assets/img/svg/ai.png"
        },
        {
            title: "Custom Payment Solutions",
            description: "Tailored solutions that align with your business needs, whether you're an MSME, SME, or an enterprise.",
            icon: "/assets/img/svg/payment.png"
        },
        {
            title: "Recurring Payments & Subscriptions",
            description: "Enable hassle-free subscription billing and automated recurring payments for D2C brands, EdTech, and SaaS businesses.",
            icon: "/assets/img/svg/recurring.png"
        },
        {
            title: "Seamless API Integration & PayIn/Payout Solutions",
            description: "Easily integrate our APIs into your marketplace, app, or website for fast, secure, and efficient PayIn & Payout processing.",
            icon: "/assets/img/svg/seamless.png"
        }
    ];


    // faqs data
    const faqs = [
        {
            "id": "faq1",
            "question": "How long does onboarding take?",
            "answer": "Onboarding typically takes 3 to 5 business days. This includes account setup and integration assistance. Our support team is here to guide you through the process."
        },
        {
            "id": "faq2",
            "question": "What payment methods are supported?",
            "answer": "bluSwap supports a wide range of payment methods including credit cards, debit cards, and digital wallets. We aim to provide flexibility for your customers. Check our website for a complete list."
        },
        {
            "id": "faq3",
            "question": "Is bluSwap secure?",
            "answer": "Yes, bluSwap is designed with security as a top priority. We comply with PCI DSS standards and employ advanced encryption methods. Your transactions and data are safe with us."
        },
        {
            "id": "faq4",
            "question": "What are the transaction fees?",
            "answer": "Transaction fees vary based on payment methods and volume. Generally, our fees are competitive within the industry. For detailed pricing, please refer to our pricing page."
        },
        {
            "id": "faq5",
            "question": "Can I integrate with my website or app?",
            "answer": "Absolutely! bluSwap offers easy API integration for both websites and mobile applications. Our documentation provides step-by-step guidance to facilitate the process."
        },
    ]

    return (
        <>
            <Head>
                <title>Powering Seamless, Secure Payments for Your Business</title>
                <meta name="description" content="Accept payments instantly and manage your cash flow smarter with our advanced gateway solutions. Experience the reliability and security that businesses trust." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="" />
                <meta name="url" content="https://www.bluswap.co/enquire-now" />

                <meta property="og:title" content="Powering Seamless, Secure Payments for Your Business" />
                <meta property="og:description" content="Accept payments instantly and manage your cash flow smarter with our advanced gateway solutions. Experience the reliability and security that businesses trust." />
                <meta property="og:image" content="https://www.bluswap.co/enquire-now" />
                <meta property="og:url" content="https://www.bluswap.co/enquire-now" />
                <meta property="og:type" content="website" />

                <meta name="canonical" content="https://www.bluswap.co/enquire-now" />
            </Head>
            <>
                <main className="container">

                    {/* Hero Section */}
                    <div className="row align-items-center bg-gradient-green">
                        <div className="col-md-6">
                            <div className="hero-sec-content pl-5 mt-3 mt-md-5 enquire">
                                <h1>bluSwap – Powering Seamless, Secure Payments for Your Business</h1>
                                <p className="lh-lg">
                                    Accept payments instantly and manage your cash flow smarter with our advanced gateway solutions. Experience the reliability and security that businesses trust.
                                </p>
                            </div>
                        </div>

                        <div id="form" className="d-md-block col-md-6 px-3 p-md-10">
                            <EnquireNowForm />
                        </div>
                    </div>

                    <div className="partner-logos mt-4 d-md-block">
                        <div className="text-center heading">
                            <h4>
                                <b className="text-muted">Our PSP and Banking Partner</b>
                            </h4>
                        </div>
                        <PartnerLogos />
                    </div>

                    <div className="d-flex justify-content-center">
                        <Link href="/enquire-now/#form" className="px-5 mt-4 py-2 btn btn-green fw-bold">
                            Enquire Now
                        </Link>
                    </div>

                    {/* Third Section */}
                    <div className="sec-content text-center">
                        <h2 className="fw-bold lh-sm mb-5 pt-2 pb-4"><span className="text-success">Instant Settlements: </span>Get your funds transferred immediately after each transaction. </h2>
                        {/* <h2 className="fw-bold lh-sm mb-5 py-4">Why Choose <span className="text-success"> bluSwap?</span> </h2> */}
                        <div className="box-bg-gradient-green">
                            <div className="row row-cols-1 row-cols-md-2 g-4 g-md-5">
                                {features.map((feature, index) => (
                                    <div key={index} className="col mt-5 my-md-5">
                                        <div className="d-flex flex-column flex-md-row align-items-center">
                                            <div className="me-4">
                                                <div className="bg-blue p-2 rounded d-flex mb-4 mb-md-0 align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                                                    <Image
                                                        src={feature.icon}
                                                        alt={feature.title}
                                                        width={24}
                                                        height={24}
                                                        className="text-white w-auto"
                                                    />
                                                </div>
                                            </div>
                                            <div className="box-content text-md-start">
                                                <h5 className="mb-2">{feature.title}</h5>
                                                <p className="mb-0">{feature.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Link href="/enquire-now/#form" className="px-5 my-5 mb-md-5 mt-md-0 py-2 btn btn-green fw-bold">
                            Enquire Now
                        </Link>
                    </div>

                    {/* Fourth Section */}
                    <div className="sec-content mt-4 text-center pb-5">
                        <h2 className="fw-bold lh-sm mb-4 mb-md-5">Who We  <span className="text-success"> Serve?</span> </h2>
                        <p className="fst-italic fw-medium w-75 mx-auto mb-10">
                            We are the preferred payment partner for India&apos;s growing digital businesses. Whether you&apos;re a startup, enterprise, or marketplace, bluSwap empowers you with:
                        </p>

                        <div className="key-features-carousel">
                            <div className="box mb-5 mb-md-0 key-features-box">
                                <div className="key-icon">
                                    <Image src="/assets/img/products/instant.png" alt="" className="img-fluid" height={300} width={300} />
                                </div>
                                <div className="key-info-2">
                                    <h4>Instant Payouts &
                                        Settlements</h4>
                                </div>
                            </div>
                            <div className="box mb-5 mb-md-0 key-features-box">
                                <div className="key-icon">
                                    <Image src="/assets/img/products/global.png" alt="" className="img-fluid" height={300} width={300} />
                                </div>
                                <div className="key-info-2">
                                    <h4>Global & Domestic
                                        Payment Support</h4>
                                </div>
                            </div>
                            <div className="box mb-5 mb-md-0 key-features-box">
                                <div className="key-icon">
                                    <Image
                                        src="/assets/img/products/subscription.png"
                                        alt=""
                                        style={{ padding: "1px" }}
                                        height={300}
                                        className="img-fluid"
                                        width={300}
                                    />
                                </div>
                                <div className="key-info-2">
                                    <h4>Subscription & Recurring Billing</h4>
                                </div>
                            </div>
                            <div className="box mb-5 mb-md-0 key-features-box">
                                <div className="key-icon">
                                    <Image src="/assets/img/products/fraud.png" className="img-fluid" alt="" height={300} width={300} />
                                </div>
                                <div className="key-info-2">
                                    <h4>Fraud Protection &
                                        Risk Management</h4>
                                </div>
                            </div>
                            <div className="box mb-5 mb-md-0 key-features-box">
                                <div className="key-icon">
                                    <Image
                                        src="/assets/img/products/omnichannel.png"
                                        alt=""
                                        style={{ padding: "6px" }}
                                        height={300}
                                        className="img-fluid"
                                        width={300}
                                    />
                                </div>
                                <div className="key-info-2">
                                    <h4>Omnichannel
                                        Payment Experience</h4>
                                </div>
                            </div>
                        </div>
                        <div className="bullets" />
                    </div>

                    <div className="d-flex justify-content-center">
                        <Link href="/enquire-now/#form" className="px-5 mt-md-5 mb-4 mb-md-0 py-2 btn btn-green fw-bold">
                            Enquire Now
                        </Link>
                    </div>

                    <div className="sec-content text-center">
                        <h2 className="fw-bold lh-sm">How  <span className="text-success">  bluSwap </span> Empowers Your Payment Process</h2>
                        <p className="fw-medium mt-4 pb-5">
                            Experience a seamless payment journey with BluSwap. Follow these simple steps to integrate <br />
                            and optimize your transactions effortlessly.
                        </p>
                    </div>
                    <div className="sec-img mb-5 pb-5">
                        <Image
                            src="/assets/img/steps.svg"
                            alt="Get Started in Minutes"
                            className="h-auto w-100"
                            width={1000}
                            height={1000}
                        />
                    </div>

                    <div className="d-flex justify-content-center">
                        <Link href="/enquire-now/#form" className="px-5 py-2 btn btn-green fw-bold mt-md-2">
                            Enquire Now
                        </Link>
                    </div>

                    {/* Carousel */}
                    <div id="carouselInterval" class="carousel slide mt-5" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active" data-bs-interval="10000">
                                <div class="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                    <div class="text-center py-3 mb-3 py-md-5">
                                        <p className="w-md-70 fs-5">
                                            &quot;bluSwap has been a game-changer for us at FlexyPe — both as a strategic partner and a customer. Their seamless integration and real-time settlement features have significantly improved our transaction efficiency. The team’s responsiveness and commitment to innovation make them a valuable ally in the payments space.&quot;
                                        </p>
                                        <div className="mt-4">
                                            {/* <Image src="/assets/img/svg/d-img.png" alt="Profile Image" height={50} width={50} /> */}
                                            <p className="fw-bold mb-0 mt-3">Azeem</p>
                                            <p>Founder & CEO - FlexyPe</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item" data-bs-interval="2000">
                                <div class="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                    <div class="text-center py-3 my-3 py-md-5">
                                        <p className="w-md-70 fs-5">
                                            &quot;We needed a reliable, fast, and scalable payment solution — bluSwap delivered on all fronts. Their API documentation is clear, the onboarding was smooth, and their support team is genuinely proactive. We’ve seen improved conversion rates and faster cash flow since switching.&quot;
                                        </p>
                                        <div className="mt-4">
                                            {/* <Image src="/assets/img/svg/d-img.png" alt="Profile Image" height={50} width={50} /> */}
                                            <p className="fw-bold mb-0 mt-3">Rishav</p>
                                            <p>Founder - Picxele</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="d-flex justify-content-center align-items-center" style={{ height: "100%" }}>
                                    <div class="text-center py-3 my-3 py-md-5">
                                        <p className="w-md-70 fs-5">
                                            &quot;At TransBnk, we look for partners who are as forward-thinking as we are — bluSwap fits that bill perfectly. Their infrastructure is robust, compliance-first, and designed for scale. It’s been a pleasure building with a team that truly understands modern fintech challenges.&quot;
                                        </p>
                                        <div className="mt-4">
                                            {/* <Image src="/assets/img/svg/d-img.png" alt="Profile Image" height={50} width={50} /> */}
                                            <p className="fw-bold mb-0 mt-3">Nimish</p>
                                            <p>Co-Founder - TransBnk</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Previous Button */}
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselInterval"
                            data-bs-slide="prev"
                        >
                            <i class='fas fa-chevron-left'></i>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        {/* Next Button */}
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselInterval"
                            data-bs-slide="next"
                        >
                            <i class='fas fa-chevron-right'></i>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Link href="/enquire-now/#form" className="px-5 my-4 mt-md-0 mb-md-5 py-2 btn btn-green fw-bold mt-md-2">
                            Enquire Now
                        </Link>
                    </div>

                    {/* FAQs */}
                    <div className="sec-content my-5">
                        <h2 className="mb-4 text-center fw-bold lh-sm">Frequently Asked Questions</h2>
                        <p className='text-sm text-center mb-5'>
                            Find answers to your most pressing questions about bluSwap and our services.
                        </p>
                        <div className="accordion w-md-70" id="faqAccordion">
                            {faqs.map((faq, index) => {
                                const headingId = `heading-${faq.id}`;
                                const collapseId = `collapse-${faq.id}`;
                                const isFirst = index === 0;

                                return (
                                    <div key={faq.id} className="accordion-item">
                                        <h2 className="accordion-header px-2 mb-0" id={headingId}>
                                            <button
                                                className={`accordion-button ${!isFirst ? 'collapsed' : ''}`}
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target={`#${collapseId}`}
                                                aria-expanded={isFirst ? 'true' : 'false'}
                                                aria-controls={collapseId}
                                            >
                                                {faq.question}
                                            </button>
                                        </h2>
                                        <div
                                            id={collapseId}
                                            className={`accordion-collapse collapse ${isFirst ? 'show' : ''}`}
                                            aria-labelledby={headingId}
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body px-2">
                                                {faq.answer}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="d-flex justify-content-center">
                        <Link href="/enquire-now/#form" className="px-5 mb-5 py-2 btn btn-green fw-bold mt-md-2">
                            Enquire Now
                        </Link>
                    </div>

                </main>
            </>
        </>
    );
}

export default EnquireNow;
