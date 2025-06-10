// pages/thank-you.js
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

const ThankYou = () => {
  const router = useRouter();

  const handleBackToHome = () => {
    router.push('/');
  };

  const handleContactUs = () => {
    router.push('/contact-us');
  };

  return (
    <>
      <Head>
        <title>Thank You - bluSwap</title>
        <meta name="description" content="Thank you for your enquiry. We'll get back to you within 24 hours." />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                  'send_to': 'AW-17108900548/Ha9PCM7mrtIaEMS1lN4_',
                  'value': 1.0,
                  'currency': 'INR'
                });
              }
            `,
          }}
        />
      </Head>

      <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#ECF4FF' }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-xl-6">
              <div className="card shadow-lg border-0">
                <div className="card-body p-5 text-center">
                  <div className="mb-4">
                    <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-success" style={{ width: '100px', height: '100px' }}>
                      <svg width="50" height="50" fill="white" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
                      </svg>
                    </div>
                  </div>

                  <h1 className="display-5 fw-bold text-dark mb-3">Thank You!</h1>
                  <h2 className="h4 text-muted mb-4">We have received your enquiry</h2>

                  <div className="mb-5">
                    <p className="lead text-muted mb-3">
                      Thank you for reaching out to <strong className="text-primary">bluSwap</strong>! We are excited to connect with you.
                    </p>
                    <p className="text-muted mb-4">
                      Our team will review your enquiry and get back to you within <strong className="text-success">24 hours</strong>.
                      We appreciate your interest in our services.
                    </p>
                  </div>

                  <div className="d-flex gap-3 justify-content-center flex-wrap">
                    <button onClick={handleBackToHome} className="btn btn-primary btn-lg px-4" type="button">
                      Back to Home
                    </button>
                    <button onClick={handleContactUs} className="btn btn-outline-primary btn-lg px-4" type="button">
                      Contact Us
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankYou;


// // pages/thank-you.js
// import React from 'react';
// import { useRouter } from 'next/router';
// import Head from 'next/head';

// export default function ThankYou() {
//     const router = useRouter();

//     const handleBackToHome = () => {
//         router.push('/');
//     };

//     const handleContactUs = () => {
//         router.push('/contact-us');
//     };

//     return (
//         <>
//             <Head>
//                 <title>Thank You - bluSwap</title>
//                 <meta name="description" content="Thank you for your enquiry. We'll get back to you within 24 hours." />
//                 {/* Add Bootstrap CSS if not already included globally */}
//                 <link 
//                     href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" 
//                     rel="stylesheet" 
//                 />
//             </Head>
            
//             <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{backgroundColor: '#ECF4FF'}}>
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-lg-8 col-xl-6">
//                             <div className="card shadow-lg border-0">
//                                 <div className="card-body p-5 text-center">
//                                     {/* Success Icon */}
//                                     <div className="mb-4">
//                                         <div className="mx-auto mb-3 d-flex align-items-center justify-content-center rounded-circle bg-success" 
//                                              style={{width: '100px', height: '100px'}}>
//                                             <svg width="50" height="50" fill="white" viewBox="0 0 16 16">
//                                                 <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.061L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
//                                             </svg>
//                                         </div>
//                                     </div>

//                                     {/* Main Message */}
//                                     <h1 className="display-5 fw-bold text-dark mb-3">
//                                         Thank You!
//                                     </h1>
//                                     <h2 className="h4 text-muted mb-4">
//                                         We have received your enquiry
//                                     </h2>

//                                     {/* Description */}
//                                     <div className="mb-5">
//                                         <p className="lead text-muted mb-3">
//                                             Thank you for reaching out to <strong className="text-primary">bluSwap</strong>! 
//                                             We are excited to connect with you.
//                                         </p>
//                                         <p className="text-muted mb-4">
//                                             Our team will review your enquiry and get back to you within 
//                                             <strong className="text-success"> 24 hours</strong>. 
//                                             We appreciate your interest in our services.
//                                         </p>
//                                     </div>

//                                     {/* Action Buttons */}
//                                     <div className="d-flex gap-3 justify-content-center flex-wrap">
//                                         <button 
//                                             onClick={handleBackToHome}
//                                             className="btn btn-primary btn-lg px-4"
//                                             type="button"
//                                         >
//                                             <svg width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16">
//                                                 <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
//                                             </svg>
//                                             Back to Home
//                                         </button>
//                                         <button 
//                                             onClick={handleContactUs}
//                                             className="btn btn-outline-primary btn-lg px-4"
//                                             type="button"
//                                         >
//                                             <svg width="16" height="16" fill="currentColor" className="me-2" viewBox="0 0 16 16">
//                                                 <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
//                                             </svg>
//                                             Contact Us
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }