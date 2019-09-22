import React, { useEffect } from 'react'
import './about.scss'

export default function ManList(props) {  
  return (
    <div style={{
      width: '35%'
    }}>
      <h1 className="manlist__title">Наша команда</h1>
      {
        props.mans.map((item, index) => (
          
          <div  className={props.currMan == index ? 'manlist__item manlist__item-active' : 'manlist__item'} key={index} onClick={() => {
            props.changeAbility(item.name, item.ability.designe, item.ability.front,item.ability.back,item.ability.speak,item.ability.proje, item.slogan, item.img, item.profession)
            props.changeCurMan(index)}
          } data-flow={index}>{item.name}</div>
        ))
      }
    </div>
  )
}
