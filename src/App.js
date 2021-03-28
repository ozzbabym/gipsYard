import {Route} from 'react-router-dom'
import './App.css';
import About from './components/about/About';
import Catalog from './components/catalog/Catalog';

import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Route exact path='/catalog' render={()=>(<Catalog />)} />
        <Route exact path='/' render={()=>(<About/>)} />
      </div>
    </div>
  );
}

export default App;
