import React from "react";
import FontAwesome from "react-fontawesome";
import faStyles from "font-awesome/css/font-awesome.css";
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  NavbarText,
  DropdownToggle,
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  Navbar,
} from "reactstrap";
export default function Navbarclient(props) {
  const toggle = false;
  const isOpen = false;

  return (
    <Container fluid={true}>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/admin">Admin</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText className="icon-cart">
            <NavLink to="/shopping-cart">
              <span class="badge badge-pill badge-primary">1</span>
              <FontAwesome
                className="fa fa-shopping-cart"
                style={{ fontSize: "30px", cursor: "pointer" }}
              />
            </NavLink>
            {/* <FontAwesome
              className="fa fa-shopping-cart"
              style={{
                fontSize: "30px",
                padding: "0px 0px 0px 10px",
                cursor: "pointer",
              }}
            /> */}
          </NavbarText>
        </Collapse>
      </Navbar>
    </Container>
  );
}
