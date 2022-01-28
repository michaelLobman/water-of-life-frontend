import React from "react"
import Bottle from "./Bottle.js"

function Distillery({ name, bottles }){

    const bottleItems = bottles.map(bottle => {
        return (
            <Bottle 
                key={bottle.id}
                name={bottle.name}
                age={bottle.aged_in_years}
            />
        )

    }

    )
    return(
        <div>
            <h3>{name}</h3>
            {bottleItems}
        </div>

    )
}

export default Distillery;