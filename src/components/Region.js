import React, { useState } from "react";
import AddDistillery from "./AddDistillery";
import Distillery from "./Distillery.js";

function Region({ name, distilleries }){

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
            <h2>{name}</h2>
            <AddDistillery handleAddDistillery={addDistilleryHandler} region={name} />
            {distilleryItems}
        </div>
    )
}

export default Region;