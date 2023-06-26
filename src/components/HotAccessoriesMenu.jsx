import React from 'react'
import { Link } from 'react-router-dom'

import "../style/HotAccessoriesMenu.css"


const HotAccessoriesMenu = () => {
  return (
    <div className='HotAccessoriesMenu'>
      <Link className="HotAccessoriesLink" to="/MusicStore" >Music Store</Link>
      <Link className="HotAccessoriesLink" to="/SmartDevice" >Smart Devices</Link>
      <Link className="HotAccessoriesLink" to="/home" >Home</Link>
      <Link className="HotAccessoriesLink" to="/lifeStyle" >Lifestyle</Link>
      <Link className="HotAccessoriesLink" to="/mobileAccessories" >Mobail Asscessories</Link>
      
    </div>
  )
}

export default HotAccessoriesMenu
