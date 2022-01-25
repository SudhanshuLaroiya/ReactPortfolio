import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import img1 from './media/logo192.png';
import SmartCity from './media/SmartCity.jpg';
import PaintPong from './media/PaintPong.png';
import Cargo from './media/Cargo.png';
import Food from './media/Food.png';
import Plant from './media/Plant.jpg';

function Cards() {
    return (
        <div className='cards'>
            <h1>Projects and Competitions</h1>
            <div className='cards__container'>
                <div className='cards__wrapper'>
                <ul className='cards__items'>
                        
                        <CardItem
                            src={SmartCity}
                            text="Utilizing IoT red light cameras to help increase pedistrian safety"
                            path='./resume'
                            label='Winner: Delta Hacks 2020'
                        />
                        <CardItem
                            src={PaintPong}
                            text="Using C++ to recreate the classic game pong with a colorful twist"
                            path='./resume'
                            label='Winner: Hack the North 2020++'
                        />
                        
                    </ul>
                    <ul className='cards__items'>
                    <CardItem
                            src={Plant}
                            text="Made a system to monitor and alert users of plant health"
                            path='./resume'
                            label='Winner: Hack Lassonde 2019'
                        />
                        <CardItem
                            src={Food}
                            text="Created a campus diet app through MySQL and Java"
                            path='./resume'
                            label='MackUC 2021'
                        />
                        <CardItem
                            src={Cargo}
                            text="Filtered through truck GPS data to analysize potential threats to cargo"
                            path='./resume'
                            label='Delta Hacks 2019'
                        />
                        
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Cards;
