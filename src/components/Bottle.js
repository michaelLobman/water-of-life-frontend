import React from "react"

function Bottle ({ name, age }){

    return (
        <li>{name} ({age ? age : "Age Not Specified"})</li>
    )
}

export default Bottle;