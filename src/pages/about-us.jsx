/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'

export default function AboutUs() {
    return (
        <>
            <Head>
                <title>Premier Payment Marketplace | Payment Solutions - bluSwap</title>
                <meta name="description" content="Your Premier Payment Marketplace for Ecommerce is dedicated to revolutionizing online payments with fast, secure, and user-friendly payment solutions." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content="Payment Marketplace, payment solutions" />
                <meta name="url" content="https://www.bluswap.co/about-us" />

                <meta property="og:title" content="Premier Payment Marketplace | Payment Solutions - bluSwap" />
                <meta property="og:description" content="Your Premier Payment Marketplace for Ecommerce is dedicated to revolutionizing online payments with fast, secure, and user-friendly payment solutions." />
                <meta property="og:image" content="https://www.bluswap.co/about-us" />
                <meta property="og:url" content="https://www.bluswap.co/about-us" />
                <meta property="og:type" content="website" />

                <meta name="canonical" content="https://www.bluswap.co/about-us" />
            </Head>
            <>
                <main>
                    <div className="container">
                        <div className="row my-5">
                            <div className="col-md-6 order-2 order-md-1">
                                <div className="about-us-title">
                                    <h1>About bluSwap®</h1>
                                    <p>
                                        bluSwap, Your Premier Payment Marketplace for Ecommerce Is a leading
                                        fintech dedicated to revolutionising online payments. Our mission is
                                        to empower businesses in the digital era with fast, secure, and
                                        user-friendly payment solutions.
                                    </p>
                                    <p>
                                        Whether you operate an ecommerce site or a marketplace ecosystem,
                                        bluSwap offers comprehensive services to streamline your financial
                                        transactions, ensuring your business thrives in the digital world.
                                        Experience the future of payments with bluSwap.
                                    </p>
                                </div>
                            </div>
                            <div className="col-md-6 order-1 order-md-2">
                                <div className="main-img">
                                    <img src="/assets/img/about-us-main.svg" alt="About bluSwap®" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="about-box">
                        <div className="main-image-box">
                            <img src="/assets/img/image4.svg" alt="bluSwap Mission" />
                        </div>
                        <div className="box-description">
                            <div className="info-box">
                                <div className="image-box">
                                    <img src="/assets/img/svg/home.svg" alt="50+ Online Business" />
                                </div>
                                <h4>50+</h4>
                                <p>Online Business</p>
                            </div>
                            <div className="info-box">
                                <div className="image-box">
                                    <img src="/assets/img/svg/card.svg" alt="1M+ Transaction Provided" />
                                </div>
                                <h4>1M+</h4>
                                <p>Transaction Provided</p>
                            </div>
                            <div className="info-box">
                                <div className="image-box">
                                    <img src="/assets/img/svg/banck.svg" alt="Banking Partner - bluSwap" />
                                </div>
                                <h4>10+</h4>
                                <p>Banking Partner</p>
                            </div>
                        </div>
                    </div>
                    <div className="container py-5">
                        <div className="heading">
                            <h2 className="text-center"> Mission </h2>
                        </div>
                        <div className="text-center discription">
                            At bluSwap, our mission is to innovate within the fintech industry by
                            leveraging cutting-edge technology to provide seamless, secure, and
                            efficient payment solutions. We aim to empower businesses by simplifying
                            online payments, enhancing financial accessibility, and fostering growth
                            in the dynamic digital landscape. By driving fintech innovation, we are
                            committed to helping businesses thrive in the digital age.
                        </div>
                    </div>
                    <div className="vision">
                        <h2>Vision</h2>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4">
                                    <Image src="/assets/img/svg/box.svg" alt="Vision for Business - bluSwap" className='h-auto w-auto' width={500} height={500} />
                                    <h3>Vision for Business</h3>
                                    <p>
                                        We aim to revolutionize digital payments for businesses, providing
                                        solutions that streamline operations and drive growth, helping them
                                        thrive in the digital age.
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <Image src="/assets/img/svg/men.svg" alt="Vision for Payer (Consumer/User)" className='h-auto w-auto' width={500} height={500} />
                                    <h3>Vision for Payer (Consumer/User)</h3>
                                    <p>
                                        We aim to provide payers with seamless, secure, and easy digital
                                        transactions, ensuring a smooth and trustworthy payment experience.
                                    </p>
                                </div>
                                <div className="col-md-4">
                                    <Image src="/assets/img/svg/mask.svg" alt="Vision for Ecosystem" className='h-auto w-auto' width={500} height={500} />
                                    <h3>Vision for Ecosystem</h3>
                                    <p>
                                        We aim to foster innovation, collaboration, and financial inclusion,
                                        creating a thriving digital landscape with accessible and efficient
                                        financial services for all.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="value-title">
                            <h3 className="text-center">Our value</h3>
                            <p className="text-center">
                                These values guide our actions and decisions every day
                            </p>
                        </div>
                        <div className="row mb-md-5">
                            <div className="col-md-4">
                                <div className="box">
                                    <div className="key-icon">
                                        <Image src="/assets/img/svg/efficiency.svg" alt="Efficiency" className='h-auto w-auto' width={500} height={500} />
                                    </div>
                                    <div className="key-info">
                                        <h4>Efficiency</h4>
                                        <p>
                                            bluSwap&apos;s solutions streamline payment processes, reducing
                                            operational complexities and saving businesses valuable time and
                                            resources.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <div className="key-icon">
                                        <Image src="/assets/img/svg/growth.svg" alt="bluSwap Growth" className='h-auto w-auto' width={500} height={500} />
                                    </div>
                                    <div className="key-info">
                                        <h4>Growth</h4>
                                        <p>
                                            By providing access to new payment methods and technologies,
                                            bluSwap enables businesses to expand their customer base and
                                            explore new revenue streams.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <div className="key-icon">
                                        <Image src="/assets/img/svg/competitive-edge.svg" alt="Competitive Edge" className='h-auto w-auto' width={500} height={500} />
                                    </div>
                                    <div className="key-info">
                                        <h4>Competitive Edge</h4>
                                        <p>
                                            Businesses that embrace bluSwap gain a competitive advantage by
                                            offering modern, convenient payment options that attract
                                            tech-savvy customers.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-md-5">
                            <div className="col-md-4">
                                <div className="box">
                                    <div className="key-icon">
                                        <Image src="/assets/img/svg/financial-inclusion.svg" alt="Financial Inclusion" className='h-auto w-auto' width={500} height={500} />
                                    </div>
                                    <div className="key-info">
                                        <h4>Financial Inclusion</h4>
                                        <p>
                                            bluSwap promotes financial inclusion by making digital payments
                                            accessible to a wider population, including those in remote areas
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <div className="key-icon">
                                        <Image src="/assets/img/svg/economic-growth.svg" alt="Economic Growth" className='h-auto w-auto' width={500} height={500} />
                                    </div>
                                    <div className="key-info">
                                        <h4>Economic Growth</h4>
                                        <p>
                                            As businesses flourish with efficient payment solutions, the
                                            country&apos;s economy benefits from increased trade, investment, and
                                            financial activity.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <div className="key-icon">
                                        <Image src="/assets/img/svg/regulatory-compliance.svg" alt="Regulatory Compliance" className='h-auto w-auto' width={500} height={500} />
                                    </div>
                                    <div className="key-info">
                                        <h4>Regulatory Compliance</h4>
                                        <p>
                                            bluSwap&apos;s commitment to compliance contributes to the country&apos;s
                                            financial stability and security, aligning with regulatory
                                            standards.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-md-5 pb-5">
                            <div className="col-md-4">
                                <div className="box">
                                    <div className="key-icon">
                                        <Image src="/assets/img/svg/security.svg" alt="Security" className='h-auto w-auto' width={500} height={500} />
                                    </div>
                                    <div className="key-info">
                                        <h4>Security</h4>
                                        <p>
                                            bluSwap prioritizes robust security measures to protect sensitive
                                            financial data, ensuring compliance with data protection
                                            regulations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <div className="key-icon">
                                        <Image src="/assets/img/svg/transparency.svg" alt="Transperency" className='h-auto w-auto' width={500} height={500} />
                                    </div>
                                    <div className="key-info">
                                        <h4>Transparency</h4>
                                        <p>
                                            Our solutions offer transparent transaction tracking and
                                            reporting, assisting businesses in meeting compliance
                                            requirements.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="box">
                                    <div className="key-icon">
                                        <Image src="/assets/img/svg/thrd.png" alt="Risk Mitigation - bluSwap" className='h-auto w-auto' width={500} height={500} />
                                    </div>
                                    <div className="key-info">
                                        <h4>Risk Mitigation</h4>
                                        <p>
                                            bluSwap&apos;s fraud prevention mechanisms reduce the risk of financial
                                            crime, contributing to a compliant and secure financial
                                            environment.
                                        </p>
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
