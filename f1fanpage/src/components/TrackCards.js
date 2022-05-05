import React from 'react'
import CardItem from './CardItem'

function TrackCards() {
    return (
        <div className='track-cards'>
            <div className='cards__container'>
                <div className="cards__wrapper">
                    <ul className="cards__items">
                    <CardItem 
                            src= '/'
                            text="8 Time Constructors World Champions"
                            label="Mercedes-AMG-Petronas"
                            path="https://www.mercedesamgf1.com/en/"
                        /> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TrackCards
