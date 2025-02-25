import LayoutPage from '@/components/Layout/Layout';
import Image from '@/components/common/Image';
import Link from 'next/link';
import imageError from '../assets/images/background/404-error.png';
const NotFound = () => {
  return (
    <LayoutPage title={'Có lỗi xảy ra | Tập đoàn Bất động sản Thiên Khôi'}>
      <section className="">
        <div className="auto-container pt-120 pb-70">
          <div className="row">
            <div className="col-xl-12">
              <div className="error-page__inner">
                <div className="error-page__title-box">
                  <h3 className="error-page__sub-title">Có lỗi xảy ra!</h3>
                </div>
                <p className="error-page__text">
                  Xin lỗi, chúng tôi không thể tìm thấy trang đó! Trang bạn đang
                  tìm kiếm vì chưa bao giờ tồn tại
                </p>

                <div className="auto-container">
                  <Image
                    width={450}
                    src={imageError}
                    alt="Responsive image"
                    loading="lazy"
                  />
                </div>
                <Link
                  href="/"
                  title="Trang chủ"
                  className="theme-btn btn-style-one shop-now"
                >
                  <span className="btn-title">Quay lại trang chủ</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </LayoutPage>
  );
};
export default NotFound;
