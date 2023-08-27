import React from "react";

function ContentHeader() {
  return (
    <div className="flex gap-15 pt-32 px-5 md:px-10">
      <div>
        <div className="flex gap-10 mb-5 md:mb-0 items-center md:items-start">
          <p className="text-4xl md:text-9xl">*WATCH {"{31GL}"}</p>
          <div className="mt-5">
            <p className="text-sm md:text-base">#357291</p>
            <p className="text-sm md:text-base">//USA</p>
          </div>
        </div>
        <div className="flex gap-10 items-center">
          <p className="text-sm md:text-base w-32">
            DESGINED FOR ROUND-THE-CLOCK WEARING
          </p>
          <p className="text-4xl md:text-9xl">SAPPHIRE PRO</p>
        </div>
      </div>
    </div>
  );
}

export default ContentHeader;
