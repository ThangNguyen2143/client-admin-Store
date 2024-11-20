"use client";

import { useEffect, useState } from "react";
import ImageCloud from "./ImageCloud";
import { CldUploadWidget } from "next-cloudinary";
import { Image as Img } from "~/lib/types";
export function ImageContainer(imgs: string[]) {
  if (imgs.length == 0 || !imgs)
    return (
      <div>
        <span>Chưa có ảnh</span>
      </div>
    );
  return imgs.map((img, index) => {
    // if(img.url.startsWith(""))
    return (
      <div
        className="avatar w-full p-4 sm:w-1/2 md:w-1/2 lg:w-1/3 xl:w-1/4"
        key={index}
      >
        <div className="w-24 rounded">
          <ImageCloud
            url={img}
            altText="uploaded image"
            width={150}
            height={150}
          />
        </div>
      </div>
    );
  });
}
function UploadImage({ imgs, productId }: { imgs?: Img[]; productId: number }) {
  const [loaded, setLoaded] = useState(false);
  const valueImg = imgs?.map((img) => img.url);
  const initState: string[] = valueImg || [];
  const [uploadedImages, setUploadedImages] = useState(initState);
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const uwScript = document.getElementById("uw");
    if (!loaded && !uwScript) {
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "uw");
      script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.addEventListener("load", () => setLoaded(true));
      document.body.appendChild(script);
    }
  }, [loaded]);

  return (
    <div className="m-2 space-y-4">
      <CldUploadWidget
        signatureEndpoint={`/api/sign-cloudinary-params?productId=${productId}`}
        onSuccess={(result, { widget }) => {
          if (result.info === undefined) throw new Error();
          const info = JSON.parse(result.info.toString());
          const secureUrl = info.secure_url;
          const previewUrl = secureUrl.replace(
            "/upload/",
            "/upload/w_400/f_auto,q_auto/",
          );
          setUploadedImages((prevImages) => [...prevImages, previewUrl]);
          setIsDisabled(false);
        }}
        onQueuesEnd={(result, { widget }) => {
          widget.close();
        }}
      >
        {({ open }) => {
          function handleClick() {
            setIsDisabled(true);
            open();
          }
          return (
            <button
              disabled={isDisabled}
              className={`btn btn-primary ${isDisabled ? "btn-disabled" : ""}`}
              type="button"
              onClick={handleClick}
            >
              {isDisabled ? "Đăng hình" : "Thêm hình ảnh"}
            </button>
          );
        }}
      </CldUploadWidget>

      {uploadedImages.length !== 0 && (
        <div className="flex flex-wrap">
          <h2 className="w-full text-xl font-bold">Danh sách hình ảnh</h2>
          {ImageContainer(uploadedImages)}
        </div>
      )}
    </div>
  );
}

export default UploadImage;
