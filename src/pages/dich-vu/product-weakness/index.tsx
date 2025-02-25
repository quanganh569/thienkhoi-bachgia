import bgProduct from '@/assets/images/tools/product-background.jpg';
import LayoutPage from '@/components/Layout/Layout';
import Image from 'next/legacy/image';
const ProductWeakness = () => {
  const process = [
    { text: 'Xác định phạm vi, mục tiêu mức độ' },
    { text: 'Tiến hành thu thập thông tin' },
    { text: 'Cấp tài khoản đăng nhập hệ thống' },
    { text: 'Phân tích thông tin' },
    { text: 'Thực hiện cảnh báo cho tổ chức' },
  ];
  return (
    <LayoutPage title="Theo dõi, cảnh báo sớm về các điểm yếu, lỗ hổng bảo mật đối với các sản phẩm CNTT của tổ chức| Tập đoàn Bất động sản Thiên Khôi">
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
                  <h2>
                    Theo dõi, cảnh báo sớm về các điểm yếu, lỗ hổng bảo mật đối
                    với các sản phẩm CNTT của tổ chức
                  </h2>
                </div>
                <div className=" d-inline-flex ">
                  <div className="text">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Kinh tế chia sẻ hiện nay phát triển mạnh mẽ, thay đổi tư duy
                    về việc khởi xướng mô hình kinh doanh không nhất thiết phải
                    làm tất cả mọi khâu mà có thể sử dụng và kế thừa kết quả,
                    sản phẩm của các đơn vị khác để phát triển tạo nên sản phẩm
                    mới đáp ứng nhu cầu người dùng. Công nghệ thông tin cũng
                    liên tục phát triển để đáp ứng nhu cầu đó, một hệ thống, sản
                    phẩm lớn có thể được cấu thành từ nhiều sản phẩm và giải
                    pháp khác nhau. Vì vậy, việc đảm bảo an toàn thông tin cho
                    không chỉ sản phẩm gốc đang phát triển mà còn phải đảm bảo
                    an toàn thông tin cho toàn bộ các sản phẩm, giải pháp được
                    kế thừa và đang sử dụng. Giải pháp Theo dõi, cảnh báo sớm về
                    các điểm yếu, lỗ hổng bảo mật đối với các sản phẩm CNTT của
                    tổ chứcnằm trong giải pháp tổng thể đảm bảo an toàn thông
                    tin từ xa EASM hỗ trợ tổ chức giải quyết vấn đề này{' '}
                  </div>
                </div>
                <div className="d-inline-flex ">
                  <div className="text">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Cung cấp cơ chế giám sát liên tục, phát hiện các CVE mới đại
                    diện cho các lỗ hổng nhắm vào các sản phẩm và giải pháp trên
                    thị trường đang được tổ chức sử dụng, từ đó cung cấp các
                    thông tin cần thiết như sản phẩm bị ảnh hưởng, bản vá lỗ
                    hổng để hỗ trợ cho tổ chức trong quá trình khắc phục vấn đề
                    về an toàn thông tin.{' '}
                  </div>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12 ">
              <div className="image-box" style={{ padding: 20 }}>
                <figure className="image-1 ">
                  <Image style={{ borderRadius: 20 }} src={bgProduct} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-us call-to-action">
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Ưu thế</span>
            <h2>Lợi ích mang lại cho khách hàng</h2>
          </div>
          <div className="row">
            {/* Feature Block */}
            <div className="feature-block col-lg-4 col-md-6 col-sm-12  ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                </div>
                <h6 className="title">
                  Cung cấp danh sách CVE được cập nhật liên tục liên quan đến
                  các sản phẩm mà tổ chức đang sử dụng, giúp nhận biết và ứng
                  phó với những rủi ro tiềm ẩn.
                </h6>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-4 col-md-6 col-sm-12  ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                </div>
                <h6 className="title">
                  Đánh giá nguy cơ ảnh hưởng của các CVE này với sản phẩm.
                </h6>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-4 col-md-6 col-sm-12  ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                </div>
                <h6 className="title">
                  Đưa hướng dẫn khắc phục vấn đề trực tiếp từ nhà phát triển sản
                  phẩm.
                </h6>
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

export default ProductWeakness;
