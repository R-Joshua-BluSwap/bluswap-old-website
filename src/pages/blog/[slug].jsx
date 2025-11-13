/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import dynamic from "next/dynamic";

export default function Blog() {

  const router = useRouter();
  const { slug } = router.query; // Get the slug from the URL

  const [blogs] = useState([
    // {
  //   id: 1,
  //   title: "Sessions 2023: Powering growth for the internet economy",
  //   description: "More than 250,000 companies now use Stripe's revenue and finance tools, and our automated revenue recovery features earned businesses an extra $3.8 billion in 2022.",
  //   metaTitle: "Powering growth for the internet economy – bluSwap",
  //   metaDescription: "More than 250,000 companies now use Stripe's revenue and finance tools, and our automated revenue recovery features earned businesses an extra $3.8 billion in 2022.",
  //   metaKeywords: "bluSwap, bluSwap blogs, Fintech solutions, payment solution, Fintech, bluSwap&#39;s Fintech, Payment Industry Future, What is Fintech, Future of fintech, Future of Payment Industry, AI in Payment processing.",
  //   canonicalURL: "https://bluswap.co/blog/sessions-2023-powering-growth-for-the-internet-economy",
  //   image: ""
  // },
   {
    id: 1,
    title: "What is Fintech? Definition, Examples & Benefits | bluSwap",
    description: "Understand fintech — definitions, key players and real-world examples. Get practical insights for businesses and developers. Learn more.",
    metaTitle: "What is Fintech? Definition, Examples & Benefits | bluSwap",
    metaDescription: "Understand fintech — definitions, key players and real-world examples. Get practical insights for businesses and developers. Learn more.",
    metaKeywords: "bluSwap, bluSwap blogs, Fintech, bluSwap's Fintech, What is Fintech, Future of fintech",
    canonicalURL: "https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-fintech",
    image: "/assets/img/blogs/blog2.png",
    url: "/blog/what-is-fintech",
    component: 'blog1'
  }, {
    id: 2,
    title: "Evolution of Payments: From Cash to Digital | bluSwap",
    description: "Explore the payments industry's journey key innovations, regulation, and future opportunities for businesses. Learn how to adapt and grow. Explore now.",
    metaTitle: "Evolution of Payments: From Cash to Digital | bluSwap",
    metaDescription: "Explore the payments industry's journey key innovations, regulation, and future opportunities for businesses. Learn how to adapt and grow. Explore now.",
    metaKeywords: "bluSwap's Fintech, Fintech, Future of Payment Industry, Payment Industry Future",
    canonicalURL: "https://www.bluswap.co/blog/the-future-of-ai-in-payment-processing",
    image: "/assets/img/blogs/blog3.png",
    url: "/blog/the-evolution-of-the-payments-industry",
    component: 'blog2'
  },  {
    id: 3,
    title: "AI in Payment Processing: Trends & Use Cases | bluSwap",
    description: "Discover how AI is reshaping payment processing, fraud detection, automation and real-time risk scoring. Read practical insights and strategies. Read now.",
    metaTitle: "AI in Payment Processing: Trends & Use Cases | bluSwap",
    metaDescription: "Discover how AI is reshaping payment processing, fraud detection, automation and real-time risk scoring. Read practical insights and strategies. Read now.",
    metaKeywords: "bluSwap, bluSwap blogs, Fintech, bluSwap's Fintech, Fintech, Future of Payment Industry, Payment Industry Future, Payment Service provider",
    canonicalURL: "https://www.bluswap.co/blog/the-future-of-ai-in-payment-processing",
    image: "",
    url: "/blog/the-future-of-ai-in-payment-processing",
    component: 'future_ai'
  }])

  const [currentBlog, setCurrentBlog] = useState(null);

  // Function to format title for URL comparison
  const formatTitleForURL = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  useEffect(() => {
    if (slug) {
      console.log('Current slug:', slug);
      console.log(formatTitleForURL(blogs[0].url))
      // Find the blog that matches the slug
      const foundBlog = blogs.find(blog => formatTitleForURL(blog.url) === `blog${slug}`);
      if (foundBlog) {
        setCurrentBlog(foundBlog);
      } else {
        // Handle case when blog is not found - could redirect to 404
        console.log('Blog not found');
        // Optional: router.push('/404');
      }
    }
  }, [slug, blogs]);

   const BlogComponent = dynamic(() => {
    // Use optional chaining to safely handle null currentBlog
    return currentBlog?.component 
      ? import(`@/pages/blog/${currentBlog.component}.jsx`)
      : Promise.resolve({ default: () => null }) // Fallback component when currentBlog is null
  });

  // If blog is still loading or not found
  if (!currentBlog) {
    return (
      <div className="container py-5">
        <p>Loading blog content...</p>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>{currentBlog.title}</title>
        {/* <meta name="description" content={currentBlog.description} /> */}
        <meta property="og:description" content={currentBlog.description} />
        <meta property="og:title" content={currentBlog.metaTitle} />
        <meta name="description" content={`${currentBlog?.metaDescription}`} />
        <meta name="keywords" content={`${currentBlog?.metaKeywords}`} />
        <meta name='canonical' href={`${currentBlog?.canonicalURL}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        {/* <h1 className="text-3xl font-bold mb-4">{currentBlog.title}</h1>
        <article dangerouslySetInnerHTML={{ __html: currentBlog.content }} /> */}
      <BlogComponent currentBlog={currentBlog} />
        {/* <div className="fetched-img">
          {currentBlog.image ? (
            <Image
              src={currentBlog.image}
              alt={currentBlog.title}
              height={400}
              width={1000}
              className='img-fluid'
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '22px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
              }}
            />
          ) : (
            <Image
              src="/assets/img/blog2.png"
              alt={currentBlog.title}
              height={400}
              width={1000}
              className='img-fluid'
              style={{
                width: '100%',
                height: '400px',
                objectFit: 'cover',
                borderRadius: '22px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.08)'
              }}
            />
          )}
        </div>
        <div className="blog-content">
          <div className="blog-heading">
            <h1>{currentBlog?.title}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              molestie leo nunc, id bibendum justo venenatis non. Maecenas vitae
              accumsan nunc. Nunc facilisis diam libero, ac iaculis dolor viverra sed.
              In faucibus euismod dolor ac fermentum. Ut dapibus enim quis enim
              pharetra, vel lacinia leo laoreet. Pellentesque quis dapibus ipsum, in
              consequat elit. Sed tempor metus dolor, eu dapibus elit scelerisque ut.{" "}
            </p>
            <ul>
              <li>In finibus, ex eu suscipit condimentum, leo elit feugiat est, </li>
              <li>Id imperdiet justo lectus eu urna. Cras vehicula congue ex.</li>
              <li>Vel laoreet lorem laoreet eu. Praesent id bibendum velit.&nbsp;</li>
            </ul>
            <p>
              In faucibus euismod dolor ac fermentum. Ut dapibus enim quis enim
              pharetra, vel lacinia leo laoreet. Pellentesque quis dapibus ipsum, in
              consequat elit. Sed tempor metus dolor, eu dapibus elit scelerisque ut.{" "}
            </p>
          </div>
          <div className="blog-sec-heading">
            <h2>Sample Text</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              molestie leo nunc, id bibendum justo venenatis non. Maecenas vitae
              accumsan nunc. Nunc facilisis diam libero, ac iaculis dolor viverra sed.
              In faucibus euismod dolor ac fermentum. Ut dapibus enim quis enim
              pharetra, vel lacinia leo laoreet. Pellentesque quis dapibus ipsum, in
              consequat elit. Sed tempor metus dolor, eu dapibus elit scelerisque ut.{" "}
            </p>
            <ul>
              <li>In finibus, ex eu suscipit condimentum, leo elit feugiat est, </li>
              <li>Id imperdiet justo lectus eu urna. Cras vehicula congue ex.</li>
              <li>Vel laoreet lorem laoreet eu. Praesent id bibendum velit.&nbsp;</li>
            </ul>
            <p>
              In faucibus euismod dolor ac fermentum. Ut dapibus enim quis enim
              pharetra, vel lacinia leo laoreet. Pellentesque quis dapibus ipsum, in
              consequat elit. Sed tempor metus dolor, eu dapibus elit scelerisque ut.{" "}
            </p>
          </div>
          <div className="blog-sec-heading mb-5">
            <h2>Sample Text</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              molestie leo nunc, id bibendum justo venenatis non. Maecenas vitae
              accumsan nunc. Nunc facilisis diam libero, ac iaculis dolor viverra sed.
              In faucibus euismod dolor ac fermentum. Ut dapibus enim quis enim
              pharetra, vel lacinia leo laoreet. Pellentesque quis dapibus ipsum, in
              consequat elit. Sed tempor metus dolor, eu dapibus elit scelerisque ut.{" "}
            </p>
            <ul>
              <li>In finibus, ex eu suscipit condimentum, leo elit feugiat est, </li>
              <li>Id imperdiet justo lectus eu urna. Cras vehicula congue ex.</li>
              <li>Vel laoreet lorem laoreet eu. Praesent id bibendum velit.&nbsp;</li>
            </ul>
            <p>
              In faucibus euismod dolor ac fermentum. Ut dapibus enim quis enim
              pharetra, vel lacinia leo laoreet. Pellentesque quis dapibus ipsum, in
              consequat elit. Sed tempor metus dolor, eu dapibus elit scelerisque ut.{" "}
            </p>
          </div>
        </div> */}

      </main>
    </>
  )
}
