import React from "react";
import Product from "./Product";
import { Row } from "reactstrap";
import Axios from "axios";
import ProDetail from "./Product-detail";
export default class Productlist extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    Axios.get("https://shopping-api-with-jwt.herokuapp.com/products")
      .then((res) => {
        this.setState({
          products: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <Row>
        {this.state.products.map((product, index) => {
          return (
            <>
              <Product
                key={`$product_${index}`}
                id={product.id}
                name={product.name}
                image={product.image[0]}
                price={product.price}
              />
            </>
          );
        })}
      </Row>
    );
  }
}
