/* eslint-disable react/no-unescaped-entities */
import logo from '@/assets/images/logo-tk.png';

import BackToTop from '@/components/common/BackToTop';
import Image from 'next/legacy/image';
import Link from 'next/link';

const Footer = () => {
  const dichvu = [
    {
      label: 'Đống Đa:  Số 71 Hoàng Cầu, phường Ô Chợ Dừa, quận Đống Đa',
    },
    {
      label:
        'Trung tâm:  Số 2 ngõ 4 Đặng Văn Ngữ, phường Trung Tự, quận Đống Đa',
    },
    {
      label:
        'Thanh Xuân:  34 Sunrise D, khu đô thị The Manor Central Park, Nguyễn Xiển, phường Đại Kim, quận Hoàng Mai.',
    },
    {
      label:
        'Hoàng Mai:  L1-355, khu đô thị Louis Hoàng Mai, Đền Lừ 2, phường Hoàng Văn Thụ, quận Hoàng Mai.',
    },
    {
      label:
        'Cầu Giấy:  Số 37 Nguyễn Văn Huyên, phường Quan Hoa, quận Cầu Giấy.',
    },
    {
      label:
        'Hà Đông:  LK V5A-25, khu đô thị Văn Phú, phường Phú La, quận Hà Đông.',
    },
    {
      label: 'Long Biên:  Số 139 Hồng Tiến, phường Bồ Đề, quận Long Biên.',
    },
    {
      label:
        'Từ Liêm:  B14-BT1, khu đô thị mới Mỹ Đình 2, Bùi Xuân Phái, phường Mỹ Đình 2, quận Nam Từ Liêm.',
    },
    {
      label:
        ' Thanh Trì:  LK 14-25, khu tái định cư Tứ Hiệp, xã Tứ Hiệp, huyện Thanh Trì.',
    },
    {
      label:
        ' Gia Lâm:  Sao Biển 22-02, khu đô thị Vinhomes Ocean Park, xã Đa Tốn, huyện Gia Lâm.',
    },
    {
      label:
        ' Hai Bà Trưng:  Park 9, phân khu Park Hill, khu đô thị Vinhomes Times City, 485 Minh Khai, phường Vĩnh Tuy, quận Hai Bà Trưng.',
    },
    {
      label: ' Đông Anh:  Số 21 Vân Trì, xã Vân Nội, huyện Đông Anh.',
    },
  ];

  const userLinks = [
    { href: '/', label: 'Trang chủ' },
    // Uncomment the following line if you want to add "Giới thiệu" in the future
    { href: '/gioi-thieu', label: 'Giới thiệu' },
    { href: '/dao-tao', label: 'Đào tạo & Quyền lợi' },
    { href: '/tuyen-dung', label: 'Tuyển dụng' },
    { href: '/lien-he', label: 'Liên hệ' },
  ];
  return (
    <footer className="main-footer ">
      <div className="bg bg-pattern-3" />
      {/* Footer Uppper */}
      <div className="footer-upper">
        <div className="auto-container">
          <div className="row">
            {/* logo box */}
            <div className="logo-box col-lg-4 col-md-12">
              <div className="inner">
                <div className="logo">
                  <Link href="/" title="Trang chủ">
                    <Image
                      src={logo}
                      // width={}
                      height={100}
                      alt="Tập đoàn Bất động sản Thiên Khôi"
                      loading="lazy"
                    />
                  </Link>
                </div>
              </div>
            </div>
            {/* Contact info Block */}
            <div className="contact-info-block col-lg-4 col-md-6">
              <div className="inner">
                <i className="icon lnr lnr-icon-phone-handset" />
                <span className="sub-title">Liên hệ</span>
                <div className="text">
                  <Link href="tel:091 3739 716" title="Số điện thoại liên hệ">
                    091 3739 716
                  </Link>
                </div>
              </div>
            </div>
            {/* Contact info Block */}
            <div className="contact-info-block col-lg-4 col-md-6">
              <div className="inner">
                <i className="icon lnr lnr-icon-envelope1" />
                <span className="sub-title">Email</span>
                <div className="text">
                  <Link
                    href="mailto:tulinhchuchu@gmail.com"
                    title="Email liên hệ"
                  >
                    tulinhchuchu@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Widgets Section */}
      <div className="widgets-section">
        <div className="auto-container">
          <div className="row">
            {/* Footer COlumn */}
            <div className="footer-column col-lg-3 col-md-6">
              <div className="footer-widget about-widget">
                <h6 className="widget-title">Về Chúng tôi</h6>
                <div className="widget-content">
                  <div className="text">
                    Mỗi tuần, Tập đoàn đều tổ chức khóa đào tạo cho đội ngũ nhân
                    sự mới, số lượng tham gia dao động từ 300 - 600 Học viên,
                    đỉnh điểm lên đến 1.000 Học viên. Bên cạnh đó, Thiên Khôi
                    liên tục tổ chức đào tạo và kiểm tra năng lực của các thành
                    viên để trau dồi kịp thời kiến thức và kỹ năng.
                  </div>
                  <ul className="social-icon-two my-3">
                    <li>
                      <a href="https://facebook.com/ThienKhoiGroup.RealEstate">
                        <i className="fab fa-facebook-f" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Footer COlumn */}
            <div className="footer-column col-lg-3 col-md-6">
              <div className="widget links-widget">
                <h6 className="widget-title">Thiên Khôi</h6>
                <div className="widget-content">
                  <ul className="user-links">
                    {userLinks.map((link: any) => (
                      <li key={link.href}>
                        <Link href={link.href}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Footer COlumn */}
            <div className="footer-column col-lg-3 col-md-6">
              <div className="widget links-widget">
                <h6 className="widget-title">Trụ sở Thành Phố Hà Nội</h6>
                <div className="widget-content">
                  <ul className="user-links">
                    {dichvu.map((link: any) => (
                      <li>
                        <Link href={'/tuyen-dung'}>{link.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-column col-lg-3 col-md-6">
              <div className="widget links-widget">
                <h6 className="widget-title">Facebook</h6>
                <div className="widget-content">
                  <iframe
                    src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fthienkhoi.fb%2F&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                    width={340}
                    height={130}
                    style={{ border: 'none', overflow: 'hidden' }}
                    scrolling="no"
                    frameBorder={0}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  Footer Bottom */}
      <div className="footer-bottom">
        <div className="auto-container">
          <div className="copyright-text">
            © Bản quyền thuộc Phòng Bách Gia - Thiên Khôi .
          </div>
        </div>
      </div>
      <BackToTop />
    </footer>
  );
};

export default Footer;
