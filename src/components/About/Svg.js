import React from 'react'

export default function Svg(props) {
  return (
    <div style={{
      paddingTop: '4%'
    }}>
      <svg width="300" height="300">
        <path style={{transition: '2s'}} d={"M0 55 L95 0 L190 55 L190 165 L95 220 L0 165  z"} fill="#02082A" strokeWidth="3px" stroke="#00E5A8" />
        <path style={{transition: '2s'}} d={"M"+ (10 + Math.pow(props.allStete.proje, -1/2)) +" 65 L95 "+ (100/Math.pow(props.allStete.designe, 2)) +"  L"+ (parseInt(100) + parseInt(props.allStete.front)*10)  +" 65 L"+ (160 + 3*props.allStete.back ) + " "+ (135 + 3.4*props.allStete.back) +" L"+ (77 + Math.pow(props.allStete.speak, 1/3)) +" "+ (120 + 6.6*props.allStete.speak) +" L0 165  z"} stroke="#00E5A8" fill="#00E5A8" />
      </svg>
    </div>
  )
}
