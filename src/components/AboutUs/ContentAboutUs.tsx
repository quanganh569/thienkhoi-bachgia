import Image from 'next/image';

import aboutus from '@/assets/images/background/thienkhoi.jpg';
import Link from 'next/link';
import FormContact from '../Careers/FormContact';

const ContentAboutUs = () => {
  return (
    <>
      <section
        className="about-section-three"
        style={{ backgroundColor: 'whitesmoke' }}
      >
        <div className="auto-container">
          <div className="row">
            <div className="sec-title text-center">
              <span className="sub-title">Về chúng tôi</span>
              <h2>
                Tập đoàn <br /> Bất động sản Thiên Khôi
              </h2>
            </div>
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 mt-5 ">
              <div className="inner-column">
                <h3>Giới thiệu chung</h3>
                <div className=" d-inline-flex ">
                  <div className="text flex justify-center items-center flex-row">
                    Thành lập từ năm 2020, Tập đoàn Bất động sản Thiên Khôi đã
                    bứt phá thần tốc để trở thành Công ty Môi giới hàng đầu trên
                    thị trường bất động sản Thổ cư tại Việt Nam. Sau 3 năm hoạt
                    động, Tập đoàn Bất động sản Thiên Khôi đã cán mốc hơn 24.000
                    nhân sự, 250 khối phòng kinh doanh, hơn 20 chi nhánh và trụ
                    sở đặt tại Thủ đô Hà Nội và Thành phố Hồ Chí Minh. Chúng tôi
                    đã môi giới thành công gần 20.000 bất động sản thổ cư, tổng
                    giá trị ước đạt gần 100.000 tỷ đồng. Bên cạnh đó, Thiên Khôi
                    đang triển khai mảng Môi giới dự án với tư duy chiến lược
                    phát triển khác biệt, hứa hẹn trở thành sàn giao dịch bất
                    động sản dự án top đầu thị trường.Thiên Khôi tự hào là đơn
                    vị được Sở Xây dựng cấp phép đào tạo và tổ chức thi chứng
                    chỉ hành nghề cho hàng ngàn Môi giới bất động sản trên toàn
                    quốc. Năm 2022, Thiên Khôi đã tiếp nhận hơn 15.000 Học viên
                    đến tham dự khóa đào tạo “Kỹ năng mua bán và đầu tư Bất động
                    sản” hoàn toàn MIỄN PHÍ.
                  </div>
                </div>
                {/* <h3>Chức năng nhiệm vụ</h3>
                <div className="d-inline-flex ">

                  <div className="text ">
                    Tập đoàn Bất động sản Thiên Khôi (trước
                    đây là Trung tâm Tư vấn và Hỗ trợ nghiệp vụ an toàn thông
                    tin) có chức năng, nhiệm vụ, quyền hạn và cơ cấu tổ chức
                    được quy định tại Quyết định số 1616/QĐ-BTTTT ngày
                    05/10/2018 của Bộ trưởng Bộ Thông tin và Truyền thông.
                  </div>
                </div> */}
              </div>
              <div className="about-block">
                <div className="inner">
                  <div className="icon-box">
                    <i className="icon fa-thin fa-map" />
                  </div>
                  <h6 className="title">Trụ sở chính</h6>
                  <p className="text ">
                    Tầng 2 tòa nhà MIPEC Tower, 229 Tây Sơn, Đống Đa, Hà Nội
                  </p>
                </div>
              </div>
              <div className="about-block">
                <div className="inner">
                  <div className="icon-box">
                    <i className="icon fa-thin fa-phone" />
                  </div>
                  <h6 className="title">Liên hệ:</h6>
                  <p className="text">
                    Điện thoại : 091 3739 716
                    {/* <br /> Email : ais@mic.gov.vn{' '}
                    <br /> Facebook : https://www.facebook.com/ThienKhoiGroup.RealEstate */}
                  </p>
                  <p className="text" />
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12 ">
              <div className="image-box" style={{ padding: 20 }}>
                <figure className="image-1 ">
                  <Image style={{ borderRadius: 20 }} src={aboutus} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us-two">
        <div className="auto-container">
          <div className="bg bg-pattern-7" />

          <div className="sec-title text-center">
            <span className="sub-title">Tầm nhìn & Sứ mệnh</span>
            <h2>Tập đoàn Thiên Khôi</h2>
          </div>
          <div className="row">
            {/* Features Column */}
            <div className="features-column col-lg-8 col-md-12 order-2 wow fadeInRight">
              <div className="inner-column">
                <div className="row g-0">
                  {/* Feature Block Two */}
                  <div className="feature-block-two col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon flaticon-router" />
                      </div>
                      <h5 className="title">
                        <a href="page-service-details.html">
                          Nguồn nhà phong phú
                        </a>
                      </h5>
                      <div className="text">
                        Hơn 50.000 căn nhà xác thực được quản lý bới các chuyên
                        gia giỏi Dữ liệu hơn 100.000 khách hàng sẵn có
                      </div>
                    </div>
                  </div>
                  {/* Feature Block */}
                  <div className="feature-block-two col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon flaticon-call" />
                      </div>
                      <h5 className="title">
                        <a href="page-service-details.html">
                          Ứng dụng công nghệ 4.0
                        </a>{' '}
                      </h5>
                      <div className="text">
                        Thiên Khôi app có mặt trên các nền tảng hỗ trợ khớp nối
                        nhu cầu nhanh nhất Tra cứu thông tin sổ đỏ, quy hoạch
                        trực tuyến
                      </div>
                    </div>
                  </div>
                  {/* Feature Block */}
                  <div className="feature-block-two col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon flaticon-headphone" />
                      </div>
                      <h5 className="title">
                        <a href="page-service-details.html">
                          Đào tạo chuyên nghiệp
                        </a>
                      </h5>
                      <div className="text">
                        Giáo trình tổng hợp từ hơn 10 năm kinh nghiệm của hàng
                        ngàn nhân sự giỏi, cầm tay chỉ việc thực tiễn song song
                        ký thuyết
                      </div>
                    </div>
                  </div>
                  {/* Feature Block */}
                  <div className="feature-block-two col-lg-6 col-md-6 col-sm-12">
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon flaticon-fire" />
                      </div>
                      <h5 className="title">
                        <a href="page-service-details.html">
                          Công bằng minh bạch
                        </a>
                      </h5>
                      <div className="text">
                        Chính nhân quân tử, các thông tin tới khách hàng, đồng
                        nghiệp là rõ ràng , minh b chữ “Tín trong nghề là hàng
                        đầu
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Info Banner */}
            <div className="info-banner-two col-lg-4 col-md-12 col-sm-12 wow fadeInLeft">
              <div className="content-box">
                <figure className="image">
                  <img src="https://via.placeholder.com/368x533" alt="" />
                </figure>

                <div className="price ">
                  Với sứ mệnh nâng tầm nghề Môi giới tại Việt Nam, chúng tôi
                  mong muốn đào tạo ra những đội ngũ Chuyên viên Kinh doanh
                  chuyên nghiệp, đa dạng độ tuổi, tiếp thu tư duy kinh doanh
                  thời đại mới, đặt tự tôn nghề nghiệp lên cao nhất <br />
                  <small>thu nhập ít nhất </small>
                  <strong className="amount">36tr</strong> /{' '}
                  <small>tháng</small>
                </div>
                <div className="btn-box animate-2">
                  <a
                    href="page-pricing.html"
                    className="theme-btn btn-style-one"
                  >
                    <span className="btn-title ">
                      <Link href="/tuyen-dung" className="text-white">
                        Tham gia ngay
                      </Link>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FormContact />
    </>
  );
};
export default ContentAboutUs;
