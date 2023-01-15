import React from 'react';
import Contador from './Stock'

import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';


class ItemDetailContainer extends React.Component {
    constructor (props){
        super(props);
        this.state = {};
    }
    render (){
        console.log("", this.props);
        const {itemList} = this.props;
        const pathname = window.location.pathname;
        const final = pathname.substring(pathname.length, pathname.length-1);
        return (
            <>
            {itemList.map((i)=>{
                const {Tipo, img, Precio,Talles,text, id} = i;
                if(id === final){


      return (
          <MDBCard style={{ maxWidth: '1540px' }}>
      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={img} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <MDBCardTitle>{Tipo}</MDBCardTitle>
            <MDBCardText>
            {Precio}
            </MDBCardText>
            <MDBCardText>
            {Talles}
            </MDBCardText>
            <MDBCardText>
              <small className='text-muted'>{text}</small>
            </MDBCardText>
          </MDBCardBody>
          <Contador></Contador>
        </MDBCol>
        
      </MDBRow>
    </MDBCard>)}
})}
</>
)
}
}

export default ItemDetailContainer