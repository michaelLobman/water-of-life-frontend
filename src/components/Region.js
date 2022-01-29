import React, { useState } from "react";
import AddDistillery from "./AddDistillery";
import Distillery from "./Distillery.js";

function Region({ name, distilleries, imgUrl }){

    const [stateDistilleries, setStateDistilleries] = useState(distilleries)

    function addDistilleryHandler(newDistillery) {
         setStateDistilleries([...stateDistilleries, newDistillery])
    }

    const distilleryItems = stateDistilleries.map(distillery => {
        return (
            <Distillery 
                key={distillery.id} 
                name={distillery.name}
                bottles={distillery.bottles}
            />
        )
    })

    return (
        <div>
            <div className="region-container">
                <h2 className="region-name">{name}</h2>
                <img 
                    src={imgUrl} 
                    alt={`${name} Landscape`} 
                    className="region-img"
                />
                </div>
            <AddDistillery handleAddDistillery={addDistilleryHandler} region={name} />
            {distilleryItems}
        </div>
    )
}

export default Region;