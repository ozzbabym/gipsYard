import React from 'react'
import './About.css'
import Slider from './Slider/Slider'
import like from '../../img/icon/like.png'
import grand from '../../img/icon/100.png'
import ourProductions from '../../img/icon/ourProductions.png'


export default function About() {
    
    
    return (
        <div>
            <h1 style={{textAlign: 'center', marginTop: 20, minWidth: 320}}>Наши работы</h1>
            
            <div className="about">
                <Slider />
            </div>
            <div className="akcia"><b>Акция</b></div>
            <div className="akcia__text">При заказе монтажа действует скидка <b>10%</b> на плитку</div>
            <div className='icon'>
                <div></div>
                <div>
                    <img src={like} alt="картинка"/>
                    <img src={grand} alt="картинка"/>
                    <img src={ourProductions} alt="картинка"/>
                </div>
                <div></div>
            </div>
        </div>
    )
}
