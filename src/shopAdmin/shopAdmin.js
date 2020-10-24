import React from "react";
import "./adminProduct.scss";
import SideBar from "./newSidebar";
import TableHeader from "./table-header";
function shopAd() {
  return (
    <div className="row">
      <SideBar />
      <div className="col-md-8">
        <h2>Product</h2>
        <button className="btn btn-primary">+Add</button>
        <TableHeader />
      </div>
    </div>
  );
}
export default shopAd;
