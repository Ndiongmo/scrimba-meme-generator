import "../../styles/App.css";

import Header from "../Header";
import Meme from "../Meme";
import Boxe from "../Boxe";

import { boxesData } from "../../datas/boxeData";
import React from "react";

function App() {
    const [boxes, setBoxe] = React.useState(boxesData);
    const boxeElements = boxes.map((boxe) => (
        <Boxe on={boxe.on} key={boxe.id} />
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
