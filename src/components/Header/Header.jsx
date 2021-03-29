import React from 'react'
import './Header.css'
import $ from 'jquery'
import x from '../../img/X.png'
import { NavLink } from 'react-router-dom'
import G from '../../img/GipsYard.png'

export default function Header() {

    const contacts = () => {
        $('.modal').slideToggle(500)
    }

    return (
        <div className="header">
            <div className="numberPhone">
                <div>
                    <img src={G} alt="картинка"/>
                    <div className="brand">
                        <b>Gips Yard</b>
                        <div className='underbrand'>декоративная плитка</div>
                    </div>
                </div>
                <div>
                    <b>контактный номер: <a href="tel:+79671834750">+7-967-183-47-50</a></b>
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
                    <div><b>Номер телефона: <a href="tel:+79671834750">+7-967-183-47-50</a></b></div>
                    <br/>
                    <div><b>Viber: <a title="Viber" href="viber://add?number=+79671834750">+7-967-183-47-50</a></b></div>
                    <br/>
                    <div><b>WhatApp: <a title="WhatsApp" href="whatsapp://send?phone=+79671834750">+7-967-183-47-50</a></b></div>
                </div>
            </div>
        </div>
    )
}
