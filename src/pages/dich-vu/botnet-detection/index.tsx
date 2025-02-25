import bgBotnet from '@/assets/images/tools/botnet-background.jpg';
import LayoutPage from '@/components/Layout/Layout';
import Image from 'next/legacy/image';
const BotnetDetection = () => {
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
            <div className="content-column col-lg-6 col-md-12 order-2  mt-5 ">
              <div className="inner-colmun">
                <div className="sec-title">
                  <span className="sub-title">Giới thiệu</span>
                  <h2>
                    Theo dõi, cảnh báo sớm về các kết nối độc hại của tổ chức
                  </h2>
                </div>
                <p className="text font-bold">
                  Một phương thức tấn công thường được sử dụng để làm gián đoạn
                  hệ thống hoặc trang web là kỹ thuật DDoS. Kỹ thuật này lợi
                  dụng một lượng lớn máy tính truy cập đồng thời vào cùng một
                  trang web trong thời gian ngắn, khiến hệ thống quá tải và
                  người dùng không thể truy cập bình thường
                </p>
                <p className="text">
                  <i
                    className="fa fa-square"
                    style={{ color: '#d81320', marginRight: 5 }}
                  />
                  Trong bối cảnh tiền điện tử ngày càng phổ biến, đối tượng tấn
                  công thường tận dụng sức mạnh của máy tính bị tấn công để kiếm
                  tiền, dẫn đến sự gia tăng nhanh chóng của mã độc, đặc biệt là
                  mã độc botnet.
                </p>
                {/* <h6 class="title">Advance Monitoring</h6> */}
                <p className="text">
                  <i
                    className="fa fa-square"
                    style={{ color: '#d81320', marginRight: 5 }}
                  />
                  Trong bối cảnh tiền điện tử ngày càng phổ biến, đối tượng tấn
                  công thường tận dụng sức mạnh của máy tính bị tấn công để kiếm
                  tiền, dẫn đến sự gia tăng nhanh chóng của mã độc, đặc biệt là
                  mã độc botnet.
                </p>
                <div className="text">
                  Theo dõi, cảnh báo sớm về các kết nối độc hại của tổ chức liên
                  tục giám sát các mạng mã độc botnet, giúp phát hiện sớm bất kỳ
                  kết nối nào từ hệ thống của khách hàng tới những mạng botnet
                  này. Từ đó kịp thời ngăn chặn và loại bỏ các mối đe dọa để bảo
                  vệ hệ thống của khách hàng trước những tấn công tiềm ẩn.
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12 ">
              <div className="image-box" style={{ padding: 20 }}>
                <figure className="image-1 ">
                  <Image style={{ borderRadius: 20 }} src={bgBotnet} alt="" />
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
            <div className="feature-block col-lg-6 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                  <br />
                </div>
                <h4 className="title">Chặn lọc</h4>
                <br />
                <p className="title">
                  Đưa ra thông tin về các mã độc kèm thông tin kết nối để có thể
                  chặn lọc
                </p>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-6 col-md-6 col-sm-12 ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                </div>
                <h4 className="title">Giám sát</h4>
                <br />
                <p className="title">
                  Giám sát liên tục các mạng botnet giúp phát hiện sớm kết nối
                  độc hại.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-us call-to-action">
        <div className="bg bg-pattern-4" />
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Quy trình</span>
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

export default BotnetDetection;
