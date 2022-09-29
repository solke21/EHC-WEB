import React, {Component} from "react";
import ReactPlayer from "react-player";
import Reseña1 from '../styles/img/photos/reseñas-1.jpg'
import Reseña2 from '../styles/img/photos/reseñas-2.jpg'
import Reseña3 from '../styles/img/photos/reseñas-3.jpg'
import VideoHome from '../styles/img/videos/video_home.mp4' 

class Home extends React.Component {
    render () {
        return (
            <div>
                
{/*<!-- Go top -->*/}

    <div class="go-top">
        <span><i class="fas fa-angle-up"></i></span>
    </div>
  
{/* <!-- Menu de Navegacion --> */}

<main>

{/* <!--- Video --> */}

<div className= "video-title">
    <ReactPlayer
    url={VideoHome}
    width='100%'
    height='100%'
    controls
    playing
    loop
    />
</div>

{/* <!--- Reviews --> */}

<section class="reseñas">
    <div class="reseñas-title">
        <h2>Reviews</h2>
        <hr/>
    </div>

    <div class="box-reseñas">

        <div class="card-reseñas">
            <div class="cards-img"><img src= {Reseña1} alt=""/></div>
            <div class="reseñas-text">
                <h4>David Valles</h4>
                <p>Una cita obligaba en madrid si eres amante de la música electrónica elegante. Un gran trato por parte del personal y una fiesta muy divertida. Recomendable 100%</p>
            </div>
        </div>
        <div class="card-reseñas">
            <div class="cards-img"><img src= {Reseña2} alt=""/></div>
            <div class="reseñas-text">
                <h4>Adrigo Cho</h4>
                <p>Tremendo Club, de los de antes. Oscurito y musicón, si te gusta el House, estás tardando...</p>
            </div>
        </div>
        <div class="card-reseñas">
            <div class="cards-img"><img src= {Reseña3} alt=""/></div>
            <div class="reseñas-text">
                <h4>Laura Granados</h4>
                <p>Si eres amante del house, no dudes en ir a la fiesta de Esencia House Club. Se realiza una vez al mes en Hangar 48, en la calle Bailén 24 (la Latina) y es un no parar de disfrutar. Música house, performance, luces y un buen rollo
                    impresionante. ¡Un plan perfecto para los findes en la capital!👏👏👏</p>

            </div>
        </div>
    </div>


</section>


 
</main>


            </div>
        )
    }
}

export default Home