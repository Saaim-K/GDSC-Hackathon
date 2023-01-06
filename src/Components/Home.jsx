import { useState, useEffect } from 'react';
import Biryani from './Biryani';
import Burger from './Burger';
import Pizza from './Pizza';

export default function App() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    return (
        <>

            {(loading) ? <div className='loader'><div className='pac-man' /></div> : ""}

            {/* <Burger /> */}
            {/* <Pizza /> */}

            <Biryani />
        </>
    );
}