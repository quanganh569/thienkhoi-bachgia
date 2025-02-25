import Footer from '@/components/Layout/Footer';
import { Header } from '@/components/Layout/Header';
import Head from 'next/head';
import React from 'react';
type LayoutPageProps = {
  children?: React.ReactNode;
  title?: any;
};
const LayoutPage = ({ children, title }: LayoutPageProps) => {
  return (
    <div>
      <Head>
        <title>{title || 'Tập đoàn Bất động sản Thiên Khôi'}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
};

export default LayoutPage;
