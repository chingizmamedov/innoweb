import React from 'react'

export default function OneMan(props) {
  return (
    <div style={{
      right: props.rightPos + 'px',
      marginRight: '10px',
      opacity: props.opacityval,
      filter: 'blur(' + props.blurVal + ')',
      zIndex: props.i,
      height: props.heightVal ,
      position: 'absolute',
      bottom: '0',
      top: '0',
      marginTop: 'auto',
      marginBottom: 'auto',
      transition: '.7s'
    }} >
        <img className="mans__item" data-id={props.i} src={props.slogan} alt="alt" style={{ height: '100%'}} />
        
        <div className="slogan" style={{
          position: 'absolute',
          zIndex: 2,
          opacity: props.i != props.curr ? 0 : 1
        }}>
          <div className="slogan-blur"></div>
          <p>{ props.img }</p>
        </div>
        <div className="info" style={{
            opacity: props.i != props.curr ? 0 : 1
        }}>
          <div className="info-prof">{props.profession}</div>
          <div className="info-name">{props.name}</div>
          <div className="info-contacts"></div>
        </div>

     </div>
  )
}
