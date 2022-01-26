import React, { useEffect, useState } from "react";

function BottleWindow(){
    const [bottleArr, setBottleArr] = useState([])

    useEffect(() => {
        fetch("http://localhost:9294/bottles")
            .then(r => r.json())
            .then(bottles => setBottleArr(bottles))
    }, [])

   const bottleListItems =  bottleArr.map(bottle => <li key={bottle.name}>{bottle.name}</li>)

    return (
        <ul>
            {bottleListItems}
        </ul>

    )
}

export default BottleWindow;