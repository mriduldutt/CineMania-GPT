import React from "react";
import {IMG_CDN_URL } from "../utils/constants";

const ItemCard = ({ title, poster }) => {
  return (
    <div className="mx-auto mt-2 md:m-2 hover:underline w-32 md:w-44">
      <img className="w-full rounded-md" src={IMG_CDN_URL+poster} />
      <p className="text-center text-lg">{title}</p>
    </div>
  );
};

export default ItemCard;