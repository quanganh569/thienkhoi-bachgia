import React from "react";
import Background from "./Background";
import love from "@/assets/images/love.png";
import Image from "next/legacy/image";
import bg from "@/assets/images/background-office.jpeg";
import Button from "@/common/Button";
const Banner = () => {
  return (
    <section className="hero" style={{background:"../../assets/images/background/backgroud-list-02.jpg"}}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 style={{ color: "white" }}>
          Do what you <span className="highlight">Love</span> everyday
        </h1>
        <p style={{ color: "white" }}>
          Bạn có thích những gì chúng tôi đang và sẽ làm?
          <br />
          Nếu bạn muốn làm việc trong môi trường trẻ trung, sáng tạo và đóng góp
          cho nền an toàn thông tin nước nhà, đừng ngần ngại mà hãy gửi ngay CV
          cho chúng tôi.
        </p>
        <a href="mailto:your-email@example.com" className="btn btn-yellow">
          Ứng tuyển ngay
        </a>
      </div>
    </section>
  );
};

export default Banner;
