import React from "react";
import "../assets/adminProduct.scss";
export default function TableHeader(props) {
  const { id, name, price, image } = props.product;
  const isEditting = () => {
    props.Editting(id);
  };
  const deleteProduct = () => {
    props.deleteProduct(id);
  };
  return (
    <div className="table-row">
      <div className="table-cell">{id}</div>
      <div className="table-cell">{name}</div>
      <div className="table-cell">
        <img src={image[0]} alt="products"></img>
      </div>
      <div className="table-cell">{price}</div>
      <div className="table-cell">
        <button className=" btn btn-primary" onClick={isEditting}>
          Edit
        </button>
        <button className="btn btn-primary" onClick={deleteProduct}>
          Delete
        </button>
      </div>
    </div>
  );
}
