import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import mercedes from './images/mercedes-amg-petronas.jpg'
import redbull from './images/redbull.jpg'
import astonmartin from './images/astonmartin.jpg'
import alphatauri from './images/alphatauri.jpg'
import alpine from './images/alpine.jpg'
import mclaren from './images/mclaren.jpg'
import haas from './images/haas.jpg'
import ferrari from './images/ferrari.jpg'
import williams from './images/williams.jpg'


function Cards() {
    return (
        <div className="cards">
            <h1 className="cards__header">THE CURRENT FORMULA 1 RACING DIVISIONS</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                            src= {mercedes}
                            text="8 Time Constructors World Champions"
                            label="Mercedes-AMG-Petronas"
                            path="https://www.mercedesamgf1.com/en/"
                        /> 
                        <CardItem 
                            src= {redbull}
                            text="Mercedes largest rival, winner of 2021 Driver's Champion Award"
                            label="Red Bull-Honda"
                            path="https://www.redbullracing.com/int-en"
                        /> 
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src= {astonmartin}
                            text="Originally Force India, then BWT Racing Point"
                            label="Aston Martin Cognizant"
                            path="https://www.astonmartin.com/en-us/our-world/amf1"
                        /> 
                        <CardItem 
                            src= {alphatauri}
                            text="Red Bull Jr. Formula 1 program"
                            label="Scuderia Alpha Tauri"
                            path="https://www.scuderiaalphatauri.com/en/"
                        /> 
                        <CardItem 
                            src= {alpine}
                            text="New name, same company. Still Renault"
                            label="Alpine F1"
                            path="https://www.alpinecars.com/en/formula-1/news/"
                        /> 
                        <CardItem 
                            src= {williams}
                            text="7 Drivers Championships, 114 Race Victories"
                            label="Williams F1"
                            path="https://www.williamsf1.com/"
                        /> 
                    </ul>
                    <ul className="cards__items">
                        <CardItem 
                            src= {ferrari}
                            text="Iconic. Founded in 1929"
                            label="Scuderia Ferrari"
                            path="https://www.ferrari.com/en-EN/formula1"
                        /> 
                        <CardItem 
                            src= {mclaren}
                            text="A team with a racing history as rich as Ferrari's"
                            label="McLaren F1"
                            path="https://www.mclaren.com/racing/"
                        /> 
                        <CardItem 
                            src= {haas}
                            text="The only American team on the Grid"
                            label="Haas F1"
                            path="https://www.haasf1team.com/"
                        /> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
