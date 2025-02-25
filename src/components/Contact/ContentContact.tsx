import FormContact from '../Careers/FormContact';

export const ContentContact = () => {
  const logos = [
    {
      id: 1,
      src: '../../assets/images/avenger/logo-new-ncsc.ba256514.png',
      alt: 'Thiên Khôi Logo',
    },
    {
      id: 2,
      src: '../../assets/images/avenger/logo-bkav.324e801e.png',
      alt: 'BKAV Logo',
    },
    {
      id: 3,
      src: '../../assets/images/avenger/logo-coccoc.b7a8c0ab.png',
      alt: 'Coc Coc Logo',
    },
    {
      id: 4,
      src: '../../assets/images/avenger/logo-cmc.d10cc398.png',
      alt: 'CMC Logo',
    },
    {
      id: 5,
      src: '../../assets/images/avenger/logo-fpt.ebc2b520.png',
      alt: 'FPT Logo',
    },
    {
      id: 6,
      src: '../../assets/images/avenger/logo-vnisa.f6f4ef01.png',
      alt: 'VNISA Logo',
    },
    {
      id: 7,
      src: '../../assets/images/avenger/logo-vnpt.92ea9464.png',
      alt: 'VNPT Logo',
    },
    {
      id: 8,
      src: '../../assets/images/avenger/logo-vsc.fdaa3c06.png',
      alt: 'VSC Logo',
    },
  ];

  const LogoBlock = ({ src, alt }: any) => (
    <div className="channel-block col-lg-4 col-md-4 col-sm-6">
      <div className="inner-box" style={{ padding: 20 }}>
        <figure className="image p-3">
          <a href="#">
            {src ? (
              <img src={src} alt={alt} />
            ) : (
              <div className="icon">
                <span className="lnr-icon-plus fa-2xl" />
              </div>
            )}
          </a>
        </figure>
      </div>
    </div>
  );
  return (
    <>
      {/*Contact Details End*/}

      <FormContact />

      <section className="mb--100 position-relative  mt-20">
        <div className="auto-container contact-details-call">
          <div className="row justify-content-center">
            <div className="col-md-12 py-5">
              <div className="rounded-lg p-2">
                <div className="row text-center">
                  <div className="col-md-3  mb-4 mb-md-0">
                    <div className="d-flex flex-column align-items-center">
                      <div className="icon-container bg-white rounded-circle p-3 mb-2">
                        <i
                          className="fas fa-phone-alt text-danger"
                          style={{ fontSize: 24 }}
                        />
                      </div>
                      <h5>Cần liên hệ?</h5>
                      <p className="text-muted mb-0">091 3739 716</p>
                    </div>
                  </div>
                  <div className="col-md-3  mb-4 mb-md-0">
                    <div className="d-flex flex-column align-items-center">
                      <div className="icon-container bg-white rounded-circle p-3 mb-2">
                        <i
                          className="fas fa-envelope text-danger"
                          style={{ fontSize: 24 }}
                        />
                      </div>
                      <h5>Email</h5>
                      <p className="text-muted mb-0">tulinhchuchu@gmail.com</p>
                    </div>
                  </div>
                  <div className="col-md-3  mb-4 mb-md-0">
                    <div className="d-flex flex-column align-items-center">
                      <div className="icon-container bg-white rounded-circle p-3 mb-2">
                        <i
                          className="fas fa-map-marker-alt text-danger"
                          style={{ fontSize: 24 }}
                        />
                      </div>
                      <h5>Facebook</h5>
                      <p className="text-muted mb-0">
                        https://www.facebook.com/ThienKhoiGroup.RealEstate
                      </p>
                    </div>
                  </div>
                  <div className="col-md-3  mb-4 mb-md-0">
                    <div className="d-flex flex-column align-items-center">
                      <div className="icon-container bg-white rounded-circle p-3 mb-2">
                        <i
                          className="fas fa-map-marker-alt text-danger"
                          style={{ fontSize: 24 }}
                        />
                      </div>
                      <h5>Địa chỉ</h5>
                      <p className="text-muted mb-0">
                        Tầng 2 tòa nhà MIPEC Tower, 229 Tây Sơn, Đống Đa, Hà Nội
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Divider: Google Map */}
      <section>
        <div className="row m-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.676161235313!2d105.82087867621819!3d21.00561448063798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ad29f9b371ad%3A0x71e17b075e7697a5!2zMjI5IFAuIFTDonkgU8ahbiwgTmfDoyBUxrAgU-G7nywgxJDhu5FuZyDEkGEsIEjDoCBO4buZaSwgVmlldG5hbQ!5e0!3m2!1sen!2s!4v1740454027279!5m2!1sen!2s"
            width="600"
            height="450"
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </>
  );
};
