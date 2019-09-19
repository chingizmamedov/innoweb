import React from 'react'
import imgMAn from '../../images/miniman.png'


const createMans = (count, curr) => {
  var images = []
  for (var i = 0; i < count; i++) {
   images.push(<img className="mans__item" key={i} data-id={i} style={{
     marginLeft: i == 0 ? -curr*156 + 'px' : 0,
     marginRight: '10px',
     top: 0,
     opacity: i == curr ? 1 : .5,
     zIndex: i,
     height: 210 + 'px'
   }} src={imgMAn} alt="" />) 
  }
  return images
}


export default function ManWrap(props) {
  return (
    <div>
      Man wrap
      countman: {props.countMan}<br />
      currMan: {props.currMan}
      <div className="mans__list">
        {
          createMans(props.countMan, props.currMan)
        }
      </div>
      
      
    </div>
  )
}
