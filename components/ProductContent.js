import React, { useState, useEffect } from "react";
import Image from "next/image";
//

function ProductContent() {
  const swapRight = () => {
    if (imgCounter === 3) setImgCounter(0);
    else setImgCounter((p) => p + 1);
  };
  const swapLeft = () => {
    if (imgCounter === 0) setImgCounter(3);
    else setImgCounter((p) => p - 1);
  };
  const [imgCounter, setImgCounter] = useState(0);
  const [screenSize, setScreenSize] = useState();
  const imgs = [
    "/GellWatches.PNG",
    "/GellWatchPage.PNG",
    "/GellWatchPink.PNG",
    "/GellWatchBlack.PNG",
  ];

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
          className="w-10 h-10 rounded-full border-2 border-black flex justify-center items-center hover:cursor-pointer"
        >
          <p className="mb-1 font-bold"> {"<"} </p>
        </div>
        <div
          onClick={swapRight}
          className="w-10 h-10 rounded-full border-2 border-black flex justify-center items-center hover:cursor-pointer"
        >
          <p className="mb-1 font-bold">{">"}</p>
        </div>
      </div>
      <p>{imgCounter + 1}/4</p>
    </div>,
  ];

  let productGallery = (
    <div>
      <Image alt="" src={imgs[imgCounter]} width={600} height={600} />
      <div className="flex gap-1 justify-center items-center">
        <p
          className={`bg-gray-400 w-2 h-2 rounded-full mb-5 ${
            imgCounter || "bg-gray-950"
          }`}
        ></p>
        <p
          className={`bg-gray-400 w-2 h-2 rounded-full mb-5 ${
            imgCounter == 1 && "bg-gray-950"
          }`}
        ></p>
        <p
          className={`bg-gray-400 w-2 h-2 rounded-full mb-5 ${
            imgCounter == 2 && "bg-gray-950"
          }`}
        ></p>
        <p
          className={`bg-gray-400 w-2 h-2 rounded-full mb-5 ${
            imgCounter == 3 && "bg-gray-950"
          }`}
        ></p>
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
            <div className="w-72 bg-black text-white text-center rounded-full font-semibold py-1">
              BUY
            </div>
            <div className="w-35px h-35px rounded-full p-2 border-2 text-sm flex items-center justify-center">
              ❤️
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
            <div className="border-2 border-black rounded-full font-bold mt-1 text-xs px-8 py-1">
              + FLASHLIGHT
            </div>
            <div className="border-2 border-black rounded-full font-bold mt-1 text-xs px-8 py-1">
              + GPS
            </div>
            <div className="border-2 border-black rounded-full font-bold mt-1 text-xs px-8 py-1">
              + AMOLED SCREEN
            </div>
            <div className="border-2 border-black rounded-full font-bold mt-1 text-xs px-8 py-1">
              + SATIO
            </div>
            <div className="border-2 border-black rounded-full font-bold mt-1 text-xs px-8 py-1">
              + 24 D ONWORK
            </div>
            <div className="border-2 border-black rounded-full font-bold mt-1 text-xs px-8 py-1">
              + HLL SOOPE
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  useEffect(() => {
    (async () => {
      window.addEventListener("resize", () => {
        setScreenSize(window.innerWidth);
        console.log("screenSize", screenSize);
      });

      return () =>
        window.removeEventListener("resize", () =>
          console.log("reoved resize")
        );
    })();
  });

  useEffect(() => {
    setScreenSize(window.innerWidth);
    console.log("screenSize 1:", screenSize);
  }, [screenSize]);
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
