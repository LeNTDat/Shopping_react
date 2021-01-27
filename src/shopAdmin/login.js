import Axios from "axios";
import React, { Component } from "react";
import {
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Col,
  Row,
} from "reactstrap";
import Swal from "sweetalert2";
import "../../src/assets/style-pro.scss";
export default class LoginUser extends Component {
  state = {
    email: "",
    password: "",
  };
  componentDidMount() {
    const token = window.localStorage.getItem("admin_token");
    if (token) {
      this.props.history.push("/admin");
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  handleLogin = (e) => {
    e.preventDefault();
    Axios.post("https://shopping-api-with-jwt.herokuapp.com/login", {
      ...this.state,
    })
      .then((res) => {
        console.log(res);
        const token = res.data;
        window.localStorage.setItem("admin_token", token);
        Swal.fire({
          title: "Login successfully",
          timer: 1000,
          icon: "success",
        }).then(() => {
          this.props.history.push("/admin");
        });
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          title: "Login unsuccessfully",
          timer: 1000,
          icon: "error",
        });
      });
  };
  render() {
    return (
      <Container fluid>
        <Col xs="8" className="form-content">
          <Row>
            <Form inline className="form-style " onSubmit={this.handleLogin}>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="exampleEmail" className="mr-sm-2">
                  Email
                </Label>
                <Input
                  type="email"
                  name="email"
                  onChange={this.handleChange}
                  id="exampleEmail"
                />
              </FormGroup>
              <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
                <Label for="examplePassword" className="mr-sm-2">
                  Password
                </Label>
                <Input
                  type="password"
                  name="password"
                  onChange={this.handleChange}
                  id="examplePassword"
                />
              </FormGroup>
              <Button>Login</Button>
            </Form>
          </Row>
        </Col>
      </Container>
    );
  }
}
