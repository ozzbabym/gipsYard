import React from 'react'
import './Header.css'
import $ from 'jquery'
import x from '../../img/X.png'
import { NavLink } from 'react-router-dom'

export default function Header() {

    const contacts = () => {
        $('.modal').slideToggle(500)
    }

    return (
        <div className="header">
            <div className="numberPhone">
                <div>
                    <b>Gips Yard</b>
                </div>
                <div>
                    контактный номер: 8-999-999-99-99
                </div>
            </div>
            <div className="menu">
                <NavLink to='/'><button type="button" class="btn btn-info">О нас</button></NavLink>
                <NavLink to='/catalog'><button type="button" class="btn btn-primary">Каталог</button></NavLink>
                <button onClick={contacts} type="button" class="btn btn-secondary">Контакты</button>
            </div>
            <div className="modal">
            <img onClick={() => $('.modal').slideToggle(500)} src={x} alt="X" style={{width: 30, margin: "5px 0px 0px 5px"}}/>
                <div className="modal__container">
                    <div><b>Номер телефона: 8-999-999-99-99</b></div>
                    <br/>
                    <div><b>Карта: 4276 5555 6666 9999</b></div>
                    <br/>
                    <div><b>WhatsApp: 8-999-999-99-99</b></div>
                </div>
            </div>
        </div>
    )
}
