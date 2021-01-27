import React from "react";

export default function HeaderTop(props) {
  const handleClick = () => {
    props.toggle();
  };
  return (
    <>
      <div className="top-header">
        <h2>Product</h2>
        <button className="btn btn-primary" onClick={handleClick}>
          +Add
        </button>
      </div>
    </>
  );
}
