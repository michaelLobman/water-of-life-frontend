import React from "react"

function Bottle ({ name, age }){

    return (
        <li className="bottle-li">{name} ({age ? age : "Age Not Specified"})</li>
    )
}

export default Bottle;