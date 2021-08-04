import "./CircleButton.sass";
// Generate a styled button. pass in text as props example usage
// <CircleButton data={{text: "your wanted text here"}} />
function CircleButton(data) {
    // console.log(data);
    return (
        <div className="container-dot">
            <div className="dot" />
            <p className="read-more">{data.data.text}</p>
        </div>
    );
}

export default CircleButton;
