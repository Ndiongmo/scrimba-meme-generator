import troll from "../../assets/Troll-Face.png";
function Header() {
    return (
        <div className="Header">
            <div className="Header-main">
                <img className="Header-logo" src={troll} alt="Troll Face" />
                <h2 className="Header-sitename">Meme Generator</h2>
            </div>
            <h4 className="Header-subtitle">React Course - Project 3</h4>
        </div>
    );
}
export default Header;
