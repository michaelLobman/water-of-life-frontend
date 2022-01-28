import React, { useEffect, useState } from "react";

function BottleWindow(){
    const [bottleArr, setBottleArr] = useState([])
    // const [regionObj, setRegionObj] = useState({})

    useEffect(() => {
        fetch("http://localhost:9294/bottles")
            .then(r => r.json())
            .then(bottles => setBottleArr(bottles))
    }, [])

    // useEffect(() => {
    //     fetch("http://localhost:9294/all_bottles_by_region")
    //         .then(r => r.json())
    //         .then(data => setRegionObj(data))
    // }, [])

   const bottleListItems =  bottleArr.map(bottle => <li key={bottle.name}>{bottle.name}</li>)

    return (
        <ul>
            {bottleListItems}
        </ul>

    )
}

export default BottleWindow;