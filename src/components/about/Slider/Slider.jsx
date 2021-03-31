import React, {useEffect, useState} from 'react'
import './Slider.css'
import img1 from '../../../img/ourWork/1.jpeg' 
import img2 from '../../../img/ourWork/2.jpeg' 
import img3 from '../../../img/ourWork/3.jpeg' 
import img4 from '../../../img/ourWork/4.jpeg' 
import img5 from '../../../img/ourWork/5.jpeg' 
import img6 from '../../../img/ourWork/6.jpeg' 
import img7 from '../../../img/ourWork/7.jpeg' 

const img = [
    <img key={img1} src={img1} style={{width: 300}}/>, 
    <img key={img2} src={img2} style={{width: 300}}/>, 
    <img key={img3} src={img3} style={{width: 300}}/>, 
    <img key={img4} src={img4} style={{width: 300}}/>, 
    <img key={img5} src={img5} style={{width: 300}}/>, 
    <img key={img6} src={img6} style={{width: 300}}/>, 
    <img key={img7} src={img7} style={{width: 300}}/>, 
]


export default function Slider() {

    const [activeIndex, setActiveIndex] = useState(0);
 
    // Хук Effect
    useEffect(() => {
        // Запускаем интервал
        setInterval(() => {
            // Меняем состояние
            setActiveIndex((current) => {
                // Вычисляем индекс следующего слайда, который должен вывестись
                const res = current === img.length - 1 ? 0 : current + 1
                // Возвращаем индекс
                return res
            })
        }, 5000)
        // Выключаем интервал
        return () => clearInterval()
    }, [])
    
    // Вычисляем индекс предыдущего слайда
    const prevImgIndex = activeIndex ? activeIndex - 1 : img.length - 1
    // Вычисляем индекс следующего слайда
    const nextImgIndex = activeIndex === img.length - 1 ? 0 : activeIndex + 1

    return (
    <div className="slider">
        <div className="slider-img slider-img-prev"
                key={prevImgIndex}>
            {img[prevImgIndex]}
        </div>
        <div className="slider-img"
                key={activeIndex}>
            {img[activeIndex]}
        </div>
        <div className="slider-img slider-img-next"
                key={nextImgIndex}>
            {img[nextImgIndex]}
        </div>
    </div>
    )
}
