import React, { useEffect, useState } from "react";
import Region from "./Region"

function RegionList(){
    const [regions, setRegions] = useState([])

    useEffect(() => {
        fetch("http://localhost:9294/regions/bottles")
            .then(r => r.json())
            .then(data => {
                debugger;
                setRegions(data)
            })
    }, [])

    const regionItems = regions.map(region => {
        return (
            <Region 
                key={region.id} 
                name={region.name} 
                distilleries={region.distilleries} 
            />
        )
})

    return (
        <div>
            {regionItems}
        </div>
    )

    
}

export default RegionList;