import React, { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Image from "next/image";
import ContentHeader from "@/components/ContentHeader";
import ProductContent from "@/components/ProductContent";

function index() {
  const [selected, setSelected] = useState("Category");
  const [cart, setCart] = useState([2]);
  const [screenSize, setScreenSize] = useState();

  const handleDropDown = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    window.addEventListener("resize", () => setScreenSize(window.innerWidth));
    return () =>
      window.removeEventListener("resize", () => console.log("resize removed"));
  });
  useEffect(() => {
    setScreenSize(window.innerWidth);
  }, []);

  return (
    <div>
      <Nav
        selected={selected}
        handleDropDown={handleDropDown}
        cart={cart}
        screenSize={screenSize}
      />
      <ContentHeader />
      <ProductContent screenSize={screenSize} />
    </div>
  );
}

export default index;
