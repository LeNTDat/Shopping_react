import React from "react";
import { Row, Col } from "reactstrap";
import "/reactjs/my-app/src/assets/custom.scss";
import "../../assets/style-pro.scss";
export default function Quantity(props) {
  
  
    return (
      <>
        <Col className="productColun">
          <Row xs={4}>
            <h1>Product</h1>
          </Row>
          <Row xs={4} className="qtyRow">
            <Col className="minus" onClick={()=>{props.onChange && props.onChange(-1,true)}}>-</Col>
               <input className="qty-Row" value={props.value || 0} onChange={(event)=>{props.onChange && props.onChange(Number(event.target.value))}} />       
            <Col className="plus" onClick={()=>{props.onChange && props.onChange(1,true)}}>+</Col>
          </Row>
          <Row xs={4}>
            <button type="submit" className="btn btn-secondary">
              Add to Cart
            </button>
          </Row>
        </Col>
      </>
    );
  }
