import bgAPT from '@/assets/images/tools/apt-background.jpg';
import LayoutPage from '@/components/Layout/Layout';
import Image from 'next/legacy/image';
const APTIoC = () => {
  const process = [
    { text: 'Xác định phạm vi, mục tiêu mức độ' },
    { text: 'Tiến hành thu thập thông tin' },
    { text: 'Cấp tài khoản đăng nhập hệ thống' },
    { text: 'Phân tích thông tin' },
    { text: 'Thực hiện cảnh báo cho tổ chức' },
  ];
  return (
    <LayoutPage title="Theo dõi, cảnh báo sớm về các dấu hiệu của các chiến dịch tấn công có chủ đích (APT).| Tập đoàn Bất động sản Thiên Khôi">
      <section className="about-section-three">
        <div className="bg bg-pattern-7" />

        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2  mt-5 ">
              <div className="inner-column">
                <div className="sec-title">
                  <span className="sub-title">Giới thiệu</span>
                  <h2>
                    Theo dõi, cảnh báo sớm về các dấu hiệu của các chiến dịch
                    tấn công có chủ đích (APT).
                  </h2>
                </div>
                <div className=" d-inline-flex ">
                  <div className="text">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Tình hình an ninh mạng thế giới hiện nay diễn ra phức tạp.
                    Các nhóm tấn công mạng giờ đây không còn tấn công để chứng
                    minh năng lực hay khoe thành tích, mà chuyển sang mục đích
                    tài chính, chính trị,... Điều này thực sự nguy hiểm nếu tổ
                    chức có nhiều dữ liệu quan trọng, tối mật.{' '}
                  </div>
                </div>
                <div className="d-inline-flex ">
                  <div className="text">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Một cách phòng tránh rủi ro tấn công từ các nhóm APT là việc
                    phát hiện sớm các IoC của các nhóm APT này để tiến hành chặn
                    trên toàn bộ hệ thống của tổ chức. Giải pháp Theo dõi, cảnh
                    báo sớm về các dấu hiệu của các chiến dịch tấn công có chủ
                    đích (APT).nằm trong giải pháp tổng thể đảm bảo an toàn
                    thông tin từ xa EASM hỗ trợ tổ chức giải quyết vấn đề này{' '}
                  </div>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12 ">
              <div className="image-box" style={{ padding: 20 }}>
                <figure className="image-1 ">
                  <Image style={{ borderRadius: 20 }} src={bgAPT} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutPage>
  );
};

export default APTIoC;
