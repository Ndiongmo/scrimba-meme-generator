import "../../styles/App.css";

import Header from "../Header";
import Meme from "../Meme";
import Boxe from "../Boxe";

import { boxesData } from "../../datas/boxeData";
import React from "react";

function App() {
    /**
     * Challenge: use setBoxe to update the
     * correct boxe in the array.
     *
     * Make sure not to directly modify state!
     *
     * Hint: look back at the lesson on updating arrays
     * in state if you need a reminder on how to do this
     */
    const [boxeData, setBoxe] = React.useState(boxesData);

    function toggle(id) {
        setBoxe((prevBoxes) => {
            // const newBoxes = [];
            // for (let i = 0; i < prevBoxes.length; i++) {
            //     const currentBoxe = prevBoxes[i];
            //     if (currentBoxe.id === id) {
            //         const updateBoxe = {
            //             ...currentBoxe,
            //             on: !currentBoxe.on,
            //         };
            //         newBoxes.push(updateBoxe);
            //     } else {
            //         newBoxes.push(currentBoxe);
            //     }
            // }
            // return newBoxes;
            /**
             * New Method with inline code : Boxes challenge part 5
             */
            return prevBoxes.map((boxe) => {
                return boxe.id === id ? { ...boxe, on: !boxe.on } : boxe;
            });
        });
    }
    const boxeElements = boxeData.map((boxeD) => (
        <Boxe on={boxeD.on} key={boxeD.id} toggle={toggle} id={boxeD.id} />
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
