import React, {useState} from 'react'
import './Catalog.css'
import {catalogItems} from './catalogItems'
import $ from 'jquery'
import emailjs from 'emailjs-com'
import x from '../../img/X.png'


export default function Catalog() {
    const [goods, setGoods] = useState('')

    const orderGoods = (e) => {
        setGoods(e)
        $('.modalOrder').slideToggle(500)
    }


    const sendForm = (e) => {
        console.log(e.target)
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_7vh13xo', e.target, 'user_ggTnM45MM5yTgPhd0O72t')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        
        $('.modalOrder').slideToggle(500)
            e.target.reset()
    }


    return (
        <div className="catalog">
            <div className="catalog__container">
                {catalogItems.map((item)=><div key={item.id} className="catalog__items" >
                    <br/>
                    <div>
                        <h3>{item.title}</h3>
                    </div>
                    <br/>
                    <img src={item.img} alt="картинка" />
                    <div style={{margin: 10}}>
                        {item.description}
                    </div>
                    <br/>
                    <div>
                        <b>{item.price} руб/м²</b>
                    </div>
                    <br />
                    <button onClick={()=>orderGoods(item.title)} type="button" class="btn btn-primary">Заказать</button>
                </div>
                )}   
            </div>
            <div className="modalOrder">
                <div className="orderContainer">
                    <img onClick={() => $('.modalOrder').slideToggle(500)} src={x} alt="X" style={{width: 30}}/>
                    <form onSubmit={sendForm}>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Материал</label>
                            <input name='goods' type="text" className="form-control" id="exampleFormControlInput1" value={goods}/>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Ваше имя</label>
                            <input minLength="1" name='name' type="text" className="form-control" id="exampleFormControlInput1" placeholder="your name"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlInput1">Ваш контактный номер телефона</label>
                            <input minLength="10" name='phone' type="number" className="form-control" id="exampleFormControlInput1" placeholder="+7()"/>
                        </div>
                        <div className="form-group">
                            <label for="exampleFormControlTextarea1">Ваше сообщение</label>
                            <textarea minLength="5" name='message' className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <br/>
                        <input type="submit" class="btn btn-success" value='Отправить'></input>
                    </form>
                </div>
            </div>
        </div>
    )
}
