import React, {Component} from "react";
import {Link} from "react-router-dom";
import { bubble as Menu } from 'react-burger-menu'
import img_mcmenu from '../styles/img/icons/menu-puntos-vertical.png'
import OurDjs from "../views/OurDjs";


class Header extends React.Component {
    showSettings (event) {
        event.preventDefault();
      }
    
    render () {
        return (
            <div>

{/* <!-- McMenu --> */}

    <header id="header">
        <nav class="menu">
        <Menu isOpen={ false } >
            <a id="Our Djs" className="menu-item" href="/OurDjs">Our Djs</a>
            <a id="Events" className="menu-item" href="/events">Events</a>
            <a id="Tickets" className="menu-item" href="https://ra.co/events/1592042">Tickets: Resident Advisor</a>
        </Menu>


            <div class="logo-box">
                <h1>
                    <Link to= "/">Esencia House Club</Link></h1>
            </div>

{/* <!-- MenuNav --> */}

            <div class="list-container">
                <ul class="lists">
                    <li><Link to= "/">Home</Link></li>
                    <li><Link to= "/AboutUs">About Us</Link></li>
                    <li><Link to= "/Profile">Profile</Link></li>

                </ul>

            </div>
        </nav>

{/* <!-- IMG header --> */}

<div class="img-header">
    <div class="welcome">
        <h1>Welcome to Esencia</h1>
        <hr/>
        <p>House Music Events</p>
        <button id="abajo">See More</button>
    </div>
</div>

</header>
            </div>
        )
    }
}

export default Header