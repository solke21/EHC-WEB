import React, {Component} from "react";
import John from '../styles/img/photos/john.jpg'
import Raul from '../styles/img/photos/raul.jpg'
import Solke from '../styles/img/photos/solke.jpg'
import David from '../styles/img/photos/david.jpg'

class OurDjs extends React.Component {
    render () {
        return (
            <div>

 {/* <!-- Our Djs --> */}

 <section class="acerca-de">
        <div class="info-container">
            <h1>Our Djs</h1>
            <p>Esencia House Club quiere ser el referente y el lugar de encuentro para los amantes del House Music una vez al mes.</p>
            <p> Madrid recuperará un lugar en la historia del House Music, porque apostaremos por un sonido auténtico, sincero, de verdad. House en estado puro dónde la libertad y en buen rollo será requisito indispensable y dónde el "four on the floor"
                será la banda sonora . Somos La Esencia, somos House.</p>
            <div class="about-gallery">
                <img src= {John} alt=""/>"
                <img src= {Raul} alt=""/>"
                <img src= {Solke} alt=""/>"
                <img src= {David} alt=""/>"
            </div>
            <div class="about-more"><button>Leer más</button></div>
        </div>

    </section>
            </div>
        )
    }
}

export default OurDjs