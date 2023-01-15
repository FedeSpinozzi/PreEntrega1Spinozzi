import React, { useEffect } from 'react';
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
import { Link, useParams } from 'react-router-dom';



const ItemListContainer = ({ itemList }) => {


  const valor = useParams();

  console.log(valor)
  const { tipoElegido, generoElegido } = valor;
  console.log("22222", generoElegido)
  if (tipoElegido) {
    itemList = itemList.filter((ele)=>ele.Tipo == tipoElegido)
  }
  if (generoElegido) {
    itemList = itemList.filter((ele)=>ele.genero == generoElegido)
  }

  console.log("11111", itemList)

  useEffect(() => { }, [itemList])

  return <>
    {itemList.map((i) => {
      const { Tipo, Talles, img, Precio, stock } = i;
      console.log(i)

      return <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
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
              <MDBCardText>
                {Precio}
              </MDBCardText>
            </MDBCardBody>
            <MDBBtn href='#'>Agregar al carrito</MDBBtn>
            <Link to={`/detail/${i.id}`}>
              DETALLE
            </Link>
          </MDBCard>
        </MDBCol></MDBRow>
    })}
  </>
};


export default ItemListContainer;