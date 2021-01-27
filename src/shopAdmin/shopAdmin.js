import React from "react";
import "../assets/adminProduct.scss";
import ContentHead from "./contentheader";
import SideBar from "./newSidebar";
import NavBar from "./NavBar";
export default class shopAd extends React.Component {
  state = {
    sidebar_open: true,
  };

  componentDidCatch() {
    const token = window.localStorage.getItem("admin_token");
    if (!token) {
      this.props.history.push("/admin/login");
    }
  }

  toggleSidebar = () => {
    this.setState({
      sidebar_open: !this.state.sidebar_open,
    });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div
            className="col-md-2 sideBar "
            style={{ display: this.state.sidebar_open ? "block" : "none" }}
          ></div>
          <div className={this.state.sidebar_open ? "col-md-10" : "col-md-12"}>
            <NavBar toggleSidebar={this.toggleSidebar} />
            <SideBar />
            <ContentHead />
          </div>
        </div>
      </div>
    );
  }
}
