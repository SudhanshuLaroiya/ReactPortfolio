import React from 'react';
import '../../App.css';
import MainSection from '../MainSection';
import Cards from '../Cards';
import CIBC from '../CIBC';
import Ending from '../Ending'



function Home () {
    return (
        <>
        <MainSection/>
        <CIBC/>
        <Cards/>
        <Ending/>
        </>
    );
}
export default Home;