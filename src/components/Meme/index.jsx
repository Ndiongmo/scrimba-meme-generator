import meme from "../../assets/meme.png";
function Meme() {
    return (
        <div className="Meme">
            <form className="form">
                <input placeholder="Shut Up" name="input-1" />
                <input placeholder="and take my money" name="input-1" />
                <button>Get new meme image ⛱ </button>
            </form>
            <img src={meme} alt="Meme Img" />
        </div>
    );
}
export default Meme;
