/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import Head from 'next/head'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Image from 'next/image';

export default function ContactUs() {
  const [state, handleSubmit] = useForm("xqazljan");
  const formRef = useRef(null);


  useEffect(() => {
    if (state.succeeded) {
      toast("Thanks for Messaging!");
      if (formRef.current) {
        formRef.current.reset();
      }
    }
  }, [state.succeeded]);


  return (
    <>
      <Head>
        <title>Contact Us | Get in Touch with us - bluSwap</title>
        <meta name="description" content="Get Started in Minutes! Join thousands of businesses simplifying payments with bluSwap. Contact us today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="" />
        <meta name="url" content="https://www.bluswap.co/contact-us" />

        <meta property="og:title" content="Contact Us | Get in Touch with us - bluSwap" />
        <meta property="og:description" content="Get Started in Minutes! Join thousands of businesses simplifying payments with bluSwap. Contact us today!" />
        <meta property="og:image" content="https://www.bluswap.co/favicon.png" />
        <meta property="og:url" content="https://www.bluswap.co/contact-us" />
        <meta property="og:type" content="website" />

        <meta name="canonical" content="https://www.bluswap.co/contact-us" />
      </Head>
      <>
        {/* <Header /> */}
        <main>
          <div className="main-section">
            <div className="container">
              <div className="row align-items-center mb-md-5">
                <div className="col-md-6 order-2 order-md-1">
                  <div className="contact-title">
                    <h1>Contact Us</h1>
                    <p>Get in Touch with us</p>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                  <div className="contact-img text-center">
                    <Image src="/assets/img/contect.svg" alt="Contact Us - bluSwap" className='img-fluid' width={500} height={500} />
                  </div>
                </div>
              </div>
              <ToastContainer />
              <div className="contact-form mx-md-5 px-md-5 pt-2">
                <form ref={formRef} onSubmit={handleSubmit}>
                  <div className="row mt-5">
                    <div className="form-group col-md-4">
                      <label htmlFor="firstName" className="pb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        id="firstName"
                        required
                      />
                      <ValidationError
                        prefix="First Name"
                        field="firstName"
                        errors={state.errors}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="lastName" className="pb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        id="lastName"
                        required
                      />
                      <ValidationError
                        prefix="Last Name"
                        field="lastName"
                        errors={state.errors}
                      />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="contactNo" className="pb-2">
                        Contact No*
                      </label>
                      <input
                        type="tel"
                        className="form-control"
                        name="contactNo"
                        id="contactNo"
                        required
                      />
                      <ValidationError
                        prefix="Contact No"
                        field="contactNo"
                        errors={state.errors}
                      />
                    </div>
                  </div>
                  <div className="form-group my-md-4">
                    <label htmlFor="email" className="pb-2">
                      Business Email Id
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email"
                      required
                      pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      title="Please enter a valid email address (e.g., example@domain.com)"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </div>
                  <div className="form-group my-md-4">
                    <label htmlFor="message" className="pb-2">
                      Message Box
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      required
                    />
                    <ValidationError
                      prefix="Message"
                      field="message"
                      errors={state.errors}
                    />
                  </div>
                  <button type="submit" className="btn btn-success" disabled={state.submitting}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="contact-details">
              <div className="row">
                <div className="col-md-6 details-box border-end">
                  <h3>Address</h3>
                  <p>
                    WebFinex TechFusion Pvt Ltd<br />
                    StartUpHuts 108 3rd Floor<br />
                    27th Main Road HSR Layout Sector 2, HSR Layout, Bangalore, Bangalore South,<br />
                    Karnataka, India, 560102.
                  </p>
                  <hr className="d-md-none address-line" />
                </div>
                <div className="col-md-6 details-box border-start">
                  <h3>Business Query</h3>
                  <h4>Send query at <br className="d-md-none" /> info@bluswap.co</h4>
                  <hr className="d-md-none address-line" />
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 details-box border-end">
                  <h3>Registered Address</h3>
                  <p>
                    WebFinex TechFusion Pvt Ltd <br /> OFFICE NO. 301, 3rd FLOOR, TRYKSHA DESIRE, <br /> NR. KIRTIDHAM DERASAR,
                    OPP. SHIVSHAKTI BUS STOP,<br /> Chandkheda, Ahmedabad, Gandhinagar, Gujarat,
                    India, 382424
                  </p>
                  <hr className="d-md-none address-line" />
                </div>
                <div className="col-md-6 details-box border-start">
                  <h3>Payment &amp; Support Query</h3>
                  <h4>Send query at <br className="d-md-none" /> support@bluswap.co</h4>
                </div>
              </div>
            </div>
          </div>
        </main>
      </>
    </>
  )
}
