import React, { useState, useEffect, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import Image from "@/components/common/Image";
import { getImagePath } from "@/helpers/images";

const MarkdownLayout = ({ children }) => {
  const [markdown, setMarkdown] = useState("");
  const [zoomedImage, setZoomedImage] = useState(null);

  useEffect(() => {
    if (children) {
      const formattedMarkdown = children.replace(/<\/br>/g, "</br>\n");
      setMarkdown(formattedMarkdown);
    }
  }, [children]);

  const handleImageClick = (src) => {
    setZoomedImage(src);
  };

  const closeZoomModal = () => {
    setZoomedImage(null);
  };

  const markdownComponents = useMemo(
    () => ({
      h1: ({ node, ...props }) => (
        <h1
          className="blog-details__title mb-4"
          {...props}
          style={{ fontStyle: "normal" }}
        />
      ),
      h2: ({ node, ...props }) => (
        <h2
          className="blog-details__subtitle mb-3"
          {...props}
          style={{ fontStyle: "normal" }}
        />
      ),
      h3: ({ node, ...props }) => (
        <h3
          className="blog-details__subtitle mb-3"
          {...props}
          style={{ fontStyle: "normal" }}
        />
      ),
      h4: ({ node, ...props }) => (
        <h4
          className="blog-details__subtitle mb-2"
          {...props}
          style={{ fontStyle: "normal" }}
        />
      ),
      h5: ({ node, ...props }) => (
        <h5
          className="blog-details__subtitle mb-2"
          {...props}
          style={{ fontStyle: "normal" }}
        />
      ),
      h6: ({ node, ...props }) => (
        <h6
          className="blog-details__subtitle mb-2"
          {...props}
          style={{ fontStyle: "normal" }}
        />
      ),
      p: ({ node, ...props }) => (
        <p
          className="blog-details__text-2 mb-3"
          {...props}
          style={{ fontStyle: "normal" }}
        />
      ),
      a: ({ node, ...props }) => (
        <a
          className="text-primary"
          {...props}
          style={{ fontStyle: "normal" }}
        />
      ),
      ul: ({ node, ...props }) => (
        <ul
          className="list-unstyled mb-3"
          {...props}
          style={{ fontStyle: "normal" }}
        />
      ),
      ol: ({ node, ...props }) => (
        <ol className="mb-3" {...props} style={{ fontStyle: "normal" }} />
      ),
      li: ({ node, ...props }) => (
        <li className="mb-2" {...props} style={{ fontStyle: "normal" }} />
      ),
      img: ({ node, src, alt, ...props }) => (
        <>
          <div className="blog-details__img mb-4">
            <Image
              src={getImagePath(src)}
              loading="lazy"
              alt={alt}
              className="img-fluid w-100"
              {...props}
              onClick={() => handleImageClick(getImagePath(src))}
              style={{ cursor: "zoom-in" }}
            />
          </div>
          {zoomedImage && (
            <div className="zoom-modal show" onClick={closeZoomModal}>
              <img src={zoomedImage} alt="Zoomed" />
            </div>
          )}
        </>
      ),
      blockquote: ({ node, ...props }) => (
        <blockquote
          className="blog-details__blockquote mb-4 p-4 bg-light border-start border-primary border-4"
          {...props}
          style={{ fontStyle: "normal" }}
        />
      ),
      table: ({ node, ...props }) => (
        <div className="table-responsive my-4">
          <table className="table table-striped table-bordered" {...props} />
        </div>
      ),
      thead: ({ node, ...props }) => (
        <thead className="table-dark" {...props} />
      ),
      th: ({ node, ...props }) => <th className="p-3" {...props} />,
      td: ({ node, ...props }) => <td className="p-3" {...props} />,
      code: ({ node, inline, className, children, ...props }) => {
        const match = /language-(\w+)/.exec(className || "");
        return !inline && match ? (
          <pre className="bg-light rounded p-3 mb-4">
            <code className={`language-${match[1]}`} {...props}>
              {children}
            </code>
          </pre>
        ) : (
          <code className="bg-light rounded px-2 py-1" {...props}>
            {children}
          </code>
        );
      },
    }),
    [zoomedImage]
  );

  return (
    <div className="row justify-content-center">
      <div className="col-lg-12">
        <div className="blog-details__left">
          <ReactMarkdown
            className="blog-details__content"
            rehypePlugins={[rehypeRaw]}
            remarkPlugins={[[remarkGfm, { singleTilde: true }]]}
            components={markdownComponents}
          >
            {markdown}
          </ReactMarkdown>
        </div>
      </div>

      {zoomedImage && (
        <div className="zoom-modal show" onClick={closeZoomModal}>
          <img src={zoomedImage} alt="Zoomed" />
        </div>
      )}
    </div>
  );
};

export default MarkdownLayout;
