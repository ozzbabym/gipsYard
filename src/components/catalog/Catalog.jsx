import React from 'react'
import './Catalog.css'
import antichnoe from '../../img/antichnoeTree650.jpeg'
import rvaniySlanec from '../../img/rvaniySlanec750.jpeg'
import oldStone from '../../img/oldStone670.jpeg'
import oldStoneLittle from '../../img/oldStoneLittle490.jpeg'


export default function Catalog() {

    const catalogItems = [
        {   id: 1,
            img: antichnoe,
            description: 'ОЛИВА Благословенное дерево в античной, иудейской, христианской и исламской традициях, широко известное как символ мира, а также победы, радости, изобилия, чистоты, бессмертия и целомудрия. Будучи чрезвычайно важной культурой в Средиземноморье (раннее, обильное, длительное плодоношение), олива считалась священным деревом в Древней Греции, атрибутом воинственной богини Афины.',
            price: 650 
        },
        {   id: 2,
            img: rvaniySlanec,
            description: 'ОЛИВА Благословенное дерево в античной, иудейской, христианской и исламской традициях, широко известное как символ мира, а также победы, радости, изобилия, чистоты, бессмертия и целомудрия. Будучи чрезвычайно важной культурой в Средиземноморье (раннее, обильное, длительное плодоношение), олива считалась священным деревом в Древней Греции, атрибутом воинственной богини Афины.',
            price: 750 
        },
        {   id: 3,
            img: oldStone,
            description: 'ОЛИВА Благословенное дерево в античной, иудейской, христианской и исламской традициях, широко известное как символ мира, а также победы, радости, изобилия, чистоты, бессмертия и целомудрия. Будучи чрезвычайно важной культурой в Средиземноморье (раннее, обильное, длительное плодоношение), олива считалась священным деревом в Древней Греции, атрибутом воинственной богини Афины.',
            price: 670 
        },
        {   id: 4,
            img: oldStoneLittle,
            description: 'ОЛИВА Благословенное дерево в античной, иудейской, христианской и исламской традициях, широко известное как символ мира, а также победы, радости, изобилия, чистоты, бессмертия и целомудрия. Будучи чрезвычайно важной культурой в Средиземноморье (раннее, обильное, длительное плодоношение), олива считалась священным деревом в Древней Греции, атрибутом воинственной богини Афины.',
            price: 490 
        },
    ]


    return (
        <div className="catalog">
            <div className="catalog__container">
                {catalogItems.map((item)=><div key={item.id} className="catalog__items">
                    <img src={item.img} alt="картинка" />
                    <div style={{margin: 10}}>
                        {item.description}
                    </div>
                    <br/>
                    <div>
                        <b>{item.price} руб/м²</b>
                    </div>
                    <br />
                    <button type="button" class="btn btn-primary">Заказать</button>
                </div>
                )}   
            </div>
        </div>
    )
}
