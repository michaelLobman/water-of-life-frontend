import React, { useState } from "react"
import Bottle from "./Bottle.js"
import AddBottle from "./AddBottle"

function Distillery({ name, bottles }){
    const [stateBottles, setStateBottles] = useState(bottles)

    function addBottleHandler(newBottle){
        setStateBottles([...stateBottles, newBottle])
    }

    const bottleItems = !stateBottles ? null : stateBottles.map(bottle => {
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
            <AddBottle handleAddBottle={addBottleHandler} distillery={name} />
        </div>

    )
}

export default Distillery;