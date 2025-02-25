import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    year: '',
    cccd: '',
    phone: '',
    note: '',
  });

  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isDisabled, setIsDisabled] = useState(true);

  const validateForm = () => {
    let newErrors: { [key: string]: string } = {};
    const currentYear = new Date().getFullYear();

    if (!formData.name.trim()) newErrors.name = 'Vui lòng nhập họ và tên.';
    if (
      !/^\d{4}$/.test(formData.year) ||
      +formData.year < 1950 ||
      +formData.year > currentYear
    ) {
      newErrors.year = `Năm sinh phải là số từ 1950 đến ${currentYear}.`;
    }
    if (!/^\d{4}$/.test(formData.cccd))
      newErrors.cccd = 'CCCD phải là 4 chữ số cuối.';
    if (!/^0\d{9}$/.test(formData.phone))
      newErrors.phone = 'Số điện thoại phải có 10 chữ số hợp lệ.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    setIsDisabled(!validateForm());
  }, [formData]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setMessage('Đang gửi...');
    setIsDisabled(true);

    try {
      const response = await axios.post('/api/submit', formData, {
        headers: { 'Content-Type': 'application/json' },
      });

      setMessage(response.data.message);
      setFormData({ name: '', year: '', cccd: '', phone: '', note: '' });
      setErrors({});
      toast.success('🎉 Gửi đơn thành công!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } catch (error) {
      setMessage('Có lỗi xảy ra! Vui lòng thử lại.');
      toast.error('❌ Gửi đơn thất bại!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      });
    } finally {
      setIsDisabled(false);
    }
  };

  return (
    <section className="contact-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-6">
            <div className="contact-details__right">
              <div className="sec-title">
                <span className="sub-title">Tuyển dụng</span>
                <h3 style={{ color: 'red', fontWeight: 'bold' }}>
                  ỨNG TUYỂN NGAY
                </h3>
                <div className="text">
                  <h4 className="title">Thu nhập ~ 50tr/giao dịch</h4>
                  <br />
                  Không yêu cầu kinh nghiệm, không quản lý thời gian, địa điểm
                  làm việc, được đào tạo miễn phí, hỗ trợ cầm tay chỉ việc tại
                  khu vực, được cung cấp 500 kênh tìm kiếm khách hàng miễn phí
                  độc quyền.
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 offset-xl-1 col-lg-6">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <span>Họ và tên</span>
                    <input
                      name="name"
                      className="form-control"
                      type="text"
                      placeholder="Nhập họ và tên"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    {errors.name && (
                      <p style={{ color: 'red' }}>{errors.name}</p>
                    )}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <span>Năm sinh</span>
                    <input
                      name="year"
                      className="form-control"
                      type="text"
                      placeholder="Nhập năm sinh"
                      value={formData.year}
                      onChange={handleChange}
                      required
                    />
                    {errors.year && (
                      <p style={{ color: 'red' }}>{errors.year}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="mb-3">
                    <span>Căn cước công dân</span>
                    <input
                      name="cccd"
                      className="form-control"
                      type="text"
                      placeholder="4 số cuối căn cước công dân"
                      value={formData.cccd}
                      onChange={handleChange}
                      required
                    />
                    {errors.cccd && (
                      <p style={{ color: 'red' }}>{errors.cccd}</p>
                    )}
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <span>Số điện thoại</span>
                    <input
                      name="phone"
                      className="form-control"
                      type="text"
                      placeholder="Nhập số điện thoại"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                    />
                    {errors.phone && (
                      <p style={{ color: 'red' }}>{errors.phone}</p>
                    )}
                  </div>
                </div>
              </div>
              <div className="mb-3">
                <span>Lời nhắn</span>
                <textarea
                  name="note"
                  className="form-control"
                  rows={5}
                  placeholder="Nhập lời nhắn"
                  value={formData.note}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <button
                  type="submit"
                  className="theme-btn btn-style-one"
                  disabled={isDisabled}
                >
                  <span className="btn-title">
                    {isDisabled
                      ? 'Vui lòng điền đầy đủ thông tin'
                      : 'Nộp đơn ứng tuyển'}
                  </span>
                </button>
              </div>
            </form>
            {message && <p className="mt-4 text-green-600">{message}</p>}
          </div>
        </div>
      </div>

      {/* Toast container để hiển thị thông báo */}
      <ToastContainer position="top-right" autoClose={3000} />
    </section>
  );
};

export default FormContact;
