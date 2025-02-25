import { useState } from 'react';

// Sample data
const data = [
  {
    title: 'Quyền Giám đốc Trung tâm',
    isActive: true,
    details: [
      {
        name: 'Ông',
        valueName: 'Nguyễn Đức Tuân',
        valueEmail: 'tuannd@mic.gov.vn',
      },
    ],
  },

  {
    title: 'Phó Giám đốc Trung tâm ',
    isActive: false,
    details: [
      {
        name: 'Bà',
        valueName: 'Nguyễn Thị Hồng Thu',
        valueEmail: 'nh_thu@mic.gov.vn',
      },
      {
        name: 'Bà',
        valueName: 'Bùi Thị Huyền',
        valueEmail: 'bt_huyen@mic.gov.vn',
      },
      {
        name: 'Ông',
        valueName: 'Phạm Thái Sơn',
        valueEmail: 'sonpt@mic.gov.vn',
      },
      {
        name: 'Ông',
        valueName: 'Nguyễn Phú Lương',
        valueEmail: 'npluong@mic.gov.vn',
      },
    ],
  },

  {
    title: 'Phòng Tổng hợp',
    isActive: false,
    details: [
      {
        name: 'Phó Trưởng phòng - Kế toán trưởng',
        valueName: 'Bà Phan Trung Kiên',

        valueEmail: 'kien_pt@mic.gov.vn',
      },
    ],
  },

  {
    title: 'Phòng Giám sát an toàn thông tin',
    isActive: false,
    details: [
      {
        name: 'Phụ trách phòng',
        valueName: 'Ông Nguyễn Phú Lương',
        valueEmail: 'npluong@mic.gov.vn',
      },
      {
        name: 'Phó trưởng phòng',
        valueName: 'Ông Nguyễn Văn Chung',
        valueEmail: 'nvchung@mic.gov.vn',
      },
    ],
  },

  {
    title: 'Phòng Điều tra, phân tích và cảnh báo sớm',
    isActive: false,
    details: [
      {
        name: 'Phụ trách phòng',
        valueName: 'Bà Bùi Thị Huyền',
        valueEmail: 'bt_huyen@mic.gov.vn',
      },
    ],
  },

  {
    title: 'Phòng Kỹ thuật nghiệp vụ',
    isActive: false,
    details: [
      {
        name: 'Phụ trách phòng',
        valueName: 'Ông Phạm Thái Sơn',
        valueEmail: 'sonpt@mic.gov.vn',
      },
      {
        name: 'Phó trưởng phòng',
        valueName: 'Ông Nguyễn Anh Tuấn',
        valueEmail: 'anhtuan.nguyen@mic.gov.vn',
      },
    ],
  },

  {
    title: 'Phòng Nghiên cứu và phát triển',
    isActive: false,
    details: [
      {
        name: 'Phụ trách phòng',
        valueName: 'Ông Lê Văn Mạnh',

        valueEmail: 'manhlv@mic.gov.vn',
      },
    ],
  },

  {
    title: 'Ban Dịch vụ',
    isActive: false,
    details: [
      {
        name: 'Trưởng ban',
        valueName: 'Ông Nguyễn Quang',
        valueEmail: 'nquang@mic.gov.vn',
      },
    ],
  },
];

const AccordionItem = ({ title, details, isActive }: any) => {
  const [isShow, setIsShow] = useState(isActive);

  const toggleAccordion = () => {
    setIsShow(!isShow);
  };

  return (
    <li className={`accordion block ${isShow ? 'active-block' : ''}`}>
      <div
        className={`acc-btn ${isShow ? 'active' : ''}`}
        onClick={toggleAccordion}
      >
        {title}
        <div className={`icon fa ${isShow ? 'fa-minus' : 'fa-plus'}`} />
      </div>
      {isShow && (
        <div className="px-5">
          {details.map((detail: any, index: any) => (
            <div className="content mb-3" key={index}>
              <div className="text">
                <strong>{detail.name}:</strong> {detail.valueName}
              </div>
            </div>
          ))}
        </div>
      )}
    </li>
  );
};

const Accordion = ({ data }: any) => {
  return (
    <section className="news-section ">
      <div className="auto-container">
        <div className="bg bg-pattern-8" />

        <div className="sec-title">
          <span className="sub-title">Tập đoàn Bất động sản Thiên Khôi</span>
          <h2 className="text-white">Cơ cấu tổ chức</h2>
        </div>
        <div className="container">
          <div className="row">
            <div className="col">
              <ul
                className="accordion-box  fadeInRight animated"
                style={{ visibility: 'visible', animationName: 'fadeInRight' }}
              >
                {data.map((item: any, index: any) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    details={item.details}
                    isActive={item.isActive}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const OrganizationStruct = () => {
  return <Accordion data={data} />;
};

export default OrganizationStruct;
