import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { db } from '../FirebaseConfig'
import { collection, addDoc } from 'firebase/firestore';


const Biryani = () => {
    const [data, setData] = useState([])
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')

    const userCollectionRef = collection(db, "biryani")
    useEffect(() => {
        axios.get(`https://api.spoonacular.com/food/products/search?query=biryani&apiKey=0a6d931e3dca4049b985ccf62614e45a`)
            .then(response => {
                let data = response.data.products;
                console.log(data);
                setData(data)
                setTitle(data.title)
                setImage(data.image)
            })
            .catch(error => {
                console.log('Error occured while fetching product ❌', error)
            })
    }, [])


    const favourite = async () => {
        try {
            await addDoc(userCollectionRef,
                {
                    title: title,
                    image: image,
                });
            console.log('Succesful ')

        } catch (error) {
            console.log('Error occured while fetching product ❌', error)
        }

    }
    return (
        <>
            <div>{data.map(products => (
                <div key={products.id}>
                    {products.title}
                    <img src={products.image} alt="" />
                    <button onClick={favourite}>Favourite/</button>
                </div>
            ))}
            </div>

        </>
    )
}

export default Biryani