import FormContact from '../Careers/FormContact';

const PrivacyContent = () => {
  const process = [
    {
      text: 'Kiến thức cơ bản về Bất động sản Thổ cư & Định giá, tư duy khi phân tích Bất động sản',
    },
    {
      text: 'Các kênh và công cụ truyền thông Bất động sản, cách viết bài truyền thông Bất động sản hấp dẫn, ra tiền, cách tạo hệ thống tin vệ tinh',
    },
    { text: 'Thiết lập công cụ và các thao tác đăng tin' },
    { text: 'Cuộc điện thoại đầu tiên của khách hàng' },

    { text: 'Dẫn khách xem nhà, các tình huống thực tế khi dẫn khách.' },
    { text: 'Các bước chăm khách cũ' },
    { text: 'Pháp lý trong giao dịch Bất động sản và tư vấn khách hàng' },
    { text: 'Kịch bản đưa họ khách hàng đi xem lại' },
    { text: 'Các tình huống đàm phán, thương lượng giá trong giao dịch' },
    { text: 'Tư vấn khách hàng ôm tiền đặt cọc' },
    { text: 'Trên bàn đặt cọc' },
    { text: 'Hậu đặt cọc và các thủ tục công chứng, sang tên, chốt giao dịch' },
  ];

  const listQuyenloi = [
    {
      text: 'Môi trường làm việc chuyên nghiệp, năng động',
    },
    {
      text: 'Tự chủ thời gian, tự chủ công việc,...',
    },
    { text: 'Áp dụng khoa học và công nghệ vào trong công việc' },
    { text: 'Được đào tạo bài bản bởi các chuyên gia Bất động sản' },

    { text: 'Được tham gia các hoạt động: Văn nghệ, thể thao, du lịch' },
    { text: 'Hoa hồng nhận ngay trong 24 giờ giao dịch' },
    { text: 'Công ty hỗ trợ tiền nạp vào trang thông tin BĐS' },
    { text: 'Chế độ khen thưởng hấp dẫn theo Tháng, Quý, Năm' },
    { text: 'Hưởng đầy đủ chế độ BHXH, nghỉ lễ theo Quy định Nhà nước' },
  ];
  return (
    <div className=" mx-auto py-6 ">
      <section className="why-choose-us call-to-action">
        <div className="bg bg-pattern-7" />
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Quyền lợi</span>
            <h4 style={{ fontWeight: 'bold' }}>
              BẠN ĐƯỢC GÌ KHI ĐẾN VỚI BẤT ĐỘNG SẢN THIÊN KHÔI
            </h4>
          </div>
          <div className="row">
            {listQuyenloi.map((item: any, index: any) => {
              return (
                <div
                  className="feature-block col-lg-4 col-md-6 col-sm-12  "
                  key={index}
                >
                  <div className="inner-box">
                    <div className="icon-box">
                      <i className="icon flaticon-shield" />
                    </div>
                    <p className="title">{item.text}</p>
                  </div>
                </div>
              );
            })}
            {/* Feature Block */}
          </div>
        </div>
      </section>
      <section className="why-choose-us call-to-action">
        <div className="bg bg-pattern-4" />
        <div className="auto-container">
          <div className="sec-title text-center">
            <span className="sub-title">Quy trình</span>
            <h2 className="text-white">Đào tạo Thiên Khôi</h2>
          </div>
          <div className="row">
            {process.map((service: any, index: any) => (
              <div
                className="feature-block col-lg-3 col-md-6 col-sm-12"
                key={index}
              >
                <div className="inner-box">
                  <div className="icon-box">
                    <h4 style={{ marginTop: '10px' }}>
                      Ngày {String(index + 1).padStart(2, '0')}
                    </h4>
                  </div>
                  <p className="title">{service.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FormContact />
    </div>
  );
};

export default PrivacyContent;
