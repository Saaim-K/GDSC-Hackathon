import { useState, useEffect } from 'react';
import Biryani from './Biryani';

export default function App() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false);

    return (
        <>

            {(loading) ? <div className='loader'><div className='pac-man' /></div> : ""}




            <Biryani />
        </>
    );
}