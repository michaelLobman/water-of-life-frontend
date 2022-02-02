import React, { useEffect, useState } from "react";
import Region from "./Region"

function Home(){ 

    const [regions, setRegions] = useState([])

    useEffect(() => {
        fetch("http://localhost:9296/")
            .then(r => r.json())
            .then(data => setRegions(data))
    }, [])

    const regionItems = regions.map(region => {
        return (
            <Region 
                key={region.id} 
                name={region.name} 
                imgUrl={region.img_url}
                description={region.description}
                distilleries={region.distilleries} 
            />
        )
    })

    return (
        <div>
            <header>
                <h1 className="site-h1">Water of Life - An API of Scotch Whisky</h1>
            </header>
            {regionItems}
        </div>
    )
}
export default Home;

