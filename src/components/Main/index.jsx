import "../../styles/App.css";

import Header from "../Header";
import Meme from "../Meme";

import { boxesData } from "../../datas/boxeData";
import React from "react";

function App(props) {
    // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"

    const [boxes, setBoxe] = React.useState(boxesData);

    const styles = {
        backgroundColor: props.darkMode ? "#222222" : "#cccccc",
    };
    const boxeElements = boxes.map((boxe) => (
        <div style={styles} className="box" key={boxe.id}></div>
    ));
    return (
        <div className="App">
            <Header />
            <Meme />
            <hr></hr>
            {boxeElements}
        </div>
    );
}

export default App;
