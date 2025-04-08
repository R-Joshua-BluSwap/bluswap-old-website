/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Blog() {

  const router = useRouter();
  const { slug } = router.query; // Get the slug from the URL

  const [blogs, setBlogs] = useState([{
    id: 1,
    title: "Sessions 2023: Powering growth for the internet economy",
    description: "More than 250,000 companies now use Stripe's revenue and finance tools, and our automated revenue recovery features earned businesses an extra $3.8 billion in 2022.",
    metaTitle: "Powering growth for the internet economy – bluSwap",
    metaDescription: "More than 250,000 companies now use Stripe's revenue and finance tools, and our automated revenue recovery features earned businesses an extra $3.8 billion in 2022.",
    metaKeywords: "bluSwap, bluSwap blogs, Fintech solutions, payment solution, Fintech, bluSwap&#39;s Fintech, Payment Industry Future, What is Fintech, Future of fintech, Future of Payment Industry, AI in Payment processing.",
    canonicalURL: "https://bluswap.co/blog/sessions-2023-powering-growth-for-the-internet-economy",
    image: ""
  }, {
    id: 2,
    title: "What is fintech?",
    description: "More than 250,000 companies now use Stripe's revenue and finance tools, and our automated revenue recovery features earned businesses an extra $3.8 billion in 2022.",
    metaTitle: "What is fintech? - bluSwap",
    metaDescription: "Fintech's are companies that rely primarily on technology and cloud services and less so on physical locations to provide financial services to customers.",
    metaKeywords: "bluSwap, bluSwap blogs, Fintech, bluSwap's Fintech, What is Fintech, Future of fintech",
    canonicalURL: "https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-fintech",
    image: "assets/img/blogs/blog2.png"
  }, {
    id: 3,
    title: "The Evolution of the Payments Industry",
    description: "In the upcoming year, the payments industry will face elevated risk levels, heightened regulatory scrutiny, and substantial shifts in global standards.",
    metaTitle: "The Evolution of the Payments Industry - bluSwap",
    metaDescription: "Fintech's are companies that rely primarily on technology and cloud services and less so on physical locations to provide financial services to customers.",
    metaKeywords: "bluSwap's Fintech, Fintech,Future of Payment Industry, Payment Industry Future",
    canonicalURL: "https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-fintech",
    image: "assets/img/blogs/blog3.png"
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
      // Find the blog that matches the slug
      const foundBlog = blogs.find(blog => formatTitleForURL(blog.title) === slug);
      console.log(foundBlog)
      if (foundBlog) {
        setCurrentBlog(foundBlog);
      } else {
        // Handle case when blog is not found - could redirect to 404
        console.log('Blog not found');
        // Optional: router.push('/404');
      }
    }
  }, [slug, blogs]);

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
        <title>{currentBlog.metaTitle}</title>
        <meta name="description" content={`${currentBlog?.metaDescription}`} />
        <meta name="keywords" content={`${currentBlog?.metaKeywords}`} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <div className="fetched-img">
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
              src="/assets/img/blog-img.png"
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
        </div>
      </main>
    </>
  )
}
