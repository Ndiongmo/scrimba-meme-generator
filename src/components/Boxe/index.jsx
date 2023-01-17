import React from "react";
export default function Boxe(props) {
    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     *
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     *
     * Goal: clicking each box should toggle it on and off.
     */
    const [on, setOn] = React.useState(props.on);

    const styles = {
        backgroundColor: on ? "#222222" : "transparent",
    };

    function handleClick() {
        setOn((prevOn) => !prevOn);
    }

    return <div style={styles} className="box" onClick={handleClick}></div>;
}
