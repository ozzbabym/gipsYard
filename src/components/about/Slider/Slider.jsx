import React, {useEffect, useState} from 'react'
import './Slider.css'
import img1 from '../../../img/ourWork/1.jpg' 
import img2 from '../../../img/ourWork/2.jpg' 
import img3 from '../../../img/ourWork/3.jpg' 
import img4 from '../../../img/ourWork/4.jpg' 


const img = [
    <img key={img1} src={img1} />, 
    <img key={img2} src={img2} />, 
    <img key={img3} src={img3} />, 
    <img key={img4} src={img4} />, 
    
]


export default function Slider() {
    const [activeIndex, setActiveIndex] = useState(0);
 
    useEffect(() => {
        setInterval(() => {
            setActiveIndex((current) => {   
                const res = current === img.length - 1 ? 0 : current + 1     
                return res
            })
        }, 4000)
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
