import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar.js'
import ItemListContainer from './components/ItemListContainer';


const App = () => {
  return (
    <>
    <div className="App">
      <Navbar></Navbar>
      <ItemListContainer></ItemListContainer>
    </div>
    </>
  );
}

export default App;
