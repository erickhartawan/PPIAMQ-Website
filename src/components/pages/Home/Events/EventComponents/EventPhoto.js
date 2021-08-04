import "./EventPhoto.sass";
// a block of grey shade. width and height is 100%
// apply sizing on the call of the component example (eventPhoto className="style here")
function EventPhoto() {
    return (
        <>
            <div className="photo-block">
                <div className="caption-event-name">
                    <p className="event-text">Event Name</p>
                </div>
            </div>
        </>
    );
}
export default EventPhoto;
