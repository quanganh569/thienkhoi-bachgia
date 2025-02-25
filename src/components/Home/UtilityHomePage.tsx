// Import necessary components and libraries
import bg from '@/assets/images/background/red.jpg';
import daotao from '@/assets/images/tools/daotao.png';
import dinhgia from '@/assets/images/tools/dinhgia.png';
import moigioi from '@/assets/images/tools/moigioi.png';
import quanly from '@/assets/images/tools/quanly.png';
import tuvan from '@/assets/images/tools/tuvan.png';

import Image from 'next/legacy/image';
import Link from 'next/link';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Swiper general CSS
// Dynamically import Swiper to enable lazy loading (no SSR)

// Use getStaticProps to fetch tool data during build time for better performance

// Main component rendering the tools using Swiper
const UtilityHomePage = () => {
  const tools = [
    {
      title: 'Tư vấn và đầu tư Bất động sản',
      imageUrl: tuvan,
    },
    {
      title: 'Đào tạo môi giới Bất động sản',
      imageUrl: daotao,
    },
    {
      title: 'Môi giới Bất động sản',
      imageUrl: moigioi,
    },
    {
      title: 'Định giá Bất động sản',
      imageUrl: dinhgia,
    },

    {
      title: 'Quản lý Bất động sản',
      imageUrl: quanly,
    },
  ];
  return (
    <div id="dich-vu">
      <section className="movies-section pull-up">
        <div
          className="bg bg-image"
          style={{
            backgroundImage: `url(${bg.src})`,
          }}
        />
        <div className="auto-container-fluid">
          <div className="sec-title text-center light">
            <span className="sub-title">Lĩnh vực</span>
            <h2>Lĩnh vực hoạt động</h2>
          </div>

          <div
            className="container-fluid "
            style={{
              paddingLeft: '3rem' /* Adjust this value for the left padding */,
              paddingRight:
                '3rem' /* Adjust this value for the right padding */,
            }}
          >
            <Swiper
              spaceBetween={10}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
            >
              {/* Tool Block */}
              {tools.map((item: any, index: number) => (
                <SwiperSlide key={index}>
                  <div key={index}>
                    <Link href={'#'} title={item.title}>
                      <div className="movie-block mb-5">
                        <div className="inner-box">
                          <div className="image-box">
                            <figure
                              className="image"
                              style={{ height: '100%', width: '100%' }}
                            >
                              <Image
                                src={item.imageUrl}
                                alt={item.title}
                                width={400} // Adjust width
                                height={350} // Adjust height
                                layout="responsive"
                              />
                            </figure>
                          </div>
                          <div className="content-box">
                            <h5 className="title ">{item.title}</h5>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="auto-container mx-40">
            <div className="cta-box ">
              <div className="info-box">
                <i className="icon fa fa-wifi"></i>
                <div className="text">Liên hệ với chúng tôi :</div>
                <h4 className="title">
                  <a href="tel:012345789000">091 3739 716</a>
                </h4>
              </div>
              <figure className="image">
                <img
                  src="https://ncsc.zepto.vn/images/icons/dotted-map.png"
                  alt=""
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UtilityHomePage;
