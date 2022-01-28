import React from "react"

function Region({ name, distilleries }){

    const distilleryList = distilleries.map(distillery => {

        const bottleListItems = distillery.bottles.map(bottle => {
            return(
                <li key={bottle.id}>{bottle.name}</li>
            )
        })

        return (
        <div key={distillery.id}>
            <h3>{distillery.name}</h3>
            <ul>
                {bottleListItems}
            </ul>
        </div>
    )})
    return(
        <div>
            <h2>{name}</h2>
            {distilleryList}
        </div>
    )
}

export default Region;