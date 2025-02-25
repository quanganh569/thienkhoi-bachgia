import { useEffect } from "react";
import Scroll from "react-scroll";
import useScroll from "../../hooks/useScroll";

const BackToTop = () => {
  const scroll = useScroll();

  const width = 64;
  const strokeWidth = 4;
  const radius = width / 2 - strokeWidth * 2;

  useEffect(() => {
    var circle = document.querySelector("circle");
    if (circle) {
      var circumference = radius * 2 * Math.PI;
      circle.style.strokeDasharray = `${circumference} ${circumference}`;
      circle.style.strokeDashoffset = `${circumference}`;
      const offset = circumference - (scroll.progress / 100) * circumference;
      circle.style.strokeDashoffset = offset.toString();
    }

    return () => {
      if (circle) {
        circle.style.strokeDashoffset = "0";
      }
    };
  }, [scroll.progress, radius]);

  return (
    <>
      <div
        className="scroll-to-top scroll-to-target"
        onClick={() => {
          const scroll = Scroll.animateScroll;
          scroll.scrollToTop({
            duration: 500,
            delay: 100,
            smooth: true,
          });
        }}
        data-target="html"
        style={{ display: "block" }}
      >
        <span className="fa fa-angle-up" aria-hidden="true" />
      </div>
    </>
  );
};

export default BackToTop;
