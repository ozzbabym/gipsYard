import React from 'react'
import './Header.css'
import $ from 'jquery'


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
                <button type="button" class="btn btn-info">О нас</button>
                <button type="button" class="btn btn-primary">Каталог</button>
                <button onClick={contacts} type="button" class="btn btn-secondary">Контакты</button>
            </div>
            <div className="modal">
                <div className="modal__container">
                    <div>Номер телефона: 8-999-999-99-99</div>
                    <br/>
                    <div>Карта: 4276 5555 6666 9999</div>
                    <br/>
                    <div>WhatsApp: 8-999-999-99-99</div>
                </div>
            </div>
        </div>
    )
}
