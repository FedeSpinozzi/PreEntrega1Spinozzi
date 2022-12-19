import React from 'react';
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBBtn,
  MDBRipple,
  MDBCol
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBRow className='row-cols-1 row-cols-md-2 g-4'>
      <MDBCol>
        <MDBCard>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage 
            src='https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='...'
            position='top'
          />
          <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Zapatillas de Vestir</MDBCardTitle>
            <MDBCardText>
              Talles de 34 a 50
            </MDBCardText>
          </MDBCardBody>
          <MDBBtn href='#'>Agregar al carrito</MDBBtn>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage 
            src='https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='...'
            position='top'
          />
          <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Zapatos de Vestir</MDBCardTitle>
            <MDBCardText>
              Talles de 44 a 50
            </MDBCardText>
          </MDBCardBody>
          <MDBBtn href='#'>Agregar al carrito</MDBBtn>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage
            src='https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='...'
            position='top'
          />
          <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Zapatillas de Vestir</MDBCardTitle>
            <MDBCardText>
              Talles de 34 a 45
            </MDBCardText>
          </MDBCardBody>
          <MDBBtn href='#'>Agregar al carrito</MDBBtn>
        </MDBCard>
      </MDBCol>
      <MDBCol>
        <MDBCard>
          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
          <MDBCardImage
            src='https://images.pexels.com/photos/137603/pexels-photo-137603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
            alt='...'
            position='top'
          />
          <a>
          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
        </a>
      </MDBRipple>
          <MDBCardBody>
            <MDBCardTitle>Zapatos de Vestir</MDBCardTitle>
            <MDBCardText>
              Talles de 34 a 43
            </MDBCardText>
          </MDBCardBody>
          <MDBBtn href='#'>Agregar al carrito</MDBBtn>
        </MDBCard>
      </MDBCol>
    </MDBRow>
  );
}