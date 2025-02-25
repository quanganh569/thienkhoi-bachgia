import FormContact from '@/components/Careers/FormContact';
import { AboutUsHomePage } from '@/components/Home/AboutUsHomePage';
import { BannerHomePage } from '@/components/Home/BannerHomePage';
import ToolsUtilitiesCarousel from '@/components/Home/UtilityHomePage';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import LayoutPage from '@/components/Layout/Layout';
// import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is imported
const Home = (props: any) => {
  return (
    <LayoutPage title={'Tập đoàn Bất động sản Thiên Khôi'}>
      {/* Banner  */}
      <BannerHomePage />

      {/*  Giới thiệu */}
      <AboutUsHomePage />

      {/* ChuyenTrang */}
      {/* <SpecialHomePage /> */}

      {/* Tại sao chọn chúng tôi */}
      <WhyChooseUs />

      {/* Danh sách các dịch vụ  */}
      <ToolsUtilitiesCarousel />

      <FormContact />

      {/* Tin tức  */}
      {/* <NewsHomePage dataNews={props} /> */}
    </LayoutPage>
  );
};

export default Home;
