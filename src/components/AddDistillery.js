import React, { useState } from "react";

function AddDistillery({ handleAddDistillery, region }){

    const [distillery, setDistillery] = useState("");
    const [year, setYear] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        const distilleryData = {
            name: distillery,
            year: parseInt(year),
            region: region
        }

        fetch("http://localhost:9294/distilleries", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(distilleryData)
        })
            .then(r => r.json())
            .then(addedDistillery => handleAddDistillery(addedDistillery))
    }


    return(
        <div>
            <h5>Add {region} distillery:</h5>
            <form onSubmit={handleSubmit}>
                <label>
                    Distillery:
                    <input
                        type="text"
                        id="distillery"
                        name="distillery"
                        value={distillery}
                        onChange={(e => setDistillery(e.target.value))}
                    />
                </label>
                <label>
                    Year Established:
                    <input
                        type="text"
                        id="year-established"
                        name="year-established"
                        value={year}
                        onChange={(e => setYear(e.target.value))}
                    />
                </label>
                <input type="submit"/>
            </form>
        </div>

    )
}

export default AddDistillery;