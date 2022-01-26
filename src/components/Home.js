import React from "react";
import BottleList from "./BottleList";
import AddBottle from "./AddBottle";

function Home(){    

    return (
        <div>
            <h1>Water of Life</h1>
            <h2>Explore the World of Scotch</h2>
            <BottleList />
            <AddBottle />
        </div>
    )
}
export default Home;

