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
      <footer className='footer'>
          <div className='footer__container'>
              <div className="ofert">ООО "Гипс Ярд" ОГРН 320682000029712 Указзаные на сайте цены не являются публичной офертой (ст. 435 ГК РФ). Стоимость и наличие товара просьба уточнять в офисе продаж </div>
              <br/>
              <div>ОРГН 320682000029712</div>
              <div>Индивидуальный предприниматель Мордовин Олег Олегович</div>
              <div>ИНН 682902598301</div>
              <div>Счёт 40802810608500031388</div>
              <div>Банк получатель: ТОЧКА ПАО БАНКА "ФК ОТКРЫТИЕ"</div>
              <div>город: Москва</div>
              <div>БИК: 044525999</div>
              <div>Корр.счёт: 30101810845250000999</div>
          </div>
      </footer>
    </div>
  );
}

export default App;
