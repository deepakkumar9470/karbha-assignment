import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const changeBg = () =>{
    if(window.screenY >= 50){
      setOpen(true)
    }else{
      setOpen(false)
    }
  }

  window.addEventListener('scroll', changeBg)
  
  return (
       <nav className={open ? 'nav active' :  'nav'}>
       
          <a href="#">
            <img src={logo} alt="logo" className='logo' />
           </a>
          <input type="text" 
          className="menu-btn" 
          id='menu-btn'/>
          <label htmlFor="menu-icon" className='menu-icon'>
            <span className="nav-icon"></span>  
          </label> 

          <ul className="menu">
            
            <li><a href="#" className="active">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Themes</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">Contact</a></li>
            </ul> 
     </nav>
  )
}

export default Navbar