import slBG from '@/assets/images/tools/san-lung-background.jpg';
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
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2 mt-5">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Giới thiệu</span>
                  <h2>Săn lùng mối nguy hại an toàn thông tin</h2>
                </div>
                <div className=" d-inline-flex ">
                  <div className="text">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Dịch vụ săn lùng mối nguy hại là dịch vụ sử dụng các công cụ
                    và tri thức của chuyên gia để phát hiện, phân tích và bóc gỡ
                    các dòng mã độc mà giải pháp bảo mật đang triển khai không
                    phát hiện ra hoặc không xử lý hiệu quả. Cung cấp thêm các
                    thông tin hữu ích như: con đường mã độc lây nhiễm vào hệ
                    thống, mục tiêu của đối tượng tấn công, tư vấn để có thể
                    ngăn chặn các tấn công tương tự trong tương lai.
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
                    RÀ SOÁT BẰNG VIỆC GIẢ ĐỊNH HỆ THỐNG ĐÃ BỊ TẤN CÔNG
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    TÌM KIẾM, PHÁT HIỆN SỚMCÁC CHIẾN DỊCH TẤN CÔNG MẠNG, MÃ ĐỘC
                    APT
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    ĐIỀU TRA,PHÂN TÍCH,BÓC GỠ MÃ ĐỘC
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    TRONG SUỐT VỚI NGƯỜI DÙNG
                  </li>
                </ul>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12 ">
              <div className="image-box" style={{ padding: 20 }}>
                <figure className="image-1 ">
                  <Image style={{ borderRadius: 20 }} src={slBG} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us call-to-action ">
        <div className="bg bg-pattern-4" />

        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Quy trình</span>
            <h2 className="text-white">Quy trình thực hiện</h2>
          </div>
          <div className="row">
            {/* Feature Block */}
            <div className="feature-block col-lg-4 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <h3 style={{ marginTop: '10px' }}>01</h3>
                </div>
                <p className="title">
                  Thiên Khôi và Khách hàng thống nhất kế hoạch, phương án triển
                  khai dịch vụ.
                </p>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-4 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <h3 style={{ marginTop: '10px' }}>02</h3>
                </div>
                <p className="title">
                  Khách hàng chuẩn bị môi trường và yêu cầu để tiến hành dịch
                  vụ.
                </p>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-4 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <h3 style={{ marginTop: '10px' }}>03</h3>
                </div>
                <p className="title">
                  Thiên Khôi triển khai, cài đặt thiết bị, giải pháp rà soát mã
                  độc.
                </p>
              </div>
            </div>
            <div className="feature-block col-lg-4 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <h3 style={{ marginTop: '10px' }}>04</h3>
                </div>
                <p className="title">
                  Thiên Khôi giả định hệ thống đã bị tấn công và thực hiện rà
                  soát, đặc biệt ưu tiên với thiết bị nhạy cảm, quan trọng. Đồng
                  thời theo dõi, giám sát toàn bộ hệ thống để phát hiện các máy
                  có hành vi bất thường.
                </p>
              </div>
            </div>
            <div className="feature-block col-lg-4 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <h3 style={{ marginTop: '10px' }}>05</h3>
                </div>
                <p className="title">
                  Thiên Khôi thông báo và phối hợp thường xuyên với Khách hàng
                  để đảm bảo xử lý kịp thời các nguy cơ mã độc đã phát hiện ra.
                </p>
              </div>
            </div>
            <div className="feature-block col-lg-4 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <h3 style={{ marginTop: '10px' }}>06</h3>
                </div>
                <p className="title">
                  Thiên Khôi Xây dựng báo cáo kỹ thuật và đề xuất khuyến nghị.
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
