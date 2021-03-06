import React, { useState } from "react";

function AddBottle({ handleAddBottle, distillery }){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        const bottleData = {
            name: name,
            age: parseInt(age),
            distillery: distillery,
        }

        fetch("http://localhost:9296/bottles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(bottleData)
        })
            .then(r => r.json())
            .then(addedBottle => handleAddBottle(addedBottle))

        setName("");
        setAge("");
    }
   
    return(
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input 
                    type="text" 
                    id="name"
                    name="name"
                    onChange={(e => setName(e.target.value))}
                    value={name}
                    required
                />
            </label>
            <label>
                Age (in years):
                <input
                    type="number"
                    id="age"
                    name="age"
                    onChange={(e => setAge(e.target.value))}
                    value={age}
                    min="0"
                    required
                />
            </label>
            <input type="submit"/>
        </form>
    )
}

export default AddBottle;