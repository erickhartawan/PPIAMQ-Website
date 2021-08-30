import React from "react";
import "./OverlappedImages.sass";
import llama from "../../../assets/img/llama.jpg";
import Image from "../../Image";
function OverlappedRows() {
    console.log(llama);
    return (
        <div className="flex flex-row p-1 pr-0 pb-5 mb-5 position-relative">
            <Image
                className="p-1 pr-0 position-relative first-image"
                fileName={llama}
                alt="3 Illamas"
            />
            <Image
                className="p-1 pr-0 position-relative second-image "
                fileName={llama}
                alt="3 Illamas"
            />
            <Image
                className="p-1 pr-0 position-relative third-image"
                fileName={llama}
                alt="3 Illamas"
            />
        </div>
    );
}

export default OverlappedRows;
