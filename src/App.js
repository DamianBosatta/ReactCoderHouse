import NavBar from './components/navBar';
import './App.css';
import ItemListContainer from './components/ItemListContariner';

function App() {
  return (
    <div className="App">
      <NavBar />
      <h1>Bienvenido a mi tienda online</h1>
      <ItemListContainer message="Bienvenido al catálogo de productos!" />
    </div>
  );
}
export default App;
