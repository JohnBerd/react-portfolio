import React from 'react'
import './wave-animation.css'
import Background from '../../assets/images/wave-top.png'

const WaveAnimation = () => {
  return (
    <div class="waveWrapper waveAnimation">
      <div class="waveWrapperInner bgBottom">
        <div class="wave waveBottom" style={{backgroundImage: `url(${Background})`}}></div>
      </div>
    </div>
  )
}

export default WaveAnimation;