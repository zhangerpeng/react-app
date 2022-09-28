import React from "react";

export const Product = (props) => {
  const { title, author } = props.pro;
  return (
    <>
      {title},{author}
    </>
  );
};
