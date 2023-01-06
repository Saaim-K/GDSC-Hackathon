import React from 'react'
import Navbar from '../Navbar/Navbar'
import { useState, useEffect } from 'react';
import axios from 'axios';
import '../data.css'


const Burgar = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/food/products/search?query=burger&apiKey=d8a250c7960342c4876dd2fefdf8228f`)
            .then(response => {
                let data = response.data.products;
                console.log(data);
                setData(data)
            })
            .catch(error => {
                console.log('Error occured while fetching product ❌', error)
            })
    }, [])

    return (
        <div>
            <Navbar />
             <div className='mainData'>{data.map(products => (
                <div className='dataDiv' key={products.id}>
                    <img src={products.image} alt="" />
                    <div className='title'>
                        <h6>{products.title}</h6>
                    </div>
                    {/* <button onClick={favourite}>Favourite/</button> */}
                </div>
            ))}
            </div>
        </div>
    )
}

export default Burgar