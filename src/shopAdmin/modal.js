import React from "react";

export default class ModalAd extends React.Component {
  state = {
    name: "Priuc",
    price: "",
    image: "",
  };

  componentDidMount() {
    if (this.props.editProduct) {
      const { name, price, image } = this.props.editProduct;
      this.setState({
        name,
        price,
        image,
      });
    }
  }

  componentDidUpdate() { }

  componentWillUnmount() {
    this.props.clearEdditing();
  }

  handleClose = () => {
    this.props.toggle();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, price, image } = this.state;
    if (this.props.editProduct) {
      this.props.updateProduct(name, price, image);
    } else {
      this.props.addProduct(name, price, image);
    }

    this.props.toggle();
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  render() {
    const { name, price, image } = this.state;
    return (
      <div className="modal" style={{ display: "block" }}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{this.props.editProduct ? "Edit Product" : "Add Product"}</h5>
              <button
                type="button"
                className="close"
                onClick={this.handleClose}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    placeholder="Product Name"
                    value={name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="input-group form-group">
                  <input
                    name="price"
                    type="Number"
                    className="form-control"
                    aria-label="Amount (to the nearest dollar)"
                    value={price}
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <span className="input-group-text">$</span>
                    <span className="input-group-text">0.00</span>
                  </div>
                </div>
                <div className="form-group">
                  <input
                    name="image"
                    type="text"
                    className="form-control"
                    placeholder="Image"
                    value={image}
                    onChange={this.handleChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={this.handleSubmit}
              >
                {this.props.editProduct ? "Save" : "+Add"}
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={this.handleClose}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
