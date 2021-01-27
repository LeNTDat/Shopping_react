import React from "react";
import { withRouter } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Quantity from "./commonQuantity";
import ImageContainer from "./ImageContainer";
import Axios from "axios";
import Navbarclient from "./NavbarClient";

class ProDetail extends React.Component {
  state = {
    quantity: 0,
    items: {},
    loadding: undefined,
  };
  componentDidMount() {
    this.setState({
      loading: true,
    });
    Axios.get(
      `https://shopping-api-with-jwt.herokuapp.com/products/${this.props.match.params.id}`
    )
      .then((res) => {
        console.log(res);
        this.setState({
          items: res.data,
          loading: false,
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  }

  handleChangeQuantity = (data, operator = false) => {
    if (operator) {
      return this.setState({
        quantity: this.state.quantity + data,
      });
    }
    this.setState({
      quantity: data,
    });
  };
  render() {
    const { name, price, image } = this.state.items;

    return (
      <>
        {this.state.loading === false ? (
          <Container>
            <Row xs={2}>
              <Col xs={3} className="product-col">
                <ImageContainer image={image} />

                {}
              </Col>
              <Col xs={9}>
                <Quantity
                  onChange={this.handleChangeQuantity}
                  value={this.state.quantity}
                />
              </Col>
            </Row>
          </Container>
        ) : (
          "loading"
        )}
      </>
    );
  }
}

export default withRouter(ProDetail);
