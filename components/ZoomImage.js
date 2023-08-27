import React, { useState } from "react";

const ZoomImage = () => {
  const [zoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (e) => {
    setZoomed(true);
    setPosition({ x: e.nativeEvent.offsetX, y: e.nativeEvent.offsetY });
  };

  const handleMouseLeave = () => {
    setZoomed(false);
  };

  return (
    <div className="relative">
      <img
        src="GellWatchPink.PNG"
        alt="Zoom Image"
        className={`transition-transform duration-500 ${
          zoomed ? "scale-150" : "scale-100"
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      {zoomed && (
        <div
          className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-25"
          style={{
            transformOrigin: `${position.x}px ${position.y}px`,
          }}
        />
      )}
    </div>
  );
};

export default ZoomImage;
