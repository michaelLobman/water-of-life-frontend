import React from "react"
import Distillery from "./Distillery.js"

function Region({ name, distilleries }){

    const distilleryItems = distilleries.map(distillery => {
        return (
            <Distillery 
                key={distillery.id} 
                name={distillery.name}
                bottles={distillery.bottles}
            />
        )
    })

    // const distilleryList = distilleries.map(distillery => {

    //     const bottleListItems = distillery.bottles.map(bottle => {
    //         return(
    //             <li key={bottle.id}>{bottle.name}</li>
    //         )
    //     })

    //     return (
    //     <div key={distillery.id}>
    //         <h3>{distillery.name}</h3>
    //         <ul>
    //             {bottleListItems}
    //         </ul>
    //     </div>
    // )})
    // return(
    //     <div>
    //         <h2>{name}</h2>
    //         {distilleryList}
    //     </div>
    // )

    return (
        <div>
            <h2>{name}</h2>
            {distilleryItems}
        </div>
    )
}

export default Region;