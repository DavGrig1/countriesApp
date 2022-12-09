import React from 'react'
import '../styles/card.scss'

const Card = ({img, name, info = [], onClick}) => {
  
  return (
	  <div className='cardContainer' onClick={onClick}>
      <img src={img} alt={name} className='image'/>
      
      <div className='cardBody'>
        <h2 className='title'>{name}</h2>

        <ul className='list'>
          {info.map(el => (
            <li className='listItem' key={el.title}>
              <b>{el.title}:</b> {el.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Card