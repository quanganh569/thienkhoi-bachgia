import dgBG from '@/assets/images/tools/daotao-background.jpg';
import LayoutPage from '@/components/Layout/Layout';
import Image from 'next/legacy/image';
const APTIoC = () => {
  return (
    <LayoutPage title="Đào tạo, diễn tập an toàn thông tin | Tập đoàn Bất động sản Thiên Khôi">
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
                  <h2>Đào tạo, huấn luyện, diễn tập an toàn thông tin</h2>
                </div>
                <div className=" d-inline-flex ">
                  <div className="text">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Đào tạo, diễn tập an toàn thông tin là hoạt động nhằm nâng
                    cao năng lực cho cán bộ làm công tác bảo đảm an toàn thông
                    tin cho tổ chức. Cán bộ tham gia đào tạo diễn tập không chỉ
                    được nâng cao năng lực chuyên môn mà còn được vận dụng kỹ
                    năng nhằm xử lý các tình huống tấn công mạng thông qua các
                    hình thức tập trận, tác chiến điện tử.
                  </div>
                </div>
                <div className=" d-inline-flex ">
                  <div className="text">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Cán bộ tham gia đào tạo diễn tập không chỉ được nâng cao
                    năng lực chuyên môn vào còn tích lũy được các kinh nghiệm
                    thực tế thông qua việc xử lý các hình huống tấn công mạng.
                    Hoạt động diễn tập được thực hiện qua hình thức tập trận với
                    các bài thi được mô phỏng và cập nhật theo các kỹ thuật tấn
                    công mới nhất.
                  </div>
                </div>
                <div className=" d-inline-flex ">
                  <div className="text">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Lợi ích mang lại cho khách hàng
                  </div>
                </div>
                <ul className="list-style-two">
                  <li>
                    <i className="far fa-check-circle" />
                    Nâng cao kỹ năng cơ bản về An toàn thông tin.
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Kỹ năng xử lý trước những sự cố tấn công mạng.
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Kỹ năng điều tra số.
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

      <section className="why-choose-us call-to-action ">
        <div className="bg bg-pattern-2" />

        <div className="sec-title text-center">
          <span className="sub-title">Hình thức</span>
          <h2>Hình thức thực hiện</h2>
        </div>
        <div className="auto-container">
          <div className="row">
            {/* Pricing Block */}
            <div className="pricing-block col-lg-6 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="content-box">
                  <div className="title-box">
                    <span className="sub-title">Đào tạo an toàn thông tin</span>
                    <h4 className="title">(Cyber Security Training)</h4>
                  </div>
                  <ul className="features">
                    <li>
                      <i className="fa fa-check" />
                      Khóa đào tạo nhận thức an toàn thông tin
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Khóa đào tạo nâng cao kỹ thuât an toàn thông tin
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Khóa đào tạo ứng cứu sự cố mất an toàn thông tin
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Khóa điều tra số và phân tích mã độc
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Giám sát và phân tích an toàn thông tin
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Pricing Block */}
            <div
              className="pricing-block col-lg-6 col-md-6 col-sm-12 "
              data-wow-delay="300ms"
              style={{
                visibility: 'visible',
                animationDelay: '300ms',
                animationName: 'fadeInUp',
              }}
            >
              <div className="inner-box">
                <div className="content-box">
                  <div className="title-box">
                    <span className="sub-title">
                      Diễn tập an toàn thông tin
                    </span>
                    <h4 className="title">(Cyber Security Drill)</h4>
                  </div>
                  <ul className="features">
                    <li>
                      <i className="fa fa-check" />
                      Hệ thống diễn tập do Thiên Khôi xây dựng và làm chủ
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Thiên Khôi xây dựng kịch bản mô phỏng theo tình huống tấn
                      công thực tế
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Kịch bản 100% liên quan đến các nội dung đã được đào tạo
                    </li>
                    <li>
                      <i className="fa fa-check" />
                      Mang tính chất đối kháng cao, thi đấu cao
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-section">
        <div className="bg bg-pattern-4" />

        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Quy trình</span>
            <h2 className="text-white">Quy trình thực hiện</h2>
          </div>
          <div className="row">
            {/* Feature Block */}
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12 "
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
                <p className="title">
                  Khách hàng gửi yêu cầu nội dung đào tạo, diễn tập
                </p>
              </div>
            </div>
            {/* Feature Block */}
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12 "
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
                  Thiên Khôi xây dựng chi tiết nội dung đào tạo, diễn tập và dự
                  trù thời gian đào tạo
                </p>
              </div>
            </div>
            {/* Feature Block */}
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12 "
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
                  Khách hàng duyệt chi tiết nội dung đào tạo, diễn tập
                </p>
              </div>
            </div>
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12 "
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
                <p className="title">
                  Thiên Khôi xây dựng tài liệu đào tạo theo nội dung chi tiết,
                  xây dựng kịch bản diễn tập
                </p>
              </div>
            </div>
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12 "
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
                  Thiên Khôi khảo sát thực tế phòng đào tạo, diễn tập
                </p>
              </div>
            </div>
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12 "
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
                  Thiên Khôi chuẩn bị máy tính, công cụ phục vụ đào tạo, diễn
                  tập
                </p>
              </div>
            </div>
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12 "
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
                <p className="title">Thiên Khôi thực hiện đào tạo</p>
              </div>
            </div>
            <div
              className="feature-block col-lg-3 col-md-6 col-sm-12 "
              data-wow-delay="200ms"
              style={{
                visibility: 'visible',
                animationDelay: '200ms',
                animationName: 'fadeInUp',
              }}
            >
              <div className="inner-box">
                <div className="icon-box">
                  <h3 style={{ marginTop: '10px' }}>08</h3>
                </div>
                <p className="title">Thiên Khôi thực hiện diễn tập</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutPage>
  );
};

export default APTIoC;
