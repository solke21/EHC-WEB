import React, {Component} from "react";
import fourdjs from '../styles/img/photos/fourdjs.jpg'
import fourdjs2 from '../styles/img/photos/fourdjs2.jpg'
import fourdjs3 from '../styles/img/photos/fourdjs3.jpg'
import fourdjs4 from '../styles/img/photos/fourdjs4.jpg'

class AboutUs extends React.Component {
    render () {
        return (
            <div>

 {/* <!-- About Us --> */}

 <section class="acerca-de">
        <div class="info-container">
            <h1>About Us</h1>
            <p>Esencia House Club quiere ser el referente y el lugar de encuentro para los amantes del House Music una vez al mes.</p>
            <p> Madrid recuperará un lugar en la historia del House Music, porque apostaremos por un sonido auténtico, sincero, de verdad. House en estado puro dónde la libertad y en buen rollo será requisito indispensable y dónde el "four on the floor"
                será la banda sonora . Somos La Esencia, somos House.</p>
            <div class="about-gallery">
                <img src= {fourdjs} alt=""/>"
                <img src= {fourdjs2} alt=""/>"
                <img src= {fourdjs3} alt=""/>"
                <img src= {fourdjs4} alt=""/>"


            </div>
            <div class="about-more"><button>Leer más</button></div>
        </div>

    </section>
            </div>
        )
    }
}

export default AboutUs