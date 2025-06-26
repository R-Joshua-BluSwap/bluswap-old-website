/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
export default function Faqs() {
    return (
        <>
            <Head>
                <title>FAQs | bluSwap Help Center</title>
                <meta name="description" content="Find answers to common questions about bluSwap's secure transactions, API integration, and financial solutions in our comprehensive FAQ section." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="" />
                <meta name="url" content="https://www.bluswap.co/faqs" />

                <meta property="og:title" content="FAQs | bluSwap Help Center" />
                <meta property="og:description" content="Find answers to common questions about bluSwap's secure transactions, API integration, and financial solutions in our comprehensive FAQ section." />
                <meta property="og:image" content="https://www.bluswap.co/favicon.png" />
                <meta property="og:url" content="https://www.bluswap.co/faqs" />
                <meta property="og:type" content="website" />

                <meta name="canonical" content="https://www.bluswap.co/faqs" />
            </Head>
            <>
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6 order-2 order-md-1">
                                    <div className="faq-main">
                                        <h1>FAQ</h1>
                                        <p>
                                            Have questions? Here you&apos;ll find the answers most valued by our
                                            partners, along with access to step-by-step instructions and support
                                        </p>
                                    </div>
                                </div>
                                <div className="col-md-6 order-1 order-md-2">
                                    <div className="faq-img">
                                        <Image src="/assets/img/faq-main.svg" alt="FAQ - bluSwap" className='img-fluid' height={500} width={500} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="all-faqs mx-md-5">
                            <h2>About us</h2>
                            <div className="faqs">
                                <div className="accordion" id="faqAccordion">
                                    {/* changes here */}
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingOne">
                                            <button
                                                className="accordion-button"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseOne"
                                                aria-expanded="true"
                                                aria-controls="collapseOne"
                                            >
                                                What is bluSwap?
                                            </button>
                                        </h3>
                                        <div
                                            id="collapseOne"
                                            className="accordion-collapse collapse show"
                                            aria-labelledby="headingOne"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                bluSwap is a leading fintech and Third-Party Service Provider (TPSP) dedicated to revolutionizing online payments. We empower businesses in India&apos;s digital economy with seamless, secure, and efficient payment solutions.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingTwo">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseTwo"
                                                aria-expanded="false"
                                                aria-controls="collapseTwo"
                                            >
                                                What services does bluSwap provide?
                                            </button>
                                        </h3>
                                        <div
                                            id="collapseTwo"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                bluSwap provides a comprehensive suite of services, including:
                                                <ul>
                                                    <li>
                                                        <b>FineX:</b> An advanced financial management platform that optimizes cash flow, manages settlements, and enhances financial efficiency.
                                                    </li>
                                                    <li>
                                                        <b>Digital Banking & Escrow Payment Processing:</b> Secure transactions with escrow services, digital banking integration, and fraud-proof processing.
                                                    </li>
                                                    <li>
                                                        <b>AI-Powered Payment Analytics: </b> Real-time insights, automated reconciliation, and data-driven decision-making tools.
                                                    </li>
                                                    <li>
                                                        <b>Custom Payment Solutions: </b> Tailored solutions for MSMEs, SMEs, and enterprises.
                                                    </li>
                                                    <li>
                                                        <b>Recurring Payments & Subscriptions: </b> Automated billing for D2C brands, EdTech, and SaaS businesses.
                                                    </li>
                                                    <li>
                                                        <b>Seamless API Integration & PayIn/Payout Solutions: </b> Easy integration for marketplaces, apps, or websites.
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingThree">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseThree"
                                                aria-expanded="false"
                                                aria-controls="collapseThree"
                                            >
                                                How does bluSwap ensure secure transactions?
                                            </button>
                                        </h3>
                                        <div
                                            id="collapseThree"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingThree"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                We prioritize robust security measures, including advanced encryption techniques, multi-factor authentication, and regular security audits, to protect sensitive financial data and ensure compliance with data protection regulations.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFour">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFour"
                                                aria-expanded="false"
                                                aria-controls="collapseFour"
                                            >
                                                What payment methods are supported by bluSwap?
                                            </button>
                                        </h3>
                                        <div
                                            id="collapseFour"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFour"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                bluSwap currently supports payments exclusively through UPI (Unified Payments Interface). This ensures fast, secure, and seamless transactions for both businesses and customers across India.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingFive">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseFive"
                                                aria-expanded="false"
                                                aria-controls="collapseFive"
                                            >
                                                How can bluSwap help my business grow?
                                            </button>
                                        </h3>
                                        <div
                                            id="collapseFive"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingFive"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                By providing efficient payment solutions, bluSwap helps businesses streamline operations, reduce transaction costs, and enhance customer satisfaction, enabling them to scale faster and grow smarter.
                                            </div>
                                        </div>
                                    </div>

                                    {/* not maked changes */}
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingSix">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSix"
                                                aria-expanded="false"
                                                aria-controls="collapseSix"
                                            >
                                                What is FineX by bluSwap?
                                            </button>
                                        </h3>
                                        <div
                                            id="collapseSix"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSix"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                FineX by bluSwap is an advanced financial exchange platform that
                                                offers real-time trading and settlement services for digital
                                                assets and cryptocurrencies.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingSeven">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseSeven"
                                                aria-expanded="false"
                                                aria-controls="collapseSeven"
                                            >
                                                How do I integrate bluSwap with my online business?
                                            </button>
                                        </h3>
                                        <div
                                            id="collapseSeven"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingSeven"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                Integrating bluSwap with your online business is simple with our
                                                comprehensive API documentation and support team to assist you
                                                every step of the way.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingEight">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseEight"
                                                aria-expanded="false"
                                                aria-controls="collapseEight"
                                            >
                                                Does bluSwap offer daily settlements?
                                            </button>
                                        </h3>
                                        <div
                                            id="collapseEight"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingEight"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                Yes, bluSwap offers daily settlements to ensure that businesses
                                                have access to their funds as quickly as possible.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item">
                                        <h3 className="accordion-header" id="headingNine">
                                            <button
                                                className="accordion-button collapsed"
                                                type="button"
                                                data-bs-toggle="collapse"
                                                data-bs-target="#collapseNine"
                                                aria-expanded="false"
                                                aria-controls="collapseNine"
                                            >
                                                How do I get started with bluSwap?
                                            </button>
                                        </h3>
                                        <div
                                            id="collapseNine"
                                            className="accordion-collapse collapse"
                                            aria-labelledby="headingNine"
                                            data-bs-parent="#faqAccordion"
                                        >
                                            <div className="accordion-body">
                                                Getting started with bluSwap is easy. Sign up on our website,
                                                complete the verification process, and start using our services to
                                                manage your transactions seamlessly.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        </>
    )
}
