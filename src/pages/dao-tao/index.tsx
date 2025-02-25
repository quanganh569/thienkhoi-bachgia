import LayoutPage from '@/components/Layout/Layout';
import PrivacyContent from '@/components/Privacy/PrivacyContent';
import { BannerChildren } from '@/components/common/BannerChildren';

const Privacy = () => {
  return (
    <LayoutPage title="Đào tạo & Quyền lợi | Tập đoàn Bất động sản Thiên Khôi">
      <BannerChildren
        image={`url(../../assets/images/background/bg-red.jpg)`}
        title="Đào tạo & Quyền lợi"
      />
      <PrivacyContent />
    </LayoutPage>
  );
};

export default Privacy;
