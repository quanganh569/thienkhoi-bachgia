import 'react-medium-image-zoom/dist/styles.css';
import ImageWrapper from './ImageWrapper';

const PositionLayout = () => {
  const importAll = (r: any) => {
    let images: any = {};
    r.keys().forEach((item: string, index: any) => {
      images[item.replace('./', '')] = r(item);
    });
    return images;
  };
  const Images = importAll(
    require.context(
      '../../assets/images/careers_2021',
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  const departments = [
    {
      name: 'Ban Dịch Vụ',
      positions: [
        {
          image: Images['16-01.jpg'],
          name: 'Quản lý dự án / PM',
        },
      ],
    },
    {
      name: 'Phòng Kỹ thuật Nghiệp vụ',
      positions: [
        {
          image: Images['14-01.jpg'],
          name: 'Sinh viên thực tập',
        },
        {
          image: Images['6-01.jpg'],
          name: 'Chuyên viên đánh giá và kiểm thử an toàn thông tin',
        },
        {
          image: Images['17-01.jpg'],
          name: 'Chuyên viên an toàn thông tin',
        },
      ],
    },
    {
      name: 'Phòng Điều tra phân tích và cảnh báo sớm',
      positions: [
        {
          image: Images['3-01.jpg'],
          name: 'Phân tích thông tin và cảnh báo sớm',
        },
        {
          image: Images['5-01.jpg'],
          name: 'PR & Marketing',
        },
        {
          image: Images['13-01.jpg'],
          name: 'Hợp tác quốc tế về an toàn thông tin',
        },
      ],
    },
    {
      name: 'Phòng Giám sát an toàn thông tin',
      positions: [
        {
          image: Images['1-01.jpg'],
          name: 'Senior Giám sát an toàn thông tin',
        },
        {
          image: Images['2-01.jpg'],
          name: 'Junior Giám sát an toàn thông tin',
        },
        {
          image: Images['4-01.jpg'],
          name: 'Quản trị hệ thống',
        },
        {
          image: Images['15-01.jpg'],
          name: 'Thực tập sinh Quản trị hệ thống',
        },
        {
          image: Images['18-01.jpg'],
          name: 'Chuyên viên An toàn thông tin',
        },
      ],
    },
    {
      name: 'Phòng Nghiên cứu phát triển',
      positions: [
        {
          image: Images['7-01.jpg'],
          name: 'Frontend Developer(Reactjs,HTML,CSS)',
        },
        {
          image: Images['8-01.jpg'],
          name: 'Backend Developer(Python/Golang)',
        },
        {
          image: Images['9-01.jpg'],
          name: 'Thực tập sinh lập trình',
        },
        {
          image: Images['10-01.jpg'],
          name: 'Điều tra,phân tích và ứng cứu sự cố an toàn thông tin',
        },
        {
          image: Images['11-01.jpg'],
          name: 'Mobile Developer(Flutter)',
        },
        {
          image: Images['12-01.jpg'],
          name: 'Tester/BA',
        },
      ],
    },
  ];

  return (
    <section className="about-section">
      <div className="bg bg-pattern-2" />
      <div className="container">
        {/* <h3 className="text-center">TUYỂN DỤNG</h3> */}
        {departments.map((department, index) => (
          <div key={index} className="container">
            <div className="row   mb-5">
              <div className="col-12">
                <h2 className="pt-4 pb-5 fw-bold fs-1">{department.name}</h2>

                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                  {department.positions.map((position, index) => (
                    <div key={index} className="col">
                      <div className="position">
                        <ImageWrapper image={position.image} />
                        {/* <div className=" d-flex align-items-center justify-content-center">
                          <Button>
                            <a
                              href="mailto:tulinhchuchu@gmail.com,nhansu@ais.gov.vn"
                              className="btn  hover-primary"
                            >
                              Ứng tuyển ngay
                            </a>
                          </Button>
                        </div> */}
                        <h6 className="mt-2 fw-semibold">
                          Vị trí : {position.name}
                        </h6>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* <Background /> */}
    </section>
  );
};

export default PositionLayout;
