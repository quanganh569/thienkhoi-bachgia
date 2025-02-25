import bgRedTeam from '@/assets/images/tools/red-team-background.jpg';
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
                  <h2>Dịch vụ tư vấn các dịch vụ an toàn thông tin mạng</h2>
                </div>
                <div className=" d-inline-flex ">
                  <div className="text">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Dịch vụ tư vấn cung cấp cho khách hàng một chiến lược dài
                    hạn và toàn diện về xây dựng, triển khai quy trình an toàn
                    thông tin mạng cho cơ quan, tổ chức. Các chuyên gia tư vấn
                    của chúng tôi sẽ phân tích hiện trạng, quy trình hiện hành
                    của đơn vị. Từ đó, đưa ra các khuyến nghị cho việc ứng dụng
                    quy trình bảo mật và dịch vụ công nghệ thông tin phù hợp.
                  </div>
                </div>
                <div className="d-inline-flex ">
                  <ul className="list-style-two">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Các hình thức tư vấn bao gồm:
                    <li className="mt-2">
                      <i className="far fa-check-circle" />
                      Tư vấn xây dựng hồ sơ đề xuất cấp độ
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Tư vấn triển khai, áp dụng và đánh giá chứng nhận hệ thống
                      quản lý an toàn thông tin theo tiêu chuẩn ISO/IEC 27001
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Tư vấn dự án.
                    </li>
                    <li>
                      <i className="far fa-check-circle" />
                      Tư vấn các dịch vụ an toàn thông tin khác,...
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12 ">
              <div className="image-box" style={{ padding: 20 }}>
                <figure className="image-1 ">
                  <Image style={{ borderRadius: 20 }} src={bgRedTeam} alt="" />
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
