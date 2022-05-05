import React from 'react' 
import '../../App.css'


function Tires() {
    return (
        <div className='tires'>
            <h1>Tires</h1>
            <p>Tires play an important role in Formula 1 racing. As of current regulations, drivers MUST finish each race on at least two different tire compounds. Another regulation to note is that the top 5 drivers on the grid must use the same set of tires used to put down their qualifying lap, at the start of the race. Tire sponsor has changed a few times throughout Formula 1, but currently Pirelli is the acting sponsor. Normally, there are 5 compounds to choose from, but the FIA will determine the best 3 compounds to use for a particular race, and teams will be mandated to only run those three compounds for that particular race weekend. These 5 compounds range from hard to soft, each providing their own benefits and drawbacks.</p>
            <h2>Soft Compound Tires</h2>
            <p>Soft compound tires are the fastest tire available for a race weekend. Indicated with a red stripe, the soft compound tires are better at generating heat during cornering, meaning they provide more mechanical grip to a driver, at a faster rate than the harder compound. This added bonus does not come without its drawbacks, however. Because the tire is capable of generating heat easier, it is also liable to degrade at a much faster rate than the hard tires, and typically do. Once a driver has gone past a point of acceptable tire degradation, the tires produce continually diminishing results, and are no longer in optimal condition to keep up with rivals. Regardless of track, teams only expect to run the soft tire compound for a small period of the race.</p>
            <h2>Medium Compound Tires</h2>
            <p>Medium compound tires are a balance of durability and speed. As one might expect, it combines the best of both the hard and soft compound tires, but does not perform better in speed than soft compound, nor in durability than hard compound. It is one of the most commonly used tire compounds, because of its versatility. Depending on the track, the Medium compound tire can serve as either the hardest compound, or softest compound being run at that track. </p>
            <h2>Hard Compound Tires</h2>
            <p>Hard compound tires focus on durability. They may be slower than the Medium or Soft compound, but they will definitely outlast them both, on any circuit. The hard compound tires also come with the advantage of having a lower optimal tire temperature, meaning that it takes less to heat them up, as well as a lower friction coeffecient. This tire is also preferred when the weather is hot on track, for the same reasons. Another instance where hard tires are opted for is in the event of a small crash. If a driver needs to pit early for a new front wing, for example, mechanics will also fit a set of hard compound tires simultaneously, in an effort to offset the next time a driver needs to pit.</p>
            <h2>Intermediate Compound Tires</h2>
            <p>Intermediate compound tires are used for wet-weather-condition racing. While there are only 2 wet weather compounds, the intermediate is the most versatile of the two. These are typically run in light rain situations, where there is no standing water on track. It is also worth noting that these tires are the faster compound of the two wet weather compounds. The Intermediate Compound (Inters) can evacuate 30 liters of water per second, per tire, at 185MPH</p>
            <h2>Full Wet Compound</h2>
            <p>Full Wets are used in heavy rain situations, and for good reason. In comparison to the Intermediate tires, that evacuate 30 liters of water, these tires evacuate 85 liters of water, per tire, per second, at 185MPH. The Full Wets are also 10MM wider than standard dry slicks, in an effort to provide a little more contact patch for the drivers. The profile of the tire was designed to resist aquaplaning at high speeds. These tires are so good at their job, that in more recent Formula 1 races, visibility has been the issue more than grip, according to Pirelli.</p>
        </div>
    )
}

export default Tires
