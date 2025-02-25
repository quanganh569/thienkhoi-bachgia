import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import remarkGfm from "remark-gfm";
import { X } from "lucide-react";

const ZoomableImage = ({ src, alt }) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleImageClick = () => {
    setIsZoomed(true);
  };

  const handleClose = (e) => {
    e.stopPropagation(); // Prevent triggering parent `div` click
    setIsZoomed(false);
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        onClick={handleImageClick}
        className="cursor-pointer hover:opacity-90 transition-opacity"
        aria-label="Click to zoom"
      />
      {isZoomed && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center"
          onClick={handleClose}
          aria-modal="true"
          role="dialog"
        >
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            aria-label="Close zoomed image"
          >
            <X size={24} />
          </button>
          <img
            src={src}
            alt={alt}
            className="max-h-[90vh] max-w-[90vw] object-contain"
          />
        </div>
      )}
    </>
  );
};

const MarkdownLayout = ({ children }) => {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    if (children) {
      const _markdown = children.replaceAll("</br>", "</br>\n");
      setMarkdown(_markdown);
    }
  }, [children]);

  return (
    <ReactMarkdown
      className="markdown"
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[[remarkGfm, { singleTilde: true }]]}
      components={{
        h1: (props) => <h2 {...props} />,
        h2: ({ node, ...props }) => <h2 className="text-3xl" {...props} />,
        h3: ({ node, ...props }) => <h3 className="text-2xl" {...props} />,
        h4: ({ node, ...props }) => <h4 className="text-xl" {...props} />,
        h5: ({ node, ...props }) => <h5 className="text-lg" {...props} />,
        h6: ({ node, ...props }) => <h6 className="text-md" {...props} />,
        p: ({ node, ...props }) => (
          <p
            style={{
              color: "rgb(41, 41, 41)",
            }}
            {...props}
          />
        ),
        a: ({ node, ...props }) => (
          <a className="text-blue-400 hover:text-blue-500" {...props} />
        ),
        table: ({ node, ...props }) => (
          <table
            style={{
              width: "100%",
              borderCollapse: "collapse",
              border: "solid 1px black",
              color: "rgb(41, 41, 41)",
            }}
            {...props}
          />
        ),
        thead: ({ node, ...props }) => (
          <thead
            style={{
              border: "solid 1px black",
              backgroundColor: "gray",
              textAlign: "center",
            }}
            {...props}
          />
        ),
        tr: ({ node, ...props }) => (
          <tr
            style={{
              border: "solid 1px black",
              color: "rgb(41, 41, 41)",
            }}
            {...props}
          />
        ),
        tbody: ({ node, ...props }) => (
          <tbody
            style={{
              border: "solid 1px black",
              color: "rgb(41, 41, 41)",
            }}
            {...props}
          />
        ),
        th: ({ node, ...props }) => (
          <th
            style={{
              border: "solid 1px black",
              color: "rgb(41, 41, 41)",
            }}
            {...props}
          />
        ),
        td: ({ node, ...props }) => (
          <td
            style={{
              border: "solid 1px black",
              color: "rgb(41, 41, 41)",
            }}
            {...props}
          />
        ),
        img: ({ node, ...props }) => (
          <div className="w-full flex justify-center">
            {/* <ZoomableImage {...props} /> */}
          </div>
        ),
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownLayout;
