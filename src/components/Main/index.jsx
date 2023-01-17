import "../../styles/App.css";

import Header from "../Header";
import Meme from "../Meme";

import { boxesData } from "../../datas/boxeData";

function App() {
    const boxeElements = boxesData.map((boxe) => (
        <div className="box" key={boxe.id}>
            {boxe.id}
        </div>
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
