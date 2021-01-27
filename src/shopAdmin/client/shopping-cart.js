import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../../assets/shopping-cart.scss";
import ModalAd from "../modal";
export default class ShoppingCart extends React.Component {
  render() {
    return (
      <>
        <Container>
          <Row className="cart">
            <Col xs={9} className="product-cart">
              <Row>
                <Col xs={3}>
                  <h3>Product </h3>
                </Col>
                <Col xs={6}>
                  <h3>Name</h3>
                  <h3>Price </h3>
                  <Row xs={4} className="qtyRow">
                    <Col className="minus">-</Col>
                    <Col className="quantity">5</Col>
                    <Col className="plus">+</Col>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col xs={3} className="sidebar-submit">
              <Row>
                <h1>Total</h1>
              </Row>
              <Row>
                <button type="submit" className="btn btn-secondary">
                  {" "}
                  Thanh Toan
                </button>
              </Row>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
