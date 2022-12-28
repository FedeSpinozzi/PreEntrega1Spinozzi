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



class ItemListContainer extends React.Component {
    constructor (props){
        super(props);
        this.state = {};
    }
    render (){
        const {itemList} = this.props;
   
        return (
            <>
            {itemList.map((i)=>{
                const {Tipo, Talles, img} = i;
        console.log(i)

                       return <MDBRow className='row-cols-1 row-cols-md-3 g-4' >
                       <MDBCol>
                        <MDBCard>
                          <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                          <MDBCardImage 
                            src={img}
                            alt='...'
                            position='top'
                          />
                          <a>
                          <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                        </a>
                      </MDBRipple>
                          <MDBCardBody>
                            <MDBCardTitle>{Tipo}</MDBCardTitle>
                            <MDBCardText>
                              {Talles}
                            </MDBCardText>
                          </MDBCardBody>
                          <MDBBtn href='#'>Agregar al carrito</MDBBtn>
                        </MDBCard>
                      </MDBCol></MDBRow>
            })}
            </>
        )
    }
}

export default ItemListContainer