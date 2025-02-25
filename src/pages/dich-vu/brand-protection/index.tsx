import bgBrand from '@/assets/images/tools/brand-background.jpg';
import LayoutPage from '@/components/Layout/Layout';
import Image from 'next/legacy/image';
const BrandProtection = () => {
  const process = [
    { text: 'Xác định phạm vi, mục tiêu mức độ' },
    { text: 'Tiến hành thu thập thông tin' },
    { text: 'Cấp tài khoản đăng nhập hệ thống' },
    { text: 'Phân tích thông tin' },
    { text: 'Thực hiện cảnh báo cho tổ chức' },
  ];
  return (
    <LayoutPage title="Theo dõi, cảnh báo sớm về các kết nối độc hại của tổ chức | Tập đoàn Bất động sản Thiên Khôi">
      <section
        className="about-section-three"
        style={{ backgroundColor: 'whitesmoke' }}
      >
        <div className="bg bg-pattern-7" />
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2  mt-3 ">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Giới thiệu</span>
                  <h2>Dịch vụ Bảo vệ thương hiệu</h2>
                </div>
                <div className=" d-inline-flex ">
                  <div className="text">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Bảo vệ thương hiệu là yếu tố quan trọng để duy trì danh
                    tiếng của tổ chức trong thị trường ngày nay. Đối mặt với
                    những rủi ro đa dạng như website giả mạo với mục đích lừa
                    đảo trực tuyến, hay sự xuất hiện của các trang web có domain
                    tương đồng, nhằm mục đích lợi dụng nhầm lẫn từ phía người
                    dùng và tiềm ẩn mã độc, việc bảo vệ thương hiệu của tổ chức
                    trên không gian mạng trở nên ngày càng quan trọng.{' '}
                  </div>
                </div>
                <div className="d-inline-flex ">
                  <div className="text">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Khi Internet phát triển mạnh mẽ, việc duy trì và bảo vệ
                    thương hiệu không chỉ là nhiệm vụ đơn lẻ mà còn là tính liên
                    tục và đồng bộ. Giải pháp bảo vệ thương hiệu là dịch vụ cung
                    cấp cho tổ chức, mang đến khả năng phát hiện và xử lý nhanh
                    chóng vi phạm thương hiệu trên môi trường mạng. Điều này
                    giúp tổ chức bảo vệ uy tín và lòng tin của khách hàng, giảm
                    thiểu rủi ro, duy trì sự ổn định trong hoạt động kinh doanh.{' '}
                  </div>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12 ">
              <div className="image-box" style={{ padding: 20 }}>
                <figure className="image-1 ">
                  <Image style={{ borderRadius: 20 }} src={bgBrand} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-us call-to-action">
        <div className="bg bg-pattern-6" />
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Ưu thế</span>
            <h2>Lợi ích mang lại cho khách hàng</h2>
          </div>
          <div className="row">
            {/* Feature Block */}
            <div className="feature-block col-lg-3 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                </div>
                <h6 className="title">
                  Cung cấp tài khoản truy cập vào hệ thống trực tuyến giám sát
                  liên tục 24/7 bảo vệ thương hiệu của tổ chức.
                </h6>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-3 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                </div>
                <h6 className="title">
                  Phát hiện sớm website với tên miền gần giống tên miền chính
                  thức của tổ chức thông qua sử dụng 20+ thuật toán tiên tiến.
                </h6>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-3 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                </div>
                <h6 className="title">
                  Phát hiện các website có tên miền không giống nhưng có nội
                  dung gần giống website chính thức
                </h6>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-3 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                </div>
                <h6 className="title">
                  Cung cấp giao diện trực tuyến để trao đổi và có các chuyên gia
                  hỗ trợ xử lý vấn đề thuận lợi và hiệu quả
                </h6>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-3 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                </div>
                <h6 className="title">
                  {' '}
                  Đánh giá mức độ vi phạm, độc hại của website vi phạm thương
                  hiệu.
                </h6>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-3 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                </div>
                <h6 className="title">
                  Thống kê tỉ lệ và tần suất của các website vi phạm thương hiệu
                  của tổ chức
                </h6>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-3 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                </div>
                <h6 className="title">
                  {' '}
                  Thống kê chi tiết kết quả của các website vi phạm thương hiệu.
                </h6>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-3 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                </div>
                <h6 className="title">
                  Báo cáo các vấn đề vi phạm thương hiệu ngay khi phát hiện
                </h6>
              </div>
            </div>
            {/* Info Banner */}
            {/* <div class="info-banner col-lg-6 col-md-12 col-sm-12 wow fadeInRight"  data-wow-delay="400ms">
					<div class="content-box">
						<figure class="image"><img src="https://via.placeholder.com/567x253" alt=""></figure>
						<h4 class="title">Thiên Khôi Home Wifi</h4>
						<div class="price">Starting From <span class="color2">$49.9</span> / <small>Month</small></div>
						<div class="btn-box animate-2">
							<Link href="page-pricing.html" class="theme-btn btn-style-one"><span class="btn-title">Get Started Now <i class="fa fa-arrow-right"></i></span></a>
						</div>
					</div>
				</div> */}
          </div>
        </div>
      </section>
      <section className="why-choose-us call-to-action">
        <div className="bg bg-pattern-4" />
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title ">Quy trình</span>
            <h2 className="text-white">Quy trình thực hiện</h2>
          </div>
          <div className="row">
            {process.map((service, index) => (
              <div
                className="feature-block col-lg-4 col-md-6 col-sm-12"
                key={index}
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <h3 style={{ marginTop: '10px' }}>
                      {String(index + 1).padStart(2, '0')}
                    </h3>
                  </div>
                  <p className="title">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </LayoutPage>
  );
};

export default BrandProtection;
