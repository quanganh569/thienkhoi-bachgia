import FormContact from '@/components/Careers/FormContact';
import LayoutPage from '@/components/Layout/Layout';
import { BannerChildren } from '@/components/common/BannerChildren';
import { NextPage } from 'next';
const Activity: NextPage = (props) => {
  return (
    <LayoutPage title={'Tuyển dụng | Tập đoàn Bất động sản Thiên Khôi'}>
      <BannerChildren
        title="Tuyển dụng"
        image={`url(../../assets/images/background/bg-red.jpg)`}
      />
      <FormContact />
    </LayoutPage>
  );
};

export default Activity;
