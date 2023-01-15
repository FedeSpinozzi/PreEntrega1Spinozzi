import { useState } from 'react';
import { MDBBtn, MDBBtnGroup } from 'mdb-react-ui-kit';


const Contador = ({ stock }) => {
    const [cantidad, setCantidad] = useState(1);

    const sumar = () => {
        if (cantidad < stock) {
            setCantidad(cantidad + 1);
        }
    };

    const restar = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div>
            <MDBBtnGroup size='lg' aria-label='Basic example'>
                <MDBBtn onClick={restar}>-</MDBBtn>
                <p>{cantidad}</p>
                <MDBBtn disabled={cantidad === stock} onClick={restar}>
                    +
                </MDBBtn>
                </MDBBtnGroup>
            <MDBBtn>Agregar al carrito</MDBBtn>
        </div>
    );
};

export default Contador;
