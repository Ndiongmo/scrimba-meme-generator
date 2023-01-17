import React from "react";
import { memesData } from "../../datas/memesData";

function Meme() {
    const [memeImage, setMemeImage] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/1bij.jpg",
    });

    const [allMemeImages, setAllMemeImages] = React.useState(
        memesData.data.memes
    );

    function handleClickMeme(e) {
        e.preventDefault();
        const keyRandomed = Math.floor(Math.random() * allMemeImages.length);
        const url = allMemeImages[keyRandomed].url;
        setMemeImage((prevMeme) => ({
            ...prevMeme,
            randomImage: url,
        }));
    }

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
                src={memeImage.randomImage}
                alt="Meme Img"
            />
        </div>
    );
}
export default Meme;
