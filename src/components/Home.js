import React, { useEffect, useState } from "react";
import Region from "./Region"

function Home(){ 

    const [regions, setRegions] = useState([])

    useEffect(() => {
        fetch("http://localhost:9294/regions/bottles")
            .then(r => r.json())
            .then(data => setRegions(data))
    }, [])

    const regionItems = regions.map(region => {
        return (
            <Region 
                key={region.id} 
                name={region.name} 
                imgUrl={region.img_url}
                distilleries={region.distilleries} 
            />
        )
    })

    return (
        <div>
            <h1>Water of Life</h1>
            <h2>Explore the Different Regions of Scotland</h2>
            {regionItems}
        </div>
    )
}
export default Home;

