import React from 'react'
import imgMAn from '../../images/man.png'
import OneMan from './OneMan'


const createMans = (count, curr, img, slogan, name, profession) => {
  var images = []
  var heightVal,
      blurVal,
      opacityval
  for (var i = 0; i < count; i++) {
    
    if(i == curr ) { 
      heightVal = '100%',
      blurVal = 0
      opacityval = 1
    } else if(i > curr) {
      heightVal = '120%'
      opacityval = 0
    } else if(i < curr) {
      heightVal = i == 0 ? ((i + .5) * 30) + '%' : (i * 30) + '%'
      opacityval = 1
      blurVal = '10px'
    }
   images.push(
          <OneMan
            key={i}
            curr={curr} 
            i={i} 
            rightPos={ i*20 } 
            opacityval={opacityval} 
            blurVal={blurVal} 
            heightVal={heightVal}
            slogan={slogan}
            img={img}
            name={name}
            profession={profession}
          />
      ) 
  }
  return images
}


export default function ManWrap(props) {
  return (
    <div style={{
      flexGrow: 1
    }}>
      <div>
        <div className="mans__list">
          { createMans(props.countMan, props.currMan, props.img, props.slogan, props.name, props.profession) }
        </div>
      </div>      
    </div>
  )
}
