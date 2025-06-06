
/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-css-tags */
/* eslint-disable @next/next/no-page-custom-font */
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image';

export default function Header() {
    const [navbar, setNavbar] = useState(false);

    const router = useRouter()
    const pathname = router.pathname

    // Check if current route is enquire-now or thank-you
    const isEnquirePage = pathname === '/enquire-now';
    const isThankYouPage = pathname === '/thank-you';

    const styles = {
        backgroundColor: (pathname === '/finex' || pathname === '/blog' || pathname === '/contact-us' || pathname === '/faqs' || pathname === '/thank-you') ? '#ECF4FF' : 'white',
    }

    const closeNavbar = () => {
        setNavbar(false);
    };

    return (
        <>
            <header style={styles}>
                <nav className="navbar navbar-expand-lg">
                    <div className="container">
                        <Link className="navbar-brand m-0" href="/">
                            <Image src="/assets/img/logo.png" alt="logo" height={65} width={230} />
                        </Link>
                        <button
                            className={`navbar-toggler collapsed`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded={navbar ? "true" : "false"}
                            aria-label="Toggle navigation">
                            <Image src="/assets/img/menu.png" alt="menu" onClick={() => setNavbar(true)} className="w-100 h-auto" width={50} height={30} />
                            {/* <span className="navbar-toggler-icon" /> */}
                        </button>
                        <div className={`collapse navbar-collapse ${navbar ? "show" : "collapse"} nav-bar`} id="navbarSupportedContent">
                            <ul className="navbar-nav mb-2 mx-lg-4 xl-mx-5 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/" onClick={closeNavbar}>
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/finex" onClick={closeNavbar}>
                                        FineX
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/about-us" onClick={closeNavbar}>
                                        About Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/blog" onClick={closeNavbar}>
                                        Blog
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" href="/contact-us" onClick={closeNavbar}>
                                        Contact Us
                                    </Link>
                                </li>
                                <li className="nav-item d-lg-none">
                                    <Link className="nav-link active" aria-current="page" href="https://finex.bluswap.co/login" onClick={closeNavbar}>
                                        Sign In
                                    </Link>
                                </li>
                                <li className="nav-item d-lg-none">
                                    <Link className="nav-link active btn btn-green px-4" aria-current="page" href="https://finex.bluswap.co/register" onClick={closeNavbar}>
                                        Sign Up
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <Link className="nav-link active text-black d-none d-lg-block px-4 me-3" aria-current="page" href="https://finex.bluswap.co/login" onClick={closeNavbar}>
                            Sign In
                        </Link>
                        <Link className="nav-link d-none d-lg-block active btn btn-green px-4" aria-current="page" href="https://finex.bluswap.co/register" onClick={closeNavbar}>
                            Sign Up
                        </Link>
                    </div>
                </nav>
            </header>
        </>
    )
}
// /* eslint-disable @next/next/no-html-link-for-pages */
// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable @next/next/no-css-tags */
// /* eslint-disable @next/next/no-page-custom-font */
// import React, { useState } from 'react'
// import { useRouter } from 'next/router'
// import Link from 'next/link'
// import Image from 'next/image';

// export default function Header() {
//     const [navbar, setNavbar] = useState(false);

//     const router = useRouter()
//     const pathname = router.pathname

//     // Check if current route is enquire-now
//     const isEnquirePage = pathname === '/enquire-now';
//      const isThankYouPage = pathname === '/thank-you';

//     const styles = {
//         backgroundColor: (pathname === '/finex' || pathname === '/blog' || pathname === '/contact-us' || pathname === '/faqs') ? '#ECF4FF' : 'white',
//     }

//     const closeNavbar = () => {
//         setNavbar(false);
//     };

//     return (
//         <>
//             <header style={styles}>
//                 <nav className="navbar navbar-expand-lg">
//                     <div className="container">
//                         <Link className="navbar-brand m-0" href="/">
//                             <Image src="/assets/img/logo.png" alt="logo" height={65} width={230} />
//                         </Link>
//                         <button
//                             className={`navbar-toggler collapsed`}
//                             type="button"
//                             data-bs-toggle="collapse"
//                             data-bs-target="#navbarSupportedContent"
//                             aria-controls="navbarSupportedContent"
//                             aria-expanded={navbar ? "true" : "false"}
//                             aria-label="Toggle navigation">
//                             <Image src="/assets/img/menu.png" alt="menu" onClick={() => setNavbar(true)} className="w-100 h-auto" width={50} height={30} />
//                             {/* <span className="navbar-toggler-icon" /> */}
//                         </button>
//                         <div className={`collapse navbar-collapse ${navbar ? "show" : "collapse"} nav-bar`} id="navbarSupportedContent">
//                             <ul className="navbar-nav mb-2 mx-lg-4 xl-mx-5 mb-lg-0">
//                                 <li className="nav-item">
//                                     <Link className="nav-link active" aria-current="page" href="/" onClick={closeNavbar}>
//                                         Home
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link active" aria-current="page" href="/finex" onClick={closeNavbar}>
//                                         FineX
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link active" aria-current="page" href="/about-us" onClick={closeNavbar}>
//                                         About Us
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link active" aria-current="page" href="/blog" onClick={closeNavbar}>
//                                         Blog
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item">
//                                     <Link className="nav-link active" aria-current="page" href="/contact-us" onClick={closeNavbar}>
//                                         Contact Us
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item d-lg-none">
//                                     <Link className="nav-link active" aria-current="page" href="https://finex.bluswap.co/login" onClick={closeNavbar}>
//                                         Sign In
//                                     </Link>
//                                 </li>
//                                 <li className="nav-item d-lg-none">
//                                     <Link className="nav-link active btn btn-green px-4" aria-current="page" href="https://finex.bluswap.co/register" onClick={closeNavbar}>
//                                         Sign Up
//                                     </Link>
//                                 </li>
//                             </ul>
//                         </div>
//                         <Link className="nav-link active text-black d-none d-lg-block px-4 me-3" aria-current="page" href="https://finex.bluswap.co/login" onClick={closeNavbar}>
//                             Sign In
//                         </Link>
//                         <Link className="nav-link d-none d-lg-block active btn btn-green px-4" aria-current="page" href="https://finex.bluswap.co/register" onClick={closeNavbar}>
//                             Sign Up
//                         </Link>
//                     </div>
//                 </nav>
//             </header>
//         </>
//     )
// }
