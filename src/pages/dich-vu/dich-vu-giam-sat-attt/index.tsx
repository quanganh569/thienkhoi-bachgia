import bgDVTT from '@/assets/images/tools/dich-vu-truc-tuyen.jpg';
import LayoutPage from '@/components/Layout/Layout';
import Image from 'next/legacy/image';
import Link from 'next/link';
const APTIoC = () => {
  const services = [
    {
      text: 'Dịch vụ Bảo vệ thương hiệu (Brand protection)',
      href: '/dich-vu/brand-protection',
    },
    {
      text: 'Phát hiện và quản lý điểm yếu/lỗ hổng bảo mật (Vulnerability)',
      href: '/dich-vu/vulnerability',
    },
    {
      text: 'Theo dõi, cảnh báo sớm về các điểm yếu, lỗ hổng bảo mật đối với các sản phẩm CNTT của tổ chức (Product Weakness)',
      href: '/dich-vu/product-weakness',
    },
    {
      text: 'Theo dõi, cảnh báo sớm về các kết nối độc hại của tổ chức (Botnet Detection)',
      href: '/dich-vu/botnet-detection',
    },
    {
      text: 'Theo dõi, cảnh báo sớm về các dấu hiệu của các chiến dịch tấn công có chủ đích (APT IOC)',
      href: '/dich-vu/apt-ioc',
    },
  ];

  const benefit = [
    {
      text: 'Chủ động phòng ngừa, hỗ trợ hướng dẫn công tác ngăn chặn, ứng cứu, xử lý sự cố, đảm bảo sự an toàn, bí mật thông tin của hệ thống CNTT của khách hàng theo quy trình khép kín;',
    },
    {
      text: 'Phát hiện sớm các nguy cơ, sự cố, lỗ hổng bảo mật, và các mã độc, tấn công mạng liên quan đến hệ thống được giám sát , giúp kịp thời phát hiện, cảnh báo sớm các nguy cơ, sự cố an toàn mạng;',
    },
    {
      text: 'Giảm chi phi đầu tư cho an toàn thông tin – không cần đầu tư một khoản lớn chi phí cho nhân sự và hạ tầng bảo mật, thay vào đó có thể sử dụng dịch vụ được cung cấp bởi những chuyên gia hàng đầu trong ngành.',
    },
  ];

  const process = [
    { text: 'Xác định phạm vi, mục tiêu mức độ' },
    { text: 'Tiến hành thu thập thông tin' },
    { text: 'Cấp tài khoản đăng nhập hệ thống' },
    { text: 'Phân tích thông tin' },
    { text: 'Thực hiện cảnh báo cho tổ chức' },
  ];
  return (
    <LayoutPage title="Giám sát an toàn thông tin | Tập đoàn Bất động sản Thiên Khôi">
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
                  <h2>Giám sát an toàn thông tin</h2>
                </div>
                <div className=" d-inline-flex ">
                  <div className="text">
                    <i
                      className="fa fa-square"
                      style={{ color: '#D81320', marginRight: 5 }}
                    />{' '}
                    Dịch vụ Giám sát An toàn thông tin giúp theo dõi các sự kiện
                    về an toàn bảo mật trên hệ thống CNTT 24×7 và đưa ra cảnh
                    báo sự kiện bất thường, có nguy cơ gây mất an toàn thông tin
                    cho các hệ thống thông tin của cơ quan, tổ chức.
                    {/* <ul className="list-style-two">
                      Giám sát gián tiếp:
                      <li className="mt-2">
                        <i className="far fa-check-circle" />
                        <p>
                          Là dịch vụ theo dõi, giám sát từ xa nhằm mục đích cung
                          cấp đến khách hàng sớm nhất, đầy đủ nhất, các thông
                          tin về điểm yếu, lỗ hổng bảo mật trong các sản phẩm,
                          dịch vụ của từngcơ quan tổ chức, bảo vệ thương hiệu
                          của tổ chức, thông tin IoC của mã độc, tấn công APT...
                          và tin tức, báo cáo kỹ thuật chuyên sâu, tập trung vào
                          việc thu thập và phân tích thông tin về các cuộc tấn
                          công mạng hiện tại và tiềm năng đe dọa tới tài sản, uy
                          tín cũng như sự an toàn của các tổ chức, đơn vị. Với
                          thông tinnày, cơ quan tổ chức có thể chủ động ngăn
                          chặn và xử lý các nguy cơ tấn công, chủ động trong
                          công tác bảo đảm An toàn thông tin.
                        </p>
                      </li>
                    </ul> */}
                  </div>
                </div>
                <div className=" d-inline-flex ">
                  <div className="text">
                    <ul className="list-style-two">
                      <i
                        className="fa fa-square"
                        style={{ color: '#D81320', marginRight: 5 }}
                      />{' '}
                      Lợi ích mang lại cho khách hàng:
                      {benefit.map((service, index) => (
                        <li className="mt-2" key={index}>
                          <i className="far fa-check-circle" />
                          <p>{service.text}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* Image Column */}
            <div className="image-column col-lg-6 col-md-12 col-sm-12 mt-5">
              <div className="image-box" style={{ padding: 20 }}>
                <figure className="image-1 ">
                  <Image style={{ borderRadius: 20 }} src={bgDVTT} alt="" />
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="why-choose-us call-to-action">
        <div className="bg bg-pattern-5" />

        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Hình thức</span>
            <h2>Hình thức thực hiện</h2>
          </div>
          <div className="row">
            {/* Feature Block */}
            <div className="feature-block col-lg-6 col-md-6 col-sm-12  ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                </div>
                <h6 className="title">Giám sát trực tiếp: </h6>
                <p className="title mt-2">
                  Là dịch vụ theo dõi, giám sát an toàn thông tin liên tục 24/7
                  để thu thập, phân tích các dữ liệu, nhật ký liên quan đến hệ
                  thống được giám sát cho các tổ chức và doanh nghiệp thông qua
                  hệ thống giám sát với các bộ cảm biến được lắp đặt trực tiếp
                  tại hệ thống được giám sát và thiết lập kết nối đến Trung tâm
                </p>
              </div>
            </div>
            {/* Feature Block */}
            <div className="feature-block col-lg-6 col-md-6 col-sm-12  ">
              <div className="inner-box">
                <div className="icon-box">
                  <i className="icon flaticon-shield" />
                </div>
                <h6 className="title">Giám sát gián tiếp: </h6>

                <ul className="list-style-two text-left title mt-2 ">
                  {services.map((service, index) => (
                    <li className="mt-2" key={index}>
                      <i className="far fa-check-circle title " />
                      <Link
                        href={service.href}
                        className="text-decoration-none "
                      >
                        <p className="title hover-bold ">{service.text}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Info Banner */}
            {/* <div class="info-banner col-lg-6 col-md-12 col-sm-12 "  data-wow-delay="400ms">
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

export default APTIoC;
