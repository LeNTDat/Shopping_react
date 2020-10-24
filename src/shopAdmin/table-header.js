import React from "react";

export default function TableHeader() {
  return (
    <div className="table-headers">
      <div className="table-head">
        <div className="table-cell">id</div>
        <div className="table-cell">Name</div>
        <div className="table-cell">Image</div>
        <div className="table-cell">Price</div>
        <div className="table-cell">Action</div>
      </div>
      <div className="table-row">
        <div className="table-cell">#1</div>
        <div className="table-cell">Name</div>
        <div className="table-cell">Image</div>
        <div className="table-cell">Price</div>
        <div className="table-cell">
          <button className=" btn btn-primary">Edit</button>
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
}
