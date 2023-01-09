import meme from "../../assets/meme.png";
import { memesData } from "../../datas/memesData";

function handleClickMeme(e) {
    e.preventDefault();
    const keyRandomed = Math.floor(Math.random() * memesData.data.memes.length);
    console.log(memesData.data.memes[keyRandomed].url);
    document.getElementById("memeImg").src =
        memesData.data.memes[keyRandomed].url;
    return false;
}

function Meme() {
    return (
        <div className="Meme">
            <form className="form">
                <input placeholder="Shut Up" name="input-1" />
                <input placeholder="and take my money" name="input-1" />
                <button onClick={handleClickMeme}>Get new meme image ⛱ </button>
            </form>
            <img
                onClick={handleClickMeme}
                id="memeImg"
                src={meme}
                alt="Meme Img"
            />
        </div>
    );
}
export default Meme;
