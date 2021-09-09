import "./AllBenefit.sass";

function AllBenefit() {
    let data = [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "z",
        "q",
        "x",
        "y",
        "g",
    ];
    return (
        <>
            <div className="allBenefit">
                <div className="card-container-2">
                    {data.map((item) => {
                        return (
                            <div className="card">
                                <div className="grey-block-small"></div>
                                <div className="store-small">store</div>
                                <div className="promo-small">promo</div>
                                <div className="tc-small">{item}</div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

export default AllBenefit;
