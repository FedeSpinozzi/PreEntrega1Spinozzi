import Form from 'react-bootstrap/Form';
import {
    MDBNavbar,
    MDBContainer,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBadge
  } from 'mdb-react-ui-kit';

  function CartWidget(){
    return (
        <Form className="d-flex">
                      
            <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
            <MDBNavbarNav>
            <MDBNavbarItem>
            <MDBNavbarLink href='#'>
              <MDBBadge pill color='danger'>4</MDBBadge>
              <span>
                <MDBIcon fas icon='shopping-cart'></MDBIcon>
              </span>
            </MDBNavbarLink>
            </MDBNavbarItem>
            </MDBNavbarNav>
            </MDBContainer>
            </MDBNavbar>
          </Form>
    )
  }

  export default CartWidget