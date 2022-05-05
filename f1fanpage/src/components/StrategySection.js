import React from 'react'
import './StrategySection.css'

function StrategySection() {
    return (
        <div className='strategy-section-container'>
            <div className='strategy-info-container'>
                <h1 className='strategy-title'>
                    What Even Are Formula 1 Strategies?
                </h1>

                <p className='strategy-intro'>
                    Formula 1 race strategy is a key component in determining race outcome. There are a lot of things to be considered over the span of a race, besides the other drivers on track. A driver must manage his tires, manage his fuel, <em>and</em> manage his battery, wait for it, every single lap. Drivers can’t simply just ‘send it’ until the end of the race any longer. With tire and fuel wear so important, teams are forced to use their wits much more than that. 
                </p>

                <div className='fuel-section-container'>
                    <h2 className='fuel-section-title'>Fuel Strategy</h2>

                    
                    <p className='fuel-description'>
                        Let's begin with fuel. Back in the day, Formula 1 teams were able to refuel during pit stops, similarly to NASCAR or other races. In 1982, in an effort to save weight, the Brabham Formula 1 team put less fuel in their car at race start, with the intention of refueling while stopping for fresh tires. They demonstrated that this strategy of being lighter and faster for a longer duration of the race was a brilliant idea, albeit at the potential cost of a few more seconds during a pit stop. In modern day F1, refueling is banned. Meaning that teams will have to fuel their car for the entire race. How teams decide to fuel their car depends on the driver characteristics, as well as the conditions on track, as well as the other <em>teams</em>. No team, on any given race day will typically fill their car to the brim with fuel. Not only does that add a massive amount of weight to the car (ok sure, maybe it’s only around 20 or so pounds, but on a Formula 1 car, that’s a huge amount of weight), but it also affects performance because of all the extra liquid sloshing from side to side during cornering. Teams will typically only fuel the car to exactly how much it needs to complete the race. In real life, that would be equivalent to only filling your car up with as little to reach your destination. That sounds great, until you consider there might be traffic, or lights, or other unforeseen circumstances. The same is true in Formula 1, so drivers must manage their fuel carefully. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default StrategySection;
