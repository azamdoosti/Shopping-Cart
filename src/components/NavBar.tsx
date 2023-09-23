import {Container, Nav, NavLink, Navbar as NavbarBs} from "react-bootstrap"
const NavBar = () => {
  return (
   <NavbarBs className="bg-white shadow-sm mb-3" >
<Container>
<Nav>
  <Nav.Link to="/" as={NavLink}> Home</Nav.Link>
  <Nav.Link to="/store" as={NavLink}> Store</Nav.Link>
  <Nav.Link to="/about" as={NavLink}> About</Nav.Link>
</Nav>
</Container>

   </NavbarBs>
  )
}

export default NavBar