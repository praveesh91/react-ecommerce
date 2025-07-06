import React from "react";
import { FeaturedProduct, Hero } from "../components";
import { customFetch } from "../utils/index";

const url = "/products?featured=true";

export const loader = async () => {
  const response = await customFetch.get(url);
  const products = response.data.data;
  return { products };
};

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProduct />
    </>
  );
};

export default Landing;
