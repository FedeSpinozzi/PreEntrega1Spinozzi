
import './App.css';
import Navigation from './components/Header/Navbar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



let itemList = [
  {"Tipo": "elegante",
  "Talles": "34 a 50",
  "id":"1",
  "Precio": "$30500",
  "img": "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "text": "Zapatillas de vestir, de tela azul con una confortable base para poder usar todos los dìas",
  "genero": "masculino",
  "stock": 10
  },
  {"Tipo": "elegante",
  "Talles": "44 a 50",
  "id":"2",
  "Precio": "$35500",
  "img": "https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "text": "Zapatos de vestir construidos con cuero vacuno de primera calidad, con formato italiano",
  "genero": "masculino",
  "stock": 5
  },
  {"Tipo": "deportivo",
  "Talles": "34 a 45",
  "id":"3",
  "Precio": "$17500",
  "img": "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "text": "Zapatillas tipo botita, de gamuza de primera calidad",
  "genero": "masculino",
  "stock": 7
  },
  {"Tipo": "elegante",
  "Talles": "34 a 43",
  "id":"4",
  "Precio": "$37500",
  "img": "https://images.pexels.com/photos/137603/pexels-photo-137603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "text": "Zapatos femeninos importados desde Italia",
  "genero": "femenino",
  "stock": 8
  },
]

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navigation/>
      
      <Routes>
        <Route path="/" element={<ItemListContainer itemList={itemList}/>}/>  
        <Route path="/detail/:id" element={<ItemDetailContainer itemList={itemList}/>}/>
        <Route path="/tipo/:tipoElegido" element={<ItemListContainer itemList={itemList}/>}/>  
        <Route path="/genero/:generoElegido" element={<ItemListContainer itemList={itemList}/>}/> 
        <Route path="/genero/tallesespeciales" element={<ItemListContainer itemList={itemList}/>}/> 
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
