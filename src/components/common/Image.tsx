import NextImage, { ImageLoader, ImageProps } from "next/image";

// opt-out of image optimization, no-op
const customLoader: ImageLoader = ({ src }) => {
  return src;
};

export default function Image(props: ImageProps) {
  return (
    <NextImage width={100} height={100} {...props} loader={customLoader} />
  );
}
