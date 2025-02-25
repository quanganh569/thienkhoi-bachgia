import { ContentContact } from '@/components/Contact/ContentContact';
import LayoutPage from '@/components/Layout/Layout';
import { BannerChildren } from '@/components/common/BannerChildren';

const Contact = () => {
  return (
    <LayoutPage title="Liên hệ | Tập đoàn Bất động sản Thiên Khôi">
      <BannerChildren
        image={`url(../../assets/images/background/bg-red.jpg)`}
        title="Liên hệ"
      />
      <ContentContact />
    </LayoutPage>
  );
};

export default Contact;
