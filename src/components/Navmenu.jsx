import React from 'react'
import NavCard from './NavCard'
const Navmenu = ({miPhones,redmiPhone}) => {
    return (
        <div className="Navmenu">
            <div>
             </div>
             <div>
            {miPhones && miPhones.map((item,index)=>(
                <NavCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}
             {redmiPhone && redmiPhone.map((item,index)=>(
                <NavCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
            ))}
            
        </div>
        </div>
  )
}

export default Navmenu
