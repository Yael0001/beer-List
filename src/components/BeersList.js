import React, { useEffect, useState } from 'react';
import BeerCard from './BeerCard';
import { getBeers } from '../api/beers';
import KeyboardArrowDown from "@material-ui/icons/KeyboardArrowDown";

const BeersList = () => {
    const [beers, setBeers] = useState([]);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const BEERS_PER_PAGE = 10;

    useEffect(()=>{
        setIsLoading(true);
        getBeers(page, BEERS_PER_PAGE)
        .then(data => {
            const beersToLoad = beers.length === 0? data : [...beers, ...data]
            setBeers(beersToLoad);
            setIsLoading(false);
        })
        .catch(err => console.log(err))
        
    }, [page])

    const addPage = ()=> {
        setPage(page+1);
    }

    return (
        <div className='page'>
            <div className='page-title'>Beers</div>
            <div className='beers-list'>
            {beers.map((item, i) => 
                <BeerCard item={item} key={i}/>
            )}
            </div>
            {isLoading? <div className='load'>Loading...</div>: 
            <div className='load load-more' onClick={addPage}>
                <span>Load More</span> 
                <KeyboardArrowDown />
            </div>}
        </div>
        
    )
}

export default BeersList