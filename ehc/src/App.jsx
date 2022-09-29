import Home from "./views/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom"
import AboutUs from "./views/AboutUs"
import Profile from "./views/Profile"
import './styles/css/style.css';

export default function App() {
    return [ 
    <section>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route exact path="/" element = {<Home/>}/>
                <Route path="/AboutUs" element = {<AboutUs/>}/>
                <Route path="/Profile" element = {<Profile/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </section>
    ]
}

