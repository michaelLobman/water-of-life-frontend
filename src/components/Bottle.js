import React from "react"

function Bottle ({ name, age }){

    return (
        <div>
            <p>{name} ({age ? age : "Age Not Specified"})</p>
        </div>
    )
}

export default Bottle;