import React, { useState } from "react";

function AddBottle(){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [distillery, setDistillery] = useState("");
    const [region, setRegion] = useState("Cambeltown");
    // const [img, setImg] = useState("");

    function handleSubmit(e){
        e.preventDefault();

        const bottleData = {
            name: name,
            age: parseInt(age),
            distillery: distillery,
            region: region
        }

        fetch("http://localhost:9294/bottles", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(bottleData)
        })
            .then(r => r.json())
            .then(addedBottle => console.log(addedBottle))
    }
   
    return(
        <div>
            <h3>Favorite bottle missing? Add it below!</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input 
                        type="text" 
                        id="name"
                        name="name"
                        onChange={(e => setName(e.target.value))}
                        value={name}
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
                    />
                </label>
                <label>
                    Distillery:
                    <input
                        type="text"
                        id="distillery"
                        name="distillery"
                        onChange={(e => setDistillery(e.target.value))}
                        value={distillery}
                    />
                </label>
                <label>
                    Region:
                    <select value={region} onChange={(e => setRegion(e.target.value))}>
                        <option value="unknown">Unknown</option>
                        <option value="cambeltown">Cambeltown</option>
                        <option value="highland">Highland</option>
                        <option value="islay">Islay</option>
                        <option value="lowland">Lowland</option>
                        <option value="speyside">Speyside</option>
                    </select>
                </label>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default AddBottle;