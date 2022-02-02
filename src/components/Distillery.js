import React, { useState } from "react"
import Bottle from "./Bottle.js"
import AddBottle from "./AddBottle"

function Distillery({ name, bottles, year }){
    const [stateBottles, setStateBottles] = useState(bottles)
    const [addBottleDisplay, setAddBottleDisplay] = useState(false)

    function addBottleHandler(newBottle){
        setStateBottles([...stateBottles, newBottle])
    }

    function handleClick(e){
        e.preventDefault()
        setAddBottleDisplay(!addBottleDisplay)
    }

    function handleDeleteBottle(deletedBottle){
       const updatedBottles = stateBottles.filter(bottle => bottle.id !== deletedBottle.id);
       setStateBottles(updatedBottles);
    }

    const toggleAddBottle = !addBottleDisplay ? null : <AddBottle handleAddBottle={addBottleHandler} distillery={name} />;
    const addBottleText = !addBottleDisplay ? `Add ${name} Bottle` : `Hide ${name} Bottle Form`;

    const bottleItems = !stateBottles ? null : stateBottles.map(bottle => {
        return (
            <Bottle 
                key={bottle.id}
                name={bottle.name}
                age={bottle.aged_in_years}
                id={bottle.id}
                distillery={name}
                onDeleteBottle={handleDeleteBottle}
            />
        )
    }

    )
    return(
        <div className="distillery-div">
            <h3 className="distillery-h3">{name}</h3>
            <h4 className="distillery-h4">Established in {year}</h4>
            <ul className="bottle-ul">
                {bottleItems}
            </ul>
            <button className="add-btn" onClick={handleClick}>{addBottleText}</button>
            {toggleAddBottle}
        </div>

    )
}

export default Distillery;