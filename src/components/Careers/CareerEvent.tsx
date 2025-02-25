import Image from "@/components/common/Image";
import { groupBy } from "lodash";
import moment from "moment";
import "moment/locale/vi";
import Link from "next/link";
import { useEffect, useState } from "react";
import { getImageThumb } from "@/helpers/images";

// Pagination Component
const Pagination = ({ 
  totalItems, 
  itemsPerPage, 
  currentPage, 
  onPageChange 
}: { 
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav aria-label="Page navigation" className="mt-4">
      <ul className="pagination justify-content-center">
        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Trước
          </button>
        </li>
        
        {pages.map(page => (
          <li 
            key={page} 
            className={`page-item ${currentPage === page ? 'active' : ''}`}
          >
            <button 
              className="page-link" 
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          </li>
        ))}
        
        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
          <button 
            className="page-link" 
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Sau
          </button>
        </li>
      </ul>
    </nav>
  );
};

const CareerEvent = (dataActivity: any) => {
  const [filterKeyword, setFilterKeyword] = useState("");
  const [filteredData, setFilteredData] = useState([] as any);
  const [sortedActivity, setSortedActivity] = useState([] as any);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    const groupedData = groupBy(
      dataActivity?.dataActivity?.dataEvents,
      "category"
    );
    const dataEventActivity = groupedData["Tuyển dụng"];

    if (dataEventActivity) {
      const filtered = dataEventActivity.filter((item: any) =>
        item.title.toLowerCase().includes(filterKeyword.toLowerCase())
      );

      setFilteredData(filtered);
      setCurrentPage(1); // Reset to first page when filter changes
    }
  }, [dataActivity, filterKeyword]);

  useEffect(() => {
    const sorted = [...filteredData].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );

    setSortedActivity(sorted);
  }, [filteredData]);

  // Get current items
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedActivity.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <section className="filter-section mt-5">
        <div className="auto-container">
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Tìm kiếm sự kiện tuyển dụng..."
              value={filterKeyword}
              onChange={(e) => setFilterKeyword(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="news-section">
        <div className="auto-container">
          <div className="sec-title">
            <span className="sub-title">TIN TỨC</span>
            <h2>Tuyển dụng</h2>
          </div>
          <div className="row">
            {currentItems.length > 0 ? (
              currentItems.map((item: any, index: any) => (
                <div
                  className="news-block col-lg-4 col-md-12 col-sm-12 fadeInUp"
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
                        <Link href={`tuyen-dung/${item.slug}`}>
                          <Image
                            style={{
                              maxWidth: "100%",
                              height: "100%",
                              objectFit: "cover",
                            }}
                            loading="lazy"
                            alt="Đang tải ..."
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
                          {moment(item.date).format("DD")}
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
                          href={`tuyen-dung/${item.slug}`}
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title={item.title}
                        >
                          {item.title}
                        </Link>
                      </h5>
                      <Link href={`tuyen-dung/${item.slug}`} className="read-more">
                        Xem thêm <i className="fa-thin fa-arrow-right" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="alert alert-secondary text-center w-100">
                <p className="mb-0">Không có sự kiện nào phù hợp.</p>
              </div>
            )}
          </div>
          
          <Pagination
            totalItems={sortedActivity.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </section>
    </>
  );
};

export default CareerEvent;