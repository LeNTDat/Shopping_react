import React from "react";
import TableHeader from "./table-header";
import HeaderTop from "./header-top";
import ModalAd from "./modal";
import Axios from "axios";
export default class ContentHead extends React.Component {
  state = {
    isEditting: undefined,
    open: false,
    products: [],
    id_product: [],
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

  editProduct = (id) => {
    const productIndex = this.state.products.findIndex((product) => {
      return product.id === id;
    });
    this.setState({
      isEditting: productIndex,
    });
    this.toggleModal();
  };

  clearEdditing = () => {
    this.setState({
      isEditting: undefined,
    });
  };

  toggleModal = () => {
    this.setState({
      open: !this.state.open,
    });
  };

  addProduct = (name, price, image) => {
    const product = {
      id: this.state.products.length,
      name,
      price,
      image,
    };
    this.setState({
      products: [...this.state.products, product],
    });
  };
  updateProduct = (name, price, image) => {
    const new_Products = [...this.state.products];

    new_Products[this.state.isEditting] = {
      name,
      price,
      image,
    };
    this.setState({
      products: new_Products,
    });
  };

  deleteProduct = (id) => {
    const update_Product = [...this.state.products].filter((product) => {
      return product.id !== id;
    });
    this.setState({
      products: update_Product,
    });
  };

  render() {
    return (
      <>
        <div>
          <HeaderTop toggle={this.toggleModal} />
          <div className="table-headers">
            <div className="table-head">
              <div className="table-cell">id</div>
              <div className="table-cell">Name</div>
              <div className="table-cell">Image</div>
              <div className="table-cell">Price</div>
              <div className="table-cell">Action</div>
            </div>
            {this.state.products.length > 0
              ? this.state.products.map((product) => {
                  return (
                    <TableHeader
                      Editting={this.editProduct}
                      deleteProduct={this.deleteProduct}
                      key={product.id}
                      product={product}
                    />
                  );
                })
              : "THERE IS NO ITEM "}
          </div>
        </div>

        {this.state.open ? (
          <ModalAd
            clearEdditing={this.clearEdditing}
            editProduct={this.state.products[this.state.isEditting]}
            addProduct={this.addProduct}
            toggle={this.toggleModal}
            updateProduct={this.updateProduct}
          />
        ) : (
          ""
        )}
      </>
    );
  }
}
