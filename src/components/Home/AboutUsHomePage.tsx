import Image from 'next/legacy/image';
import Link from 'next/link';
// import imageAboutus from "@/assets/images/background/about-us.jpg";
import imageAboutus from '@/assets/images/background/ncsc.jpg';

export const AboutUsHomePage = () => {
  return (
    <>
      {/* About Section */}
      <section className="about-section" id="about-us">
        <div className="bg bg-pattern-1" />
        <div className="auto-container">
          <div className="row">
            {/* Content Column */}
            <div className="content-column col-xl-6 col-lg-7 col-md-12 col-sm-12 order-2 ">
              <div className="inner-column mt-4">
                <div className="sec-title">
                  <span className="sub-title">Chúng tôi là ai</span>
                  <h2>Bất động sản Thiên Khôi</h2>
                  {/* <div class="text">Get connected with Thiên Khôi Limited </div> */}
                </div>
                {/* <div class="text-box">
                <div class="info-box">
                  <i class="icon flaticon-world"></i>
                  <div class="text">25+ Years of Experience</div>
                </div>
                <div class="text">Thiên Khôi Internet is providing one of the fastest broadband internet and network solutions throughout Dhaka, reliable for all.</div>
              </div> */}
                <ul className="list-style-two">
                  <li>
                    <i className="far fa-check-circle" />
                    Ngày 01 tháng 01 năm 2020 Tập đoàn Bất động sản Thiên Khôi
                    chính thức có mặt trên thị trường Bất động sản Việt Nam với
                    sứ mệnh kết nối khách hàng và chủ nhà, tư vấn về pháp lý và
                    tình trạng bất động sản trước khi giao dịch diễn ra, điều
                    tiết làm tăng tính thanh khoản cho hàng ngàn Bất động sản
                    trên khắp các Quận nội và ngoại thành tại Hà Nội và TP HCM,
                    làm trong sạch và minh bạch thị trường.
                  </li>
                  <li>
                    <i className="far fa-check-circle" />
                    Trải qua hơn 1 năm hình thành và phát triển với hàng ngàn
                    giao dịch Bất động sản lớn nhỏ trên thị trường Hà Nội và TP.
                    Hồ Chí Minh.
                  </li>
                </ul>
                <div className="btn-box  ">
                  <Link
                    href="/tuyen-dung"
                    className="theme-btn btn-style-one hover-light"
                  >
                    <span className="btn-title">
                      Tìm hiểu ngay
                      <i className="fa fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12 ">
              <div className="image-box" style={{ padding: 20 }}>
                <figure className="image-1 ">
                  <Image
                    style={{ borderRadius: 20 }}
                    src={imageAboutus}
                    alt=""
                  />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End About Section */}
    </>
  );
};
