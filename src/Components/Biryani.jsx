import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Biryani = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(`https://api.spoonacular.com/food/products/search?query=biryani&apiKey=0a6d931e3dca4049b985ccf62614e45a`)
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
        <>
            <div>{data.map(products => (
                <div key={products.id}>
                    {products.title}
                    <img src={products.image} alt="" />
                    <button>Favourite/</button>
                </div>
            ))}
            </div>

        </>
    )
}

export default Biryani