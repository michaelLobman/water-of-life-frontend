import React, { useState } from "react";
import AddDistillery from "./AddDistillery";
import Distillery from "./Distillery.js";

function Region({ name, distilleries, description, imgUrl }){

    const [stateDistilleries, setStateDistilleries] = useState(distilleries)
    const [addDistilleryDisplay, setAddDistilleryDisplay] = useState(false)

    function addDistilleryHandler(newDistillery) {
         setStateDistilleries([...stateDistilleries, newDistillery]);
         setAddDistilleryDisplay(!addDistilleryDisplay);
    }

    function handleClick(e){
        e.preventDefault()
        setAddDistilleryDisplay(!addDistilleryDisplay)
    }

    const toggleAddDistillery = !addDistilleryDisplay ? null : <AddDistillery handleAddDistillery={addDistilleryHandler} region={name} />;
    const distilleryBtnText = !addDistilleryDisplay ? `Add ${name} Distillery` : `Hide ${name} Distillery Form`;
    const distilleryItems = stateDistilleries.map(distillery => {
        return (
            <Distillery 
                key={distillery.id} 
                name={distillery.name}
                bottles={distillery.bottles}
                year={distillery.year_established}
            />
        )
    })

    return (
        <div className="region-container">
                <div className="region-text-container">
                    <h2 className="region-name">{name}</h2>
                    <img 
                        src={imgUrl} 
                        alt={`${name} Landscape`} 
                        className="region-img"
                    />
                </div>
                <p className="region-description">{description}</p>
                <div className="distillery-btn-div">
                    <button onClick={handleClick} className="add-btn">{distilleryBtnText}</button>
                </div>
                {toggleAddDistillery}
                <h3 className="region-h3">{name} Distilleries</h3>
                {distilleryItems}
        </div>
    )
}

export default Region;