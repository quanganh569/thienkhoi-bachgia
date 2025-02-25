// import Image from "next/legacy/image";
import Image from "next/legacy/image";
import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
type ImageWrapperProps = {
  image: any;
};
const ImageWrapper = ({ image }: ImageWrapperProps) => {
  const [isZoomed, setIsZoomed] = useState(false);

  const handleZoomChange = useCallback((shouldZoom: any) => {
    setIsZoomed(shouldZoom);
  }, []);
  return (
    <div className="cursor-pointer">
      <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
        
      <div className="relative image-wrapper cursor-pointer">
        <Image
          src={image}
          alt="JD"
          className="img-fluid"
          style={{ objectFit: "contain" }}
        />
      </div>
      </ControlledZoom>

     
    </div>
  );
};

export default ImageWrapper;
