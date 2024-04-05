import React from 'react';
import Header from './Header';
import Footer from './Footer';
import {Helmet, HelmetProvider} from "react-helmet-async"

const Layout = ({ children, title, description, keyword, author, viewport}) => {
  return (
    <div>
      <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="description" content={description} />
          <meta name="keywords" content={keyword} />
            <meta name="author" content={author} />
              <meta name="viewport" content={viewport} />
              </Helmet>
              </HelmetProvider>
              <Header />
              <main className='pt-[117.6px] bg-gray-100 dark:bg-[#323232] '>
                {children}
              </main>
              <Footer />
            </div>
            )
            Layout.defaultProps = {
              title: "EcoMart - an E-commerce Web App",
              description: "Discover a wide range of products at EcoMart, your ultimate destination for online shopping. From electronics to fashion, find everything you need. Powered by MERN stack for seamless performance.",
              author: "Henna Maria",
              keyword: "MERN e-commerce, online shopping, electronics, fashion, Shopify, web app, MERN stack, e-commerce platform, digital marketplace",
              viewport: "width=device-width, initial-scale=1.0"
            }
}

            export default Layout