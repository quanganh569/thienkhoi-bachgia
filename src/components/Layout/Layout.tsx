import BASE_URL_STRAPI from '@/services/api/constants';
import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import { Header } from './Header';

type LayoutPageProps = {
  children?: React.ReactNode;
  title?: any;
  image?: any;
};
const LayoutPage = ({ children, title, image }: LayoutPageProps) => {
  return (
    <>
      <Head>
        <title>{title || 'Tập đoàn Bất động sản Thiên Khôi'}</title>
        <link rel="icon" href="/assets/images/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
        ></meta>
        <meta
          name="description"
          content="Thiên Khôi | Tập đoàn Bất động sản Thiên Khôi"
        />
        <meta property="og:image" content="/assets/images/logo.png" />

        <meta content={title} property="og:title" />
        <meta charSet="utf-8" />
        {/* Stylesheets */}
        <meta property="og:image" content={`${BASE_URL_STRAPI}${image}`} />
        {/* Responsive */}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default LayoutPage;
