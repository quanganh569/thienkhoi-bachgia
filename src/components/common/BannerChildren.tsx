import Link from "next/link";

type BannerChildrenProps = {
  image?: string;
  title?: string;
};

export const BannerChildren = ({ image, title }: BannerChildrenProps) => {
  return (
    <section
      className="page-title"
      style={{
        backgroundImage: image,
       
      }}
    >
      <div className="auto-container">
      {/* <div className="bg bg-pattern-8" /> */}
        <div className="title-outer">
          <h2 className=" text-md text-white">{title} </h2>
          <ul className="page-breadcrumb">
            <li>
              <Link href="/">Trang chủ</Link>
            </li>
            <li>{title}</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
