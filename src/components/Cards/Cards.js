import React from 'react'
import Card from './Card/Card'

const Cards = (props) => {
    console.log('[Cards]', props)

    const cards = props.data.map(card => {
        return (
            <Card
            key={card['_id']}
            titulo= {card.title}
            contenido= {card.content}
            responsable= {card.responsible}
            />
        );
    });

    //<Card  titulo= 'Titulo'
      //      contenido= 'Contenido'
        //    responsable= 'Responsable'
          //  />

    return(
        <div>
            {cards}
        </div>
    );
}

export default Cards