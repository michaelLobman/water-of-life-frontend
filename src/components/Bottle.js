import React from "react"

function Bottle ({ name, age, id, onDeleteBottle }){

    function handleDelete(e) {
        e.preventDefault();        
        fetch(`http://localhost:9292/bottles/${id}`, {
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
            <button className="delete-btn" onClick={handleDelete}>x</button>
        </li>
    )
}

export default Bottle;