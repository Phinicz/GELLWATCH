import React, { useState, useEffect } from "react";
import Nav from "@/components/Nav";
import Image from "next/image";
import ContentHeader from "@/components/ContentHeader";
import ProductContent from "@/components/ProductContent";

function index() {
  const [selected, setSelected] = useState("Category");
  const [cart, setCart] = useState([2]);

  const handleDropDown = (e) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <Nav
        selected={selected}
        handleDropDown={handleDropDown}
        cart={cart}
        setCart={setCart}
      />
      <ContentHeader />
      <ProductContent />
    </div>
  );
}

export default index;
