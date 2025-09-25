/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
            <div className="logo text-center">
                <Image src="/assets/img/logo-footer.png" alt="bluSwap - Your Fintech Frontier" className="w-auto h-auto" height={200} width={200} />
                <p className="fs-5">
                  Your Fintech Frontier
                </p>
              </div>
            </div>
            <hr className="social-hr d-md-none" />
            <div className="col-md-2 d-grid d-md-block">
              <ul className="order-2">
                <li>
                  <b>PRODUCT</b>
                </li>
                <li>
                  <Link href="/finex"> FineX </Link>
                </li>
                <li>
                  <Link href="/faqs"> FAQs </Link>
                </li>
              </ul>
              <div className="social-icons order-1">
                <div className="icon">
                  <Link href="https://www.linkedin.com/company/bluswap-psp/">
                    <Image src="/assets/img/social/socialmedia-icon.png" alt="linkdin" className="h-auto" height={500} width={500} />
                  </Link>
                </div>
                <div className="icon">
                  <Link href="https://www.facebook.com/bluSwapPSP">
                    <Image
                      src="/assets/img/social/socialmedia-icon4.png"
                      alt="facebook"
                      className="h-auto" 
                      height={500}
                      width={500}
                    />
                  </Link>
                </div>
                <div className="icon">
                  <Link href="#">
                    <Image
                      src="/assets/img/social/socialmedia-icon3.png"
                      alt="instagram"
                      height={500}
                      className="h-auto" 
                      width={500}
                    />
                  </Link>
                </div>
                <div className="icon x">
                  <Link href="https://x.com/bluSwapPSP">
                    <Image
                      src="/assets/img/social/socialmedia-icon2.png"
                      alt="twitter"
                      className="h-auto" 
                      height={500}
                      width={500}
                    />
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <ul>
                <li>
                  <b>COMPANY</b>
                </li>
                <li>
                  <Link href="/about-us">About Us </Link>
                </li>
                <li>
                  <Link href="/contact-us">Contact Us </Link>
                </li>
                <li>
                  <Link href="/trust-center">Trust Center </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-2">
              <ul>
                <li>
                  <b>RESOURCES</b>
                </li>
                <li>
                  <Link href="/blog"> Blog </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <ul>
                <li>
                  <b>LEGAL</b>
                </li>
                <li>
                  <Link href="/terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/refund-policy">
                  Cancellation&nbsp;and&nbsp;Refund&nbsp;Policy
                  </Link>
                </li>
                <li>
                  <Link href="/account-access-policy">AA Policy</Link>
                </li>
                <li>
                  <Link href="/anti-money-laundering-policy">AML Policy</Link>
                </li>
                <li>
                  <div className="member-logo">
                    <p>PCI Membership - 1847</p>
                    <Image src="/assets/img/partners.webp" alt="Payment Council of India" height={200} width={200} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <hr />
          <p className="text-center text-md-start">
            2025 © WebFinex TechFusion Pvt Ltd
          </p>
        </div>
      </footer>
    </>
  );
}
