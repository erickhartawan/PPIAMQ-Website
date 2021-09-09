import React from "react";

function Image({ fileName, alt, className }) {
    return <img className={className} src={fileName} alt={alt} />;
}

export default Image;
