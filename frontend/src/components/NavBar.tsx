import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import axios from "axios";
import { baseApiUrl } from "../utilities/baseApiUrl";

const handleResetOrders = async () => {
  try {
    const resetApiUrl = "api/orders";
    const res = await axios.delete(baseApiUrl + resetApiUrl);
    console.log(res);
  } catch (err) {
    console.error(err);
  }
};

const NavBar = () => {
  return (
    <>
      <NavbarBs className="bg-white shadow-sm mb-3">
        <Container>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/"}>
              Menu
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/cart"}>
              Cart
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/checkout"}>
              Checkout
            </Nav.Link>
          </Nav>
          <Button style={{ opacity: 0 }} onClick={handleResetOrders}>
            Reset Orders
          </Button>
        </Container>
      </NavbarBs>
    </>
  );
};

export default NavBar;
