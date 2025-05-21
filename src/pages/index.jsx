/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import PartnerLogos from "@/components/home/partner.logos";
import Image from "next/image";


export default function Home() {
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

  return (
    <>
<Head>
  <title>Your Fintech Frontier I Unifying Payments & Banking Service</title>
  <meta name="description" content="bluSwap is a leading Fintech and third-party Service Provider that empowers businesses across India’s digital economy with seamless payment solutions." />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="keywords" content="Fintech Frontier,Banking Services,Fintech,Third-Party Service Provider,Seamless API Integration,Payout Solutions" />

  {/* Open Graph tags */}
  <meta property="og:title" content="Your Fintech Frontier I Unifying Payments & Banking Service" />
  <meta property="og:description" content="bluSwap is a leading Fintech and third-party Service Provider that empowers businesses with seamless payment solutions." />
  <meta property="og:image" content="https://www.bluswap.co/favicon.png" /> {/* Replace with your actual image URL */}
</Head>

      <>
        <main className="container">

          {/* Hero Section */}
          <div className="row align-items-center bg-gradient-green">
            <div className="col-md-6">
              <div className="hero-sec-content pl-5 mt-3 mt-md-5">
                <h1>Your Fintech Frontier</h1>
                <p className='fs-4 fw-semibold'><i>Unifying Payments and Banking Services.</i></p>
                <div className="border-3 border-bottom w-60 border-dark my-4"></div>
                <p className="lh-lg">
                  bluSwap is a leading <b> Fintech & Third-Party Service Provider (TPSP), </b>empowering businesses across <b> India’s digital economy </b> with seamless payment solutions. From D2C <b> brands and MSMEs to large enterprises, </b> we help businesses <b> transact effortlessly, scale faster, and grow smarter</b>
                </p>
                <p className="lh-lg">
                  Welcome to <b> bluSwap,</b> your all-in-one payment solution designed to  <b> streamline financial operations</b> and  <b>accelerate business growth.</b>
                </p>
                <Link href="https://finex.bluswap.co/register" className="px-5 fs-5 py-2 btn btn-green fw-bold mt-4">
                  Sign Up Now
                </Link>
              </div>
            </div>
            <div className="d-none d-md-block col-md-6 px-0">
              <div className="fetched-image">
                <Image src="/assets/img/new-main.svg" alt="" height={500} width={1000} />
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="sec-content text-center">
            <h2 className="fw-bold lh-sm">Experience the <span className="text-success"> Future of Payment</span> <br className="d-none d-md-block" /> Solutions with <span className="text-sky-blue"> bluSwap</span></h2>
            <p className="fw-semibold fs-4 mt-2 pb-4 fst-italic">
              Seamless. Secure. Scalable.
            </p>
            <div className="row mt-4 mt-md-5 align-items-center">
              <div className="col-md-6 pt-2">
                <Image src="/assets/img/payment-future.svg" alt="" className="img-fluid" height={400} width={600} />
              </div>
              <div className="col-md-6 mt-4 mt-md-0">
                <p className="text-start lh-md p-md-4">
                  Welcome to bluSwap®, your trusted partner for efficient, secure, and innovative payment solutions. Whether you’re a D2C brand, education platform, online transportation service, MSME, SME, or digital marketplace, we provide the fastest, most reliable way to manage your transactions.
                </p>

                <p className="text-start lh-md p-md-4 fw-medium">
                  <i>Secure Transactions | Seamless API Integration | End-to-End PayIn & Payout Solutions</i>
                </p>
              </div>
            </div>
          </div>

          {/* Third Section */}
          <div className="sec-content text-center">
            <h2 className="fw-bold lh-sm mb-5 py-4">Why Choose <span className="text-success"> bluSwap?</span> </h2>
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

          {/* Fourth Section */}
          <div className="sec-content mt-4 text-center">
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

          {/* Fifth Section */}
          <div className="sec-content text-center">
            <h2 className="fw-bold lh-sm mb-3 mb-md-5">Powering Payments for the <span className="text-success"> Digital Economy</span> </h2>
            <p className="fst-italic fw-medium w-75 mx-auto mb-10 pb-md-3">
              In today’s fast-evolving digital landscape, businesses need fast, secure, and reliable payment solutions. bluSwap is a cutting-edge Fintech & Third-Party Service Provider (TPSP), offering seamless payment infrastructure for:
            </p>
            <div className="row align-items-center bg-gradient-green">
              <div className="col-md-6">
                <div className="pl-5 box-text-blue">

                  <div className="d-md-flex align-items-center mb-5">
                    <Image src="/assets/img/svg/d2c.png" alt="" width={50} height={50} className="me-4" />
                    <div className="text-md-start box-content">
                      <h5 className="fs-4">
                        D2C Brands
                      </h5>
                      <p className="mb-0">
                        Enable smooth checkout experiences and drive conversions.
                      </p>
                    </div>
                  </div>

                  <div className="d-md-flex align-items-center mb-5">
                    <Image src="/assets/img/svg/education.png" alt="" width={50} height={50} className="me-4" />
                    <div className="text-md-start box-content">
                      <h5 className="fs-4">
                        Education Platforms
                      </h5>
                      <p className="mb-0">
                        Simplify fee collections with secure payment options.
                      </p>
                    </div>
                  </div>

                  <div className="d-md-flex align-items-center mb-5">
                    <Image src="/assets/img/svg/online.png" alt="" width={50} height={50} className="me-4" />
                    <div className="text-md-start box-content">
                      <h5 className="fs-4">
                        Online Transportation Services
                      </h5>
                      <p className="mb-0">
                        Process real-time payments for ride-hailing and logistics.
                      </p>
                    </div>
                  </div>

                  <div className="d-md-flex align-items-center">
                    <Image src="/assets/img/svg/msmes.png" alt="" width={50} height={50} className="me-4" />
                    <div className="text-md-start box-content">
                      <h5 className="fs-4">
                        MSMEs & SMEs
                      </h5>
                      <p className="mb-0">
                        Unlock business growth with frictionless digital payments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-none d-md-block col-md-6 px-0">
                <div className="fetched-image">
                  <Image src="/assets/img/boy.svg" alt="" height={550} width={600} />
                </div>
              </div>
              <div className="d-flex justify-content-center justify-content-md-start mt-5 mt-md-0">
                <Link href="https://finex.bluswap.co/register" className="px-5 fs-5 py-2 btn btn-green fw-bold">
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>


          <div className="sec-content text-center">
            <p className="fw-medium mx-auto mb-5">
              Seamless, Scalable & Secure Transactions for Online Businesses
            </p>
          </div>

          <div className="partner-logos d-md-block">
            <div className="text-center heading">
              <h4>
                <b className="text-muted">Our PSP and Banking Partner</b>
              </h4>
            </div>
            <PartnerLogos />
          </div>

          <div className="sec-content text-center">
            <h2 className="fw-bold lh-sm">Get Started in  <span className="text-success"> Minutes!</span> </h2>
            <p className="fw-medium mt-4 pb-5">
              Join thousands of businesses simplifying payments with bluSwap. Sign up today and <br />
              unlock a frictionless, secure, and scalable payment experience!
            </p>
          </div>
          <div className="sec-img">
            <Image
              src="/assets/img/steps.svg"
              alt=""
              className="h-auto w-100"
              width={1000}
              height={1000}
            />
          </div>
          <div className="sec-content text-center">
            <p className="fw-medium mt-4 mb-10">
              Accept Payments. Scale Faster. Simplify Growth
            </p>
          </div>
        </main>
      </>
    </>
  );
}
