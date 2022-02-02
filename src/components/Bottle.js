import React from "react"

function Bottle ({ name, age, id, onDeleteBottle }){

    function handleDelete(e) {
        e.preventDefault();        
        fetch(`http://localhost:9296/bottles/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })
                .then(r => r.json())
                .then(deletedBottle => onDeleteBottle(deletedBottle))
    }

    return (
        <li className="bottle-li">
            {name} ({age ? age : "Age Not Specified"}) 
            <button onClick={handleDelete}>Remove</button>
        </li>
    )
}

export default Bottle;