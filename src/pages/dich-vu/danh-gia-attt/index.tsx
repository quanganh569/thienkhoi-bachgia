import blackbox from '@/assets/images/icons/blackbox.jpeg';
import graybox from '@/assets/images/icons/graybox.jpg';
import whitebox from '@/assets/images/icons/whitebox.jpg';
import dgBG from '@/assets/images/tools/danh-gia-background.jpg';
import LayoutPage from '@/components/Layout/Layout';
import Image from 'next/legacy/image';

const APTIoC = () => {
  return (
    <LayoutPage title="Đánh giá an toàn thông tin | Tập đoàn Bất động sản Thiên Khôi">
      <section
        className="about-section-three"
        style={{ backgroundColor: 'whitesmoke' }}
      >
        <div className="bg bg-pattern-7" />
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2  mt-5 ">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Giới thiệu</span>
                  <h2>Kiểm tra, đánh giá an toàn thông tin</h2>
                </div>
                <div className=" d-inline-flex ">
                  <div className="text">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Đánh giá An toàn thông tin (an toàn thông tin) là hoạt động
                    kiểm tra, rà soát, phát hiện sớm các lỗ hổng mà hệ thống
                    CNTT của tổ chức có thể bị Hacker sử dụng để tấn công. Quá
                    trình đánh giá ngoài việc chỉ ra các lỗ hổng tiềm tàng trong
                    hệ thống còn giúp cho tổ chức có cái nhìn chung nhất về tình
                    hình an toàn thông tin của các hệ thống CNTT hiện hữu, từ đó
                    đưa ra được các quy trình và giải pháp để hạn chế các lỗ
                    hổng này trong tương lai.
                  </div>
                </div>
                <div className="d-inline-flex ">
                  <div className="text">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Lợi ích mang lại cho khách hàng:
                  </div>
                </div>
                <ul className="list-style-two">
                  <li>
                    <i className="far fa-check-circle" />
                    Xác định các điểm yếu bảo mật trong hệ thống.
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Xác định được các nguy cơ, rủi ro mất an toàn thông tin, mức
                    độ ảnh hưởng mà tổ chức gặp phải khi bị tấn công vào hệ
                    thống.
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Được tư vấn và đưa ra phương án khắc phục các điểm yếu mà hệ
                    thống gặp phải.
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Được tư vấn trong việc thiết lập chính sách về quản lý cũng
                    như kỹ thuật để đảm bảo an toàn thông tin cho hệ thống.
                  </li>
                </ul>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12 ">
              <div className="image-box" style={{ padding: 20 }}>
                <figure className="image-1 ">
                  <Image style={{ borderRadius: 20 }} src={dgBG} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-us-three">
        <div className="container pt-70 pb-10">
          <div className="sec-title text-center">
            <span className="sub-title">Phương pháp</span>
            <h2>Phương pháp thực hiện</h2>
          </div>

          <div className="row">
            {/* Feature Block Three */}
            <div className="feature-block-three col-lg-4 col-md-6 col-md-12">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <a href="#">
                      <img
                        src={blackbox.src}
                        alt=""
                        style={{
                          width: '368px',
                          height: 400,
                        }}
                      />
                    </a>
                  </figure>
                </div>
                <div className="content-box ">
                  <span className="cat">
                    Dịch vụ đánh giá ATTT cơ bản (Blackbox)
                  </span>
                  <div className="price">
                    Chỉ yêu cầu cung cấp cách để truy cập đến hệ thống Phương
                    pháp đánh giá sẽ tiếp cận ứng dụng như một người dùng thường
                    bên ngoài hệ thống. Phương pháp này chỉ phát hiện những lỗ
                    hổng có thể dễ dàng tiếp cận từ bên ngoài, không thể phát
                    hiện được các rủi ro sâu bên trong hệ thống.
                  </div>
                </div>
              </div>
            </div>
            {/* Feature Block Three */}
            <div className="feature-block-three col-lg-4 col-md-6 col-md-12">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <a href="#">
                      <img
                        src={graybox.src}
                        style={{
                          width: '368px',
                          height: 400,
                        }}
                      />
                    </a>
                  </figure>
                </div>
                <div className="content-box">
                  <span className="cat">
                    Dịch vụ đánh giá ATTT nâng cao (Graybox)
                  </span>
                  <div className="price">
                    Yêu cầu cung cấp các thông tin theo từng phân quyền của
                    người dùng hệ thống Phương pháp đánh giá sẽ tiếp cận ứng
                    dụng như một người dùng hệ thống, đánh giá an toàn thông tin
                    đối với các nghiệp vụ của hệ thống, thực hiện các đánh giá
                    về các lỗ hổng cho phép leo thang, vượt quyền bên trong hệ
                    thống. Phương pháp này có thể phát hiện những lỗ hổng được
                    các rủi ro sâu bên trong hệ thống.
                  </div>
                </div>
              </div>
            </div>
            {/* Feature Block Three */}
            <div className="feature-block-three col-lg-4 col-md-6 col-md-12">
              <div className="inner-box">
                <div className="image-box">
                  <figure className="image">
                    <a href="#">
                      <img
                        src={whitebox.src}
                        style={{
                          width: '368px',
                          height: 400,
                        }}
                      />
                    </a>
                  </figure>
                </div>
                <div className="content-box">
                  <span className="cat">
                    Dịch vụ đánh giá ATTT toàn diện (Whitebox)
                  </span>
                  <div className="price">
                    Yêu cầu cung cấp toàn bộ thông tin về hệ thống Phương pháp
                    đánh giá sẽ tiếp cận ứng dụng một cách toàn diện, như một
                    người trực tiếp phát triển ứng dụng. Phương pháp này có thể
                    phát hiện những lỗ hổng được các rủi ro sâu bên trong hệ
                    thống, phát hiện các lỗ hổng trên mã nguồn, trên các thành
                    phần không trực tiếp được sử dụng ra bên ngoài với người
                    dùng hệ thống.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-us call-to-action ">
        <div className="bg bg-pattern-5" />

        <div className="sec-title text-center">
          <span className="sub-title">Hình thức</span>
          <h2>Hình thức thực hiện</h2>
        </div>
        <div className="auto-container">
          <div className="row">
            {/* Pricing Block */}
            <div className="pricing-block col-lg-6 col-md-6 col-sm-12  ">
              <div className="inner-box">
                <div className="content-box">
                  <div className="title-box">
                    <span className="sub-title">
                      Đánh giá an toàn thông tin
                    </span>
                    <h4 className="title">(Security Audit)</h4>
                  </div>
                  <ul className="features">
                    <li>
                      <i className="fa fa-check" />
                      Đánh giá kiến trúc an toàn thông tin
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Đánh giá hệ thống máy trạm, máy chủ
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Đánh giá hạ tầng mạng
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Đánh giá các giải pháp an toàn thông tin
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Đánh giá các ứng dụng nghiệp vụ
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Đánh giá cơ sở dữ liệu
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Đánh giá quy trình và chính sách
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Pricing Block */}
            <div className="pricing-block col-lg-6 col-md-6 col-sm-12  ">
              <div className="inner-box">
                <div className="content-box">
                  <div className="title-box">
                    <span className="sub-title">Thử nghiệm xâm nhập</span>
                    <h4 className="title">(Penetration Testing)</h4>
                  </div>
                  <ul className="features">
                    <li>
                      <i className="fa fa-check" />
                      Thử nghiệm xâm nhập hệ thống Website
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Thử nghiệm xâm nhập hệ thống mạng
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Thử nghiệm xâm nhập máy chủ, trung tâm dữ liệu
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Thử nghiệm xâm nhập ứng dụng di dộng
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pricing-section" style={{ background: 'white' }}>
        <div className="bg bg-pattern-4" />

        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Quy trình</span>
            <h2 className="text-white">Quy trình thực hiện</h2>
          </div>
          <div className="row">
            {/* Feature Block */}
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12  "
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeInUp',
              }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <h3 style={{ marginTop: '10px' }}>01</h3>
                </div>
                <p className="title">Khách hàng gửi yêu cầu đánh giá</p>
              </div>
            </div>
            {/* Feature Block */}
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12  "
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeInUp',
              }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <h3 style={{ marginTop: '10px' }}>02</h3>
                </div>
                <p className="title">
                  Thiên Khôi khảo sát hệ thống cần đánh giá và xây dựng kế
                  hoạch, phương án đánh giá
                </p>
              </div>
            </div>
            {/* Feature Block */}
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12  "
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeInUp',
              }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <h3 style={{ marginTop: '10px' }}>03</h3>
                </div>
                <p className="title">
                  Khách hàng cung cấp thông tin và môi trường cần thiết theo
                  phương án đánh giá được phê duyệt
                </p>
              </div>
            </div>
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12  "
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeInUp',
              }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <h3 style={{ marginTop: '10px' }}>04</h3>
                </div>
                <p className="title">Thiên Khôi thực hiện đánh giá</p>
              </div>
            </div>
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12  "
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeInUp',
              }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <h3 style={{ marginTop: '10px' }}>05</h3>
                </div>
                <p className="title">
                  Thiên Khôi gửi kết quả đánh giá và hướng dẫn khắc phục các lỗ
                  hổng phát hiện được
                </p>
              </div>
            </div>
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12  "
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeInUp',
              }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <h3 style={{ marginTop: '10px' }}>06</h3>
                </div>
                <p className="title">
                  Khách hàng khắc phục lỗ hổng theo hướng dẫn. Thông báo cho
                  Thiên Khôi sau khi đã khắc phục và yêu cầu đánh giá lại (Bước
                  1)
                </p>
              </div>
            </div>
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12  "
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeInUp',
              }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <h3 style={{ marginTop: '10px' }}>07</h3>
                </div>
                <p className="title">
                  Thiên Khôi thực hiện tái đánh giá và thông báo kết quả cho
                  khách hàng
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutPage>
  );
};

export default APTIoC;
