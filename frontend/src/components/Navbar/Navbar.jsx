import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({setShowLogin}) => {

    const [menu, setMenu] = useState("home");

    const {getTotalCartAmount} = useContext(StoreContext);

    const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className="navbar-container">
      <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className='navbar-menu'>
        <a href='#header' onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>home</a>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>menu</a>
        <a href='#app-download' onClick={()=>setMenu("mobile-app")} className={menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu==="contact-us"?"active":""}>contact us</a>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
            <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
            <div className={getTotalCartAmount()===0?"":"dot"}>

            </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
        <img className='menu-icon' src={assets.menu_icon} alt="" onClick={() => setShowSidebar(true)} />
      </div>
    
      {showSidebar && (
        <div className="sidebar">
          <img
            src={assets.cross_icon} alt="close" className="close-icon" onClick={() => setShowSidebar(false)}/>
          <ul className='sidebar-menu-list'>
            <a href='#header' onClick={() => {setMenu("home"); setShowSidebar(false)}} className={menu==="home"?"active":""}>home</a>
            <a href='#explore-menu' onClick={() => {setMenu("menu"); setShowSidebar(false)}} className={menu==="menu"?"active":""}>menu</a>
            <a href='#app-download' onClick={() => {setMenu("mobile-app"); setShowSidebar(false)}} className={menu==="mobile-app"?"active":""}>mobile-app</a>
            <a href='#footer' onClick={() => {setMenu("contact-us"); setShowSidebar(false)}} className={menu==="contact-us"?"active":""}>contact us</a>
          </ul>
        </div>
      )}

    </div>
    </div>
  )
}

export default Navbar
