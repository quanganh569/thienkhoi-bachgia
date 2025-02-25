import LayoutPage from '@/common/LayoutPage';
import ContentAboutUs from '@/components/AboutUs/ContentAboutUs';
import { BannerChildren } from '@/components/common/BannerChildren';

const AboutUs = () => {
  return (
    <LayoutPage title="Giới thiệu | Tập đoàn Bất động sản Thiên Khôi">
      <BannerChildren
        image="url(../../assets/images/background/bg-red.jpg)"
        title="Giới thiệu"
      />
      <ContentAboutUs />
      {/* <TaskFunction /> */}
      {/* <OrganizationStruct /> */}
    </LayoutPage>
  );
};

export default AboutUs;
