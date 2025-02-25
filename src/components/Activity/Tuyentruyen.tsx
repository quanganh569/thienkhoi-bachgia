

import React, { useEffect, useState } from "react";
import Image from "@/components/common/Image";
import { groupBy } from "lodash";
import moment from "moment";
import "moment/locale/vi";
import Link from "next/link";
import { getImageThumb } from "@/helpers/images";

// Interfaces remain the same
interface Event {
  slug: string;
  title: string;
  date: string;
  cover: string;
  category: string;
}

interface NewsCardProps {
  item: Event;
}

// Bootstrap Pagination component
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

// NewsCard component remains the same
const NewsCard: React.FC<NewsCardProps> = ({ item }) => {
  return (
    <div
      className="news-block col-lg-4 col-md-12 col-sm-12 fadeInUp"
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
            <Link href={`tuyen-truyen/${item.slug}`}>
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
            <span className="date">{moment(item.date).format("DD")}</span>
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
              href={`tuyen-truyen/${item.slug}`}
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title={item.title}
            >
              {item.title}
            </Link>
          </h5>
          <Link href={`tuyen-truyen/${item.slug}`} className="read-more">
            Xem thêm <i className="fa-thin fa-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

// Modified NewsList component with Bootstrap pagination
interface NewsListProps {
  title: string;
  subtitle: string;
  events: Event[];
}

const NewsList: React.FC<NewsListProps> = ({ title, subtitle, events }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 25;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEvents = events.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="auto-container mb-4">
      <div className="sec-title">
        <span className="sub-title">{subtitle}</span>
        <h2>{title}</h2>
      </div>
      <div className="row">
        {events.length > 0 ? (
          currentEvents.map((item, index) => <NewsCard key={index} item={item} />)
        ) : (
          <div className="alert alert-secondary text-center w-100 my-3">
            <h6 className="mb-0">Không có sự kiện nào phù hợp.</h6>
          </div>
        )}
      </div>
      <Pagination
        totalItems={events.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

// Main TuyentruyenEvent component
const TuyentruyenEvent = ({ dataActivity }: { dataActivity: any }) => {
  const [sortedEvents, setSortedEvents] = useState<{
    activity: Event[];
    series: Event[];
    weeks: Event[];
    reports: Event[];
  }>({
    activity: [],
    series: [],
    weeks: [],
    reports: [],
  });

  const [filter, setFilter] = useState("");

  useEffect(() => {
    const groupedData = groupBy(dataActivity, "category");
    console.log(groupedData,"groupedData")
    const sortByDate = (events: Event[] = []) =>
      [...events].sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );

    setSortedEvents({
      activity: sortByDate(groupedData["Tuyên truyền 1-100"]),
      series: sortByDate(groupedData["Tuyên truyền 101-200"]),
      weeks: sortByDate(groupedData["Tuyên truyền 201-300"]),
      reports: sortByDate(
        groupedData["Tuyên truyền"]
      ),
    });
  }, [dataActivity]);

  const filteredSections = [
    {
      title: "Tuyên truyền 1",
      subtitle: "Tuyên truyền",
      events: sortedEvents.series.filter((event) =>
        event.title.toLowerCase().includes(filter.toLowerCase())
      ),
    },
    {
      title: "Tuyên truyền 2",
      subtitle: "Tuyên truyền",
      events: sortedEvents.weeks.filter((event) =>
        event.title.toLowerCase().includes(filter.toLowerCase())
      ),
    },
    {
      title: "Tuyên truyền 3",
      subtitle: "Tuyên truyền",
      events: sortedEvents.reports.filter((event) =>
        event.title.toLowerCase().includes(filter.toLowerCase())
      ),
    },
    {
      title: "Tuyên truyền 4",
      subtitle: "Tuyên truyền",
      events: sortedEvents.activity.filter((event) =>
        event.title.toLowerCase().includes(filter.toLowerCase())
      ),
    },
  ];

  return (
    <section className="news-section container">
      <div className="form-group mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm bài viết..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      {filteredSections.map((section, index) => (
        <NewsList
          key={index}
          title={""}
          subtitle={section.subtitle}
          events={section.events}
        />
      ))}
    </section>
  );
};

export default TuyentruyenEvent;