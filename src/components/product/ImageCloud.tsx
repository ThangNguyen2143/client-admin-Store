"use client";
import { CldImage } from "next-cloudinary";
interface ImgProps {
  url: string;
  altText: string;
  width: number;
  height: number;
}
function ImageCloud(propsImg: ImgProps) {
  return (
    <CldImage
      width={propsImg.width}
      height={propsImg.height}
      src={propsImg.url}
      alt={propsImg.altText}
    />
  );
}

export default ImageCloud;
