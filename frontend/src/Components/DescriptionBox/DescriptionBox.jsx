import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="description-nav-box">Description</div>
            <div className="description-nav-box fade">Reviews (122)</div>
        </div>
        <div className="descriptionbox-description">
            <p> Choose from a variety of vehicles, from sedans to SUVs, all maintained for a smooth and reliable ride.</p>
            <p>With competitive rates, easy online booking, and 24/7 support, your journey starts with us—worry-free!</p>
        </div>
    </div>
  )
}

export default DescriptionBox