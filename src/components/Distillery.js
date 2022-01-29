import React, { useState } from "react"
import Bottle from "./Bottle.js"
import AddBottle from "./AddBottle"

function Distillery({ name, bottles }){
    const [stateBottles, setStateBottles] = useState(bottles)
    const [addBottleDisplay, setAddBottleDisplay] = useState(false)

    function addBottleHandler(newBottle){
        setStateBottles([...stateBottles, newBottle])
    }

    function handleClick(e){
        e.preventDefault()
        setAddBottleDisplay(!addBottleDisplay)
    }

    const toggleAddBottle = !addBottleDisplay ? null : <AddBottle handleAddBottle={addBottleHandler} distillery={name} />;
    const addBottleText = !addBottleDisplay ? `Add ${name} Bottle` : `Hide ${name} Bottle Form`;

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
        <div className="distillery-div">
            <h3 className="distillery-h3">{name}</h3>
            <ul className="bottle-ul">
                {bottleItems}
            </ul>
            <button className="add-btn" onClick={handleClick}>{addBottleText}</button>
            {toggleAddBottle}
        </div>

    )
}

export default Distillery;