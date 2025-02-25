import Image from "@/components/common/Image";
import { groupBy } from "lodash";
import moment from "moment";
import "moment/locale/vi"; // Vietnamese locale data
import Link from "next/link";
import { useEffect, useState } from "react";
import { getImageThumb} from "@/helpers/images";

const NewsHomePage = (data: any) => {
  const groupedData = groupBy(data?.dataNews?.dataNews, "category");
  const dataEvents = groupedData["Hoạt động sự kiện"];
  const [sortedEvents, setSortedEvents] = useState([] as any);

  useEffect(() => {
    const sorted = [...dataEvents].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setSortedEvents(sorted);
  }, []);
  return (
    <>
      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title">
            <span className="sub-title">TIN TỨC</span>
            <h2>
              Bài viết <br /> mới nhất
            </h2>
            <div className="btn-box">
              <Link
                href="hoat-dong"
                title="Tất cả bài viết"
                className="theme-btn btn-style-one"
              >
                <span className="btn-title">Tất cả bài viết</span>
                <i className=" fa-thin fa-arrow-right" />
              </Link>
            </div>
          </div>
          <div className="row">
            {data &&
              sortedEvents?.slice(0, 3).map((item: any, index: any) => {
                return (
                  <div
                    className="news-block col-lg-4 col-md-12 col-sm-12  fadeInUp"
                    key={index}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      height: "100%",
                    }}
                  >
                    <div
                      className="inner-box"
                      style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <div className="image-box" style={{ height: "220px" }}>
                        <figure className="image">
                          <Link href={`hoat-dong/${item.slug}`} title={item.title}>
                            <Image
                              style={{
                                maxWidth: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                              loading="lazy"
                              alt={item.title}
                              src={getImageThumb(item?.cover)}
                            />
                          </Link>
                        </figure>
                      </div>
                      <div
                        className="content-box"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "space-between",
                        }}
                      >
                        <div className="date-box">
                          <span className="date">
                            {moment(item.date).format("Do")}
                          </span>
                          <small>{moment(item.date).format("MMMM YYYY")}</small>
                        </div>
                        <h5
                          className="title"
                          style={{
                            fontWeight: "bold",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            display: "-webkit-box",
                            WebkitLineClamp: 2,
                            WebkitBoxOrient: "vertical",
                            whiteSpace: "normal",
                          }}
                        >
                          <Link
                            href={`hoat-dong/${item.slug}`}
                            data-bs-toggle="tooltip"
                            data-bs-placement="top"
                            title={item.title}
                          >
                            {item.title}
                          </Link>
                        </h5>
                        <Link
                          href={`hoat-dong/${item.slug}`}
                          className="read-more"
                        >
                          Xem thêm <i className="fa-thin fa-arrow-right" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsHomePage;
