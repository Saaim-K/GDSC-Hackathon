import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Biryani from '../Assets/biryani.jpg'
import burger from '../Assets/burger.jpg'
import pizza from '../Assets/pizza.jpg'
import './Home.css'

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className='hContainer'>
                <div className='br box'>
                    <h1>Biryani</h1>
                    <Link to={"/Biryani"}>
                        <img src={Biryani} alt="" />
                    </Link>
                </div>
                <div className='bg box'>
                    <h1>Burger</h1>
                    <Link to={"/burger"}>
                        <img src={burger} alt="" />
                    </Link>
                </div>
                <div className='pz box'>
                    <h1>Pizza</h1>
                    <Link to={"/pizza"}>
                        <img src={pizza} alt="" />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Home