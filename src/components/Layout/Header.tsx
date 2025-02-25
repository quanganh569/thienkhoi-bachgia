import logo from '@/assets/images/logo-tk.png';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const MenuItem = ({
    href,
    icon: Icon,
    children,
    className = '',
    isCurrent,
  }: any) => (
    <li className={`${className} ${isCurrent ? 'current' : ''}`}>
      <Link href={href}>
        {Icon && (
          <i className="fa p-1" aria-hidden="true">
            <Icon size={16} />
          </i>
        )}
        {children}
      </Link>
    </li>
  );
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    // Set initial path
    setCurrentPath(window.location.pathname);

    // Update path when it changes
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };

    // Listen for path changes
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  const isCurrentPath = (href: any) => {
    if (href === '/') {
      return currentPath === '/';
    }
    return currentPath.startsWith(href) && href !== '/';
  };

  const mainMenuItems = [
    { href: '/', label: 'Trang chủ' },
    { href: '/gioi-thieu', label: 'Giới thiệu' },
    { href: '/dao-tao', label: 'Đào tạo & Quyền lợi' },

    { href: '/tuyen-dung', label: 'Tuyển dụng' },
    { href: '/lien-he', label: 'Liên hệ' },
  ];

  const MenuItemList = (
    <div className="nav-outer">
      <nav className="nav main-menu">
        <ul className="navigation">
          {mainMenuItems.map((item: any) =>
            item.subItems ? (
              <li
                key={item.label}
                className={`${item.className} ${
                  isCurrentPath(item.href) ? 'current' : ''
                }`}
              >
                <Link href={item.href}>{item.label}</Link>
                <ul className="">
                  {item.subItems.map((subItem: any) => (
                    <li
                      key={subItem.href}
                      className={`${subItem.className || ''} ${
                        isCurrentPath(subItem.href) ? 'current' : ''
                      } flex items-center`}
                    >
                      <Link href={subItem.href} className="">
                        {subItem.iconUrl && (
                          <div className="d-flex  align-items-center">
                            <Image
                              src={subItem.iconUrl} // Đường dẫn đến hình ảnh
                              alt={subItem.label} // Văn bản thay thế
                              width={26}
                              height={26}
                              style={{ marginRight: '3px' }}
                            />

                            <span
                              style={{ marginLeft: '5px', fontSize: '15px' }}
                            >
                              {subItem.label}
                            </span>
                          </div>
                        )}
                      </Link>

                      {/* Kiểm tra nếu có subItems lồng nhau */}
                      {subItem.subItems && (
                        <ul className="ml-2">
                          {subItem.subItems.map((childSubItem: any) => (
                            <li
                              key={childSubItem.href}
                              className={`${
                                isCurrentPath(childSubItem.href)
                                  ? 'current'
                                  : ''
                              } flex items-center `}
                            >
                              <Link
                                href={childSubItem.href}
                                className="flex items-center "
                              >
                                {childSubItem.iconUrl && (
                                  <Image
                                    src={childSubItem.iconUrl}
                                    alt={childSubItem.label}
                                    width={24}
                                    height={24}
                                  />
                                )}
                                <span>{childSubItem.label}</span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <MenuItem
                key={item.label}
                href={item.href}
                className={item.className}
                isCurrent={isCurrentPath(item.href)}
              >
                {item.label}
              </MenuItem>
            )
          )}
        </ul>
      </nav>
    </div>
  );

  const [openDropdown, setOpenDropdown] = useState(null);

  // Function to toggle dropdown
  const toggleDropdown = (index: any) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <header className="main-header header-style-one">
      <div className="header-top">
        <div className="inner-container">
          <div className="top-left">
            <ul className="list-style-one">
              <li className="flex justify-between items-center">
                <i className="fa fa-map-marker-alt"></i>
                <span className="">
                  {' '}
                  Tầng 2 tòa nhà MIPEC Tower, 229 Tây Sơn, Đống Đa, Hà Nội
                </span>
              </li>
              {/* <li>
                <i className="fa fa-clock"></i> 24/7
              </li> */}
              <li>
                <i className="fa fa-envelope"></i>
                <Link href="mailto:tulinhchuchu@gmai.com">
                  tulinhchuchu@gmai.com
                </Link>
              </li>
            </ul>
          </div>

          <div className="top-right">
            <ul className="social-icon-one">
              <li>
                <Link href="https://www.facebook.com/ThienKhoiGroup.RealEstate">
                  <span className="fab fa-facebook-square"></span>
                </Link>
              </li>
            </ul>
            <ul className="useful-links">
              <li>
                <Link href="/tuyen-dung">Đăng ký ngay</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="header-lower ">
        {/* Main box */}
        <div className="main-box">
          <div className="logo-box ">
            <div className="logo" style={{ width: 400, height: 'auto' }}>
              <Link href="/" title="Trang chủ">
                <Image
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  src={logo}
                  alt=""
                  title=""
                />
              </Link>
            </div>
          </div>
          <>
            {/*Nav Box*/}
            {MenuItemList}
          </>

          <div className="outer-box">
            <Link href="/tuyen-dung" className="info-btn">
              <i className="icon fa fa-headphones" />
              <small>Tuyển dụng</small>
              Đăng ký ngay
            </Link>
            {/* <span className="divider" /> */}
            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
              <span className="icon fa-solid fa-bars" />
            </div>
          </div>
        </div>
      </div>
      {/* Mobile Menu  */}
      <div
        style={{
          maxHeight: '100vh',
          overflowY: 'auto',
          WebkitOverflowScrolling: 'touch',
        }}
        className={` ${isMobileMenuOpen ? 'show-menu-box' : 'mobile-menu '}`}
      >
        <div className="menu-backdrop" />

        <nav className="menu-box">
          <div className="close-menu-logo">
            <div className="nav-logo">
              <Link href="/" title="Trang chủ">
                <Image width={200} height={50} src={logo} alt="" title="" />
              </Link>
            </div>
            <div className="mobile-nav-toggler" onClick={toggleMobileMenu}>
              <span className="icon fa-solid fa-bars-staggered" />
            </div>
          </div>
          <ul className="navigation clearfix contact-list-one">
            {mainMenuItems.map((item: any, index) => (
              <div className="contact-info-box" key={index}>
                {item.subItems ? (
                  <li
                    className={`${item.className} ${
                      isCurrentPath(item.href) ? 'current' : ''
                    }`}
                  >
                    <Link href={item.href} style={{ color: 'white' }}>
                      {item.label}
                    </Link>

                    {/* Sub-items dropdown */}
                    <ul className="navigation clearfix contact-list-one-custom">
                      {item.subItems.map((subItem: any) => (
                        <li
                          key={subItem.href}
                          className={`${
                            isCurrentPath(subItem.href) ? 'current' : ''
                          } ${subItem.className || ''}`}
                        >
                          <Link href={subItem.href} style={{ color: 'white' }}>
                            {subItem.icon && (
                              <i className="fa p-1" aria-hidden="true">
                                <subItem.icon size={16} />
                              </i>
                            )}
                            {subItem.iconClass && (
                              <i className={`fa ${subItem.iconClass} p-1`} />
                            )}
                            {subItem.label}
                          </Link>

                          {/* Nested subItems (children of subItems) */}
                          {subItem.subItems && (
                            <ul className="navigation clearfix">
                              {subItem.subItems.map((childSubItem: any) => (
                                <li
                                  style={{ marginLeft: '20px' }}
                                  key={childSubItem.href}
                                  className={
                                    isCurrentPath(childSubItem.href)
                                      ? 'current'
                                      : ''
                                  }
                                >
                                  <Link
                                    href={childSubItem.href}
                                    style={{ color: 'white' }}
                                  >
                                    {childSubItem.icon && (
                                      <i className="fa p-1" aria-hidden="true">
                                        <childSubItem.icon size={16} />
                                      </i>
                                    )}
                                    {childSubItem.iconClass && (
                                      <i
                                        className={`fa ${childSubItem.iconClass} p-1`}
                                      />
                                    )}
                                    {childSubItem.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          )}
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li>
                    <Link href={item.href} style={{ color: 'white' }}>
                      {item.label}
                    </Link>
                  </li>
                )}
              </div>
            ))}
          </ul>

          <ul className="contact-list-one">
            <li>
              <div className="contact-info-box">
                <i className="icon lnr-icon-phone-handset" />
                <span className="title">Liên hệ</span>
                <Link href="tel:091 3739 716">091 3739 716</Link>
              </div>
            </li>
            {/* <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-envelope1" />
                <span className="title">Email</span>
                <Link href="mailto:tulinhchuchu@gmail.com">tulinhchuchu@gmail.com</Link>
              </div>
            </li> */}
            {/* <li>
              <div className="contact-info-box">
                <span className="icon lnr-icon-clock" />
                <span className="title">Giờ làm việc</span>
                T2 - T6 8h00 - 17h30
              </div>
            </li> */}
          </ul>
          <div className="">
            <ul className="social-links-custom">
              <li>
                <Link
                  href="https://tiktok.com/@congkgmqg"
                  target="_blank"
                  aria-label="congkgmqg"
                >
                  <span className="fab fa-tiktok" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://facebook.com/congkhonggianmangquocgia"
                  target="_blank"
                  aria-label="congkhonggianmangquocgia"
                >
                  <span className="fab fa-facebook-square" />
                </Link>
              </li>
              <li>
                <Link
                  href="https://youtube.com/@congKGMQG"
                  target="_blank"
                  aria-label="congKGMQG"
                >
                  <span className="fab fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* End Mobile Menu */}

      {/* Sticky Header  */}
      <div className="sticky-header">
        <div className="auto-container">
          <div className="inner-container">
            {/*Logo*/}
            <div className="logo" style={{ width: 110, height: 50 }}>
              <Link href="/" title="Trang chủ">
                <Image
                  style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  src={logo}
                  alt=""
                  title=""
                />
              </Link>
            </div>
            {/*Right Col*/}
            {MenuItemList}
          </div>
        </div>
      </div>
      {/* End Sticky Menu */}
    </header>
  );
};
