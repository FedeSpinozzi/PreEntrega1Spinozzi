
import './App.css';
import Navigation from './components/Navbar';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import ItemListContainer from './components/ItemListContainer';



let itemList = [
  {"Tipo": "Zapatillas Elegantes",
  "Talles": "34 a 50",
  "img": "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {"Tipo": "Zapatos Elegantes",
  "Talles": "44 a 50",
  "img": "https://images.pexels.com/photos/292998/pexels-photo-292998.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {"Tipo": "Zapatillas Elegantes",
  "Talles": "34 a 45",
  "img": "https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {"Tipo": "Zapatos Elegantes",
  "Talles": "34 a 43",
  "img": "https://images.pexels.com/photos/137603/pexels-photo-137603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
]

function App() {
  return (
    <div className="App">
      <Navigation/>
      
      <ItemListContainer itemList={itemList} />
      
    </div>
  );
}

export default App;
