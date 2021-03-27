import './App.css';
import Catalog from './components/catalog/Catalog';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Catalog />
      </div>
    </div>
  );
}

export default App;
