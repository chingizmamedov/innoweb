import React from 'react'

export default function Svg(props) {
  return (
    <div>
      <svg width="300" height="200">
        <path style={{transition: '2s'}} d={"M0 55 L145 0 L290 55 L217 180 L72 180  z"} stroke="red" />
        <path style={{transition: '2s'}} d={"M"+ (10 + Math.pow(props.allStete.proje, -1/2)) +" 65 L145 "+ (150/Math.pow(props.allStete.designe, 2)) +"  L"+ (parseInt(200) + parseInt(props.allStete.front)*10)  +" 65 L"+ (190 + 3.8*props.allStete.back ) + " "+ (120 + 3.4*props.allStete.back) +" L"+ (77 + Math.pow(props.allStete.speak, 1/3)) +" "+ (120 + 6.6*props.allStete.speak) +"  z"} stroke="blue" fill="grey" />
      </svg>
    </div>
  )
}
