import React from 'react';
import { MDBBtn, MDBIcon } from 'mdb-react-ui-kit';

export default function VerMasBtn() {
  return (
    <MDBBtn href="/detail" color='light' rippleColor='dark'>
      <MDBIcon fas icon="search-plus" />
    </MDBBtn>
  );
}

