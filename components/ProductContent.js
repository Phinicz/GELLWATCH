import React, { useState, useEffect } from "react";
import Image from "next/image";

function ProductContent({ screenSize }) {
  const imgs = [
    "/GellWatches.PNG",
    "/GellWatchPage.PNG",
    "/GellWatchPink.PNG",
    "/GellWatchBlack.PNG",
  ];
  const swapRight = () => {
    if (imgCounter === imgs.length - 1) setImgCounter(0);
    else setImgCounter((p) => p + 1);
  };
  const swapLeft = () => {
    if (imgCounter === 0) setImgCounter(imgs.length - 1);
    else setImgCounter((p) => p - 1);
  };
  const [imgCounter, setImgCounter] = useState(0);
  let productReviews = [
    <div>
      <Image alt="" width={180} height={180} src="/GellWatchPink.PNG"></Image>
      <p className={`${screenSize < 760 && "mb-24"}`}>⭐⭐⭐⭐⭐ 4.8</p>
    </div>,
    <div>
      <div className="flex items-start">
        <p className="text-7xl">24</p>
        <p>//DAYS</p>
      </div>
      <p className="w-48 mt-2">
        GET UP TO 24 DAYS OF SMART WATCH AND UP TO 30 DAYS OF GPS
      </p>
    </div>,
    <div className="flex flex-col gap-5 items-center md:flex-row ">
      <div className="flex gap-1">
        <div
          onClick={swapLeft}
          className="w-10 h-10 rounded-full border-2 border-black flex justify-center items-center hover:cursor-pointer hover:bg-gray-200"
        >
          <p className="mb-1 font-bold"> {"<"} </p>
        </div>
        <div
          onClick={swapRight}
          className="w-10 h-10 rounded-full border-2 border-black flex justify-center items-center hover:cursor-pointer hover:bg-gray-200"
        >
          <p className="mb-1 font-bold">{">"}</p>
        </div>
      </div>
      <p>
        {imgCounter + 1} /{imgs.length}
      </p>
    </div>,
  ];

  let productGallery = (
    <div>
      <Image alt="" src={imgs[imgCounter]} width={600} height={600} />
      <div className="flex gap-1 justify-center items-center mb-5">
        {imgs.map((img, index) => {
          return (
            <p
              key={index}
              className={`w-2 h-2 bg-gray-400 rounded-full ${
                imgCounter == index && "bg-gray-950"
              }`}
            ></p>
          );
        })}
      </div>
    </div>
  );
  let productDescription = (
    <div className="flex flex-col gap-20">
      <div className="flex flex-col gap-10">
        <p className="w-80">
          FLAGSHIP MULTISPORT WATCH WITH ADVANCED TRAINING FEATURES
        </p>
        <div>
          <div className="border-t-2 border-black w-350px md:w-450px flex justify-between">
            <p>DISPLAY TYPE</p>
            <p>AMOLED</p>
          </div>
          <div className="border-t-2 border-black w-350px md:w-450px flex justify-between">
            <p>WEIGHT</p>
            <p>70 G</p>
          </div>
          <div className="border-t-2 border-black w-350px md:w-450px flex justify-between">
            <p>WATER RESISTANCE</p>
            <p>10 ATM</p>
          </div>
          <div className="border-t-2 border-black w-350px md:w-450px flex justify-between">
            <p>BATTERY LIFE</p>
            <p>UP TP 16 DAYS</p>
          </div>
          <div className="border-t-2 border-b-2 border-black w-350px md:w-450px flex justify-between">
            <p>MEMORY</p>
            <p>32 GB</p>
          </div>
        </div>
        <div className="flex gap-7 items-center">
          <div>$340.00</div>
          <div className="flex gap-2 items-center">
            <div className="w-72 bg-black text-white text-center rounded-full font-semibold py-1 hover:bg-white hover:text-black hover:border-2 hover:border-black hover:cursor-pointer">
              BUY
            </div>
            <div className="w-35px h-35px rounded-full p-2 border-2 border-black text-sm flex items-center justify-center hover:cursor-pointer hover:border-blue-500">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.62436 4.4241C3.96537 5.18243 2.75 6.98614 2.75 9.13701C2.75 11.3344 3.64922 13.0281 4.93829 14.4797C6.00072 15.676 7.28684 16.6675 8.54113 17.6345C8.83904 17.8642 9.13515 18.0925 9.42605 18.3218C9.95208 18.7365 10.4213 19.1004 10.8736 19.3647C11.3261 19.6292 11.6904 19.7499 12 19.7499C12.3096 19.7499 12.6739 19.6292 13.1264 19.3647C13.5787 19.1004 14.0479 18.7365 14.574 18.3218C14.8649 18.0925 15.161 17.8642 15.4589 17.6345C16.7132 16.6675 17.9993 15.676 19.0617 14.4797C20.3508 13.0281 21.25 11.3344 21.25 9.13701C21.25 6.98614 20.0346 5.18243 18.3756 4.4241C16.7639 3.68739 14.5983 3.88249 12.5404 6.02065C12.399 6.16754 12.2039 6.25054 12 6.25054C11.7961 6.25054 11.601 6.16754 11.4596 6.02065C9.40166 3.88249 7.23607 3.68739 5.62436 4.4241ZM12 4.45873C9.68795 2.39015 7.09896 2.10078 5.00076 3.05987C2.78471 4.07283 1.25 6.42494 1.25 9.13701C1.25 11.8025 2.3605 13.836 3.81672 15.4757C4.98287 16.7888 6.41022 17.8879 7.67083 18.8585C7.95659 19.0785 8.23378 19.292 8.49742 19.4998C9.00965 19.9036 9.55954 20.3342 10.1168 20.6598C10.6739 20.9853 11.3096 21.2499 12 21.2499C12.6904 21.2499 13.3261 20.9853 13.8832 20.6598C14.4405 20.3342 14.9903 19.9036 15.5026 19.4998C15.7662 19.292 16.0434 19.0785 16.3292 18.8585C17.5898 17.8879 19.0171 16.7888 20.1833 15.4757C21.6395 13.836 22.75 11.8025 22.75 9.13701C22.75 6.42494 21.2153 4.07283 18.9992 3.05987C16.901 2.10078 14.3121 2.39015 12 4.45873Z"
                    fill="#1C274C"
                  ></path>{" "}
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <p className="border-t-2 border-black"></p>
        <div className="flex flex-col gap-5">
          <p className="w-72">
            ONE OF THE BEST SPORT WATCHES WITHOUT COMPROMISE
          </p>
          <div className="flex flex-wrap w-350px md:w-450px">
            <div className="border-2 border-black rounded-full font-bold mt-1 text-xs px-8 py-1 hover:cursor-pointer hover:bg-gray-200">
              + FLASHLIGHT
            </div>
            <div className="border-2 border-black rounded-full font-bold mt-1 text-xs px-8 py-1 hover:cursor-pointer hover:bg-gray-200">
              + GPS
            </div>
            <div className="border-2 border-black rounded-full font-bold mt-1 text-xs px-8 py-1 hover:cursor-pointer hover:bg-gray-200">
              + AMOLED SCREEN
            </div>
            <div className="border-2 border-black rounded-full font-bold mt-1 text-xs px-8 py-1 hover:cursor-pointer hover:bg-gray-200">
              + SATIO
            </div>
            <div className="border-2 border-black rounded-full font-bold mt-1 text-xs px-8 py-1 hover:cursor-pointer hover:bg-gray-200">
              + 24 D ONWORK
            </div>
            <div className="border-2 border-black rounded-full font-bold mt-1 text-xs px-8 py-1 hover:cursor-pointer hover:bg-gray-200">
              + HLL SOOPE
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className=" px-5 md:flex md:gap-24 md:px-10 py-10">
      {screenSize > 760 ? (
        [
          <div className="flex flex-col justify-center items-center md:justify-normal md:items-baseline gap-20">
            {productReviews}
          </div>,
          productGallery,
          productDescription,
        ]
      ) : (
        <div className="flex flex-col items-center">
          {[
            productGallery,
            <div className="flex flex-col justify-center items-center md:justify-normal md:items-baseline gap-20">
              {productReviews.reverse()}
            </div>,
            productDescription,
          ]}
        </div>
      )}
    </div>
  );
}

export default ProductContent;
