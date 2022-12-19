
import './App.css';
import Navigation from './components/Navbar';
import BasicExample from './components/Container'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";




function App() {
  return (
    <div className="App">
      <Navigation/>
      <BasicExample/>
    </div>
  );
}

export default App;
