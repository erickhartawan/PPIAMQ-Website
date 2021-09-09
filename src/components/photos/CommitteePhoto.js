import React from "react";

function CommitteePhoto(props) {
    return (
        <div className="h-100">
            <img
                className="img-fluid img-thumbnail"
                src={props.path}
                alt={props.alt}
            />
            <p className="lead"> {props.name}</p>
            <p> {props.title}</p>
            <p> {props.email}</p>
        </div>
    );
}

export default CommitteePhoto;
