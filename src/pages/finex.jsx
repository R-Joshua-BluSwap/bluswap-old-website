/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link';
import Head from 'next/head'
import Image from 'next/image';
export default function Finex() {
    return (
        <>
            <>
                <Head>
                    <title>FineX - Payment SaaS &  Marketplace Offerings - bluSwap</title>
                    <meta name="description" content="Welcome to bluSwap FineX, your all-in-one payment solution designed to streamline financial operations and accelerate business growth. Get started today." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="keywords" content="Payment SaaS, Marketplace Offerings, SaaS Solutions, Automated Cash Flow Management"/>
                </Head>
                <></>
                <main>
                    <div className="finex">
                        <div className="finex-title text-center">
                            <h1>
                                FineX - Payment SaaS <br /> &amp; Marketplace
                            </h1>
                            <p>Simplifying Payments, Accelerating Growth</p>
                        </div>
                        <div className="text-center finex-main-img">
                            <img src="/assets/img/finex-main.svg" alt="Finex Logo" />
                        </div>
                    </div>
                    <div className="start-btn d-md-none">
                        <button>
                            <Link href="https://finex.bluswap.co/#/register">Get Started</Link>
                        </button>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-7">
                                <div className="marketplace-content">
                                    <h2>Marketplace Offerings</h2>
                                    <ul className="custom-list-style">
                                        <li>
                                            <span> PSP Options (P2M):</span> Choose from a range of Payment Service
                                            Providers for seamless Person-to-Merchant transactions.
                                        </li>
                                        <li>
                                            <span>Analytical Dashboard:</span> Gain comprehensive insights into your
                                            transactions and financial health.
                                            <p />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-5">
                                <div className="marketplace-imgs">
                                    <img src="/assets/img/finex-img.svg" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="row mt-md-5 pt-md-5">
                            <div className="col-md-5 d-flex align-items-center justify-content-end justify-content-md-start order-2 order-md-1 pb-md-5">
                                <div className="saas-img">
                                    <img src="/assets/img/finex-saas.svg" alt="" />
                                </div>
                            </div>
                            <div className="col-md-7 order-1 order-md-2">
                                <div className="saas">
                                    <h2>SaaS Solutions</h2>
                                    <ul className="custom-list-style">
                                        <li>
                                            <span>Subscription / Recurring Payments:</span> Seamlessly manage
                                            recurring payments with automated subscription billing.
                                        </li>
                                        <li>
                                            <span>Digital Banking / Virtual Accounts:</span> Modernise your banking
                                            experience with virtual accounts for efficient fund management.
                                        </li>
                                        <li>
                                            <span>Invoicing:</span> Streamline your billing process with easy-to-use
                                            invoicing solutions.
                                        </li>
                                        <li>
                                            <span>AI-Driven Modules:</span>&nbsp;Leverage AI to optimise your
                                            financial operations and <br className="d-md-none" />decision-making processes.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="start-btn d-none d-md-flex">
                            <button>
                                <Link href="https://finex.bluswap.co/#/register">Get Started</Link>
                            </button>
                        </div>
                    </div>
                    <div className="blufin-box">
                        <div className="container">
                            <div className="row px-2 px-md-0">
                                <div className="col-md-5 d-flex">
                                    <div className="blufin-img">
                                        <img src="/assets/img/blufin.svg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="blufin-title">
                                        <h2>BluFin360</h2>
                                        <p>Smart Banking Solutions for Business</p>
                                        <hr />
                                        <ul className="custom-bullet">
                                            <li className="fst-li">
                                                <span>Automated Cash Flow Management: </span>Implement AI-powered
                                                tools to predict and manage cash flow, providing real-time
                                                insights and automatic adjustments to ensure liquidity.
                                            </li>
                                            <li className="sec-li">
                                                <span>Unified Payment Processing: </span>Support for multiple
                                                payment methods including bank transfers, credit/debit cards,
                                                mobile payments, and digital wallets. Enable one-click
                                                payments and batch processing to simplify transaction
                                                handling.

                                            </li>
                                            <li className="third-li">
                                                <span>Automated Reconciliation:</span> Integrate with various bank
                                                accounts and payment gateways to automatically fetch
                                                transaction data. Use AI-powered matching algorithms to
                                                reconcile transactions with invoices and purchase orders.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <hr className="horizontal-line" />
                            <div className="row">
                                <div className="col-md-7 order-2 order-md-1">
                                    <div className="floqast-title">
                                        <h2>FloQast</h2>
                                        <p>The Ultimate Tool for Financial Close Management</p>
                                        <hr />
                                        <ul className="custom-bullet">
                                            <li className="forth-li">

                                                <span>AI-Driven Reconciliation:</span> Streamline the reconciliation
                                                process using AI.

                                            </li>
                                            <li className="fifth-li">

                                                <span>Enhanced Reporting Accuracy:</span> Improve the accuracy of
                                                financial reporting.

                                            </li>
                                            <li className="sixth-li">

                                                <span>FloQast&apos;s Cutting-Edge Solution:</span> Revolutionize
                                                financial reconciliation and reporting for organizations.

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-5 order-1 order-md-2">
                                    <div className="floqast-img">
                                        <img src="/assets/img/floqast.svg" alt="" />
                                    </div>
                                </div>
                            </div>
                            <hr className="horizontal-line" />
                            <div className="row pt-md-5">
                                <div className="col-md-5">
                                    <div className="quickflow-img">
                                        <img src="/assets/img/loan.svg" alt="" />
                                    </div>
                                </div>
                                <div className="col-md-7">
                                    <div className="quickflow-title">
                                        <h2>QuickFlow - OD &amp; Short Term Loan</h2>
                                        <ul className="custom-bullet">
                                            <li className="seventh-li">
                                                <span>Quick Financing Solutions:</span> Access funds rapidly for
                                                immediate cash needs.
                                            </li>
                                            <li className="eighth-li">
                                                <span>Manage Short-Term Cash Flow:</span> Effectively handle
                                                short-term financial requirements.
                                            </li>
                                            <li className="ninth-li">
                                                <span>Support Business Growth:</span> Facilitate business expansion
                                                with short-term loans and overdrafts.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="start-btn bottom-btn">
                                <button>
                                    <Link href="https://finex.bluswap.co/#/register">Get Started</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        </>
    )
}
