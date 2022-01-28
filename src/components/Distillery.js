import React from "react"
import Bottle from "./Bottle.js"
import AddBottle from "./AddBottle"

function Distillery({ name, bottles }){

    const bottleItems = bottles.map(bottle => {
        return (
            <Bottle 
                key={bottle.id}
                name={bottle.name}
                age={bottle.aged_in_years}
                distillery={name}
            />
        )

    }

    )
    return(
        <div>
            <h3>{name}</h3>
            {bottleItems}
            <AddBottle distillery={name} />
        </div>

    )
}

export default Distillery;