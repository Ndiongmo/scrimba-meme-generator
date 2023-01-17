import "../../styles/App.css";

import Header from "../Header";
import Meme from "../Meme";
import Boxe from "../Boxe";

import { boxesData } from "../../datas/boxeData";
import React from "react";

function App() {
    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     *
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */
    const [boxeData, setBoxe] = React.useState(boxesData);
    console.log(boxeData);

    function toggle() {
        console.log("Clicked!!!");
    }
    const boxeElements = boxeData.map((boxeD) => (
        <Boxe on={boxeD.on} key={boxeD.id} toggle={toggle} />
    ));

    return (
        <div className="App">
            <Header />
            <Meme />
            <hr></hr>
            <h1>Boxe Challenge</h1>
            {boxeElements}
        </div>
    );
}

export default App;
