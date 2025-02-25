import Link from 'next/link';
export const BannerHomePage = () => {
  return (
    <>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="bg bg-overlay" />
        <div className="auto-container">
          <div className="content-box">
            {/* <div class="badge-style-one" data-wow-delay="600ms">
            <span class="price"><strong>$40</strong> Per Month</span>
            <i class="icon fa fa-wifi"></i>
            <h3 class="title">Speed</h3>
            <div class="text">Up to 30 - 50 Mbpps</div>
          </div> */}
            <h1 className="title ">
              THIÊN KHÔI GROUP <br />
              Thu nhập ít nhất <br /> <b className="text-white">
                36.5tr/vụ
              </b>{' '}
              giao dịch
            </h1>
            {/*  */}
            <div className="btn-box">
              <Link
                href="/tuyen-dung"
                className="theme-btn btn-style-one hover-light"
              >
                <span className="btn-title">
                  Tìm hiểu về chúng tôi
                  <i className="fa fa-arrow-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* End Banner Section */}
    </>
  );
};
