import React,{useState,useEffect} from 'react'
import NavCard from "./NavCard"
import "../style/Navoption.css"

const NavOptions = ( {phones} ) => {
 

    
    return (
    <div className='navOptions'>
            {phones.map ((item)=>(
                 
                 < NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
                     ))}
            
    </div>
  )
}

export default NavOptions
