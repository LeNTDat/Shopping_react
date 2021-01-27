import React from "react";
import "../../assets/style-pro.scss";
import { Col, Container, Row } from "reactstrap";
export default class ImageContainer extends React.Component {
  state = {
    items: [],
    selected: 0,
  };
  handleSelect(index) {
    this.setState({
      selected: index,
    });
  }

  componentDidMount() {
    this.setState({
      items: this.props.image,
    });
  }

  render() {
    const new_image = this.props.image.map((img) => {
      return img;
    });
    return (
      <>
        <Container fluid className="image-style">
          <Row>
            <img src={new_image[this.state.selected]}></img>
          </Row>

          <Row>
            {this.state.items.map((item, index) => {
              return (
                <Col
                  md={4}
                  onClick={() => {
                    this.handleSelect(index);
                  }}
                >
                  <img key={index} src={item}></img>
                </Col>
              );
            })}
          </Row>
        </Container>
      </>
    );
  }
}
