import React, { useEffect, useState } from 'react'
import "../style/navbar.css"
import {Link} from "react-router-dom"
import {logo} from "../data/data.json"
import data from "../data/data.json"
import NavOptions from './NavOptions'
const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>

const Navbar = () => {

  const [loc, setLoc] = useState()
  const [phones,setPhones] = useState(data[0].miPhones);

  // console.log(data[0]);
  function GetPath(){
   setLoc(window.location.hash)
  }
 useEffect(()=>{
    console.log("hellooo");
    GetPath()

    if(loc){
      if(loc === "#miphones"){
        setPhones(data[0].miPhones)
        return
      }
    if(loc === "#redmiphones"){
       setPhones(data[0].redmiPhones)
       return
      }
      if(loc === "#tv"){
       return   setPhones(data[0].tv)
      }
      if(loc === "#laptops"){
       return   setPhones(data[0].laptop)
      }
      if(loc === "#lifestyle"){
       return  setPhones(data[0].fitnessAndLifeStyle)
      }
      if(loc === "#home"){
       return  setPhones(data[0].home)
      }
      if(loc === "#audio"){
       return  setPhones(data[0].audio)
      }
      if(loc === "#accessories"){
       return  setPhones(data[0].accessories)
      }
    }
  },[loc])
console.log(loc);

console.log("phones",phones);
  return (<>
    <div className='nav' >
        <div className="logo">
            <Link to="/"> 
            <img id='logoImage' src="{logo}" alt="" />
            </Link>
            </div>   
          <Link onClick={GetPath}  className="navlinks" to="/#miphones">Mi Phones</Link>
          <Link onClick={GetPath}   className="navlinks"  to="/#redmiphones">Redmi Phones</Link>
           <Link onClick={GetPath}   className="navlinks" to="/#tv">TV</Link>
           <Link onClick={GetPath}  className="navlinks" to="/#laptops">Laptops</Link>
           <Link onClick={GetPath}  className="navlinks" to="/#lifestyle">Fitness & Lifestyle</Link>
           <Link onClick={GetPath}  className="navlinks" to="/#home">Home</Link>
           <Link  onClick={GetPath} className="navlinks" to="/#audio">Radio</Link>
           <Link  onClick={GetPath} className="navlinks" to="/#accessories">Accessories</Link>

           <div className="searchbox">
            <input type="text" name="search" placeholder='Search Products' />
            {searchIcon}
           </div>
    </div>
    <NavOptions phones={phones} />
    </>);
}

export default Navbar