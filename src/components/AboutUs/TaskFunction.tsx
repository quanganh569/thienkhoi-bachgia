import { useState } from 'react';

// Sample data
const data = [
  {
    value: `Hoa hồng & Khen thưởng`,
  },
  {
    value: `Làm chủ công việc`,
  },
  {
    value: `Được hỗ trợ liên tục `,
  },

  {
    value: `Hỗ trợ marketing miễn phí `,
  },
  {
    value: `Cơ hội thăng tiến`,
  },
  {
    value: `Đào tạo miễn phí`,
  },
];

const AccordionItem = ({ title, value, isActive }: any) => {
  const [isShow, setIsShow] = useState(isActive);

  const toggleAccordion = () => {
    setIsShow(!isShow);
  };

  return (
    <div className="d-inline-flex ">
      <ul className="list-style-two">
        <li>
          <i className="far fa-check-circle" />
          <p style={{ fontSize: '18px' }}>{value}</p>
        </li>
      </ul>
    </div>
  );
};

const Accordion = ({ data }: any) => {
  return (
    <section className="news-section">
      <div className="auto-container">
        <div className="bg bg-pattern-6" />

        <div className="sec-title">
          <span className="sub-title">Tập đoàn Bất động sản Thiên Khôi</span>
          <h2>Chức năng nhiệm vụ</h2>
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
                    value={item.value}
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

const TaskFunction = () => {
  return <Accordion data={data} />;
};

export default TaskFunction;
