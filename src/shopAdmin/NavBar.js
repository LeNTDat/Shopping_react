import React from "react";
import FontAwesome from 'react-fontawesome'

export default function Navbar(props) {
  return (
    <div className="navbar">
      <FontAwesome
        className="fa-align-justify"
        size="2x"
        onClick={props.toggleSidebar}
        style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
      />
    </div>
  );
}
