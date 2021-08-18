import AllBenefit from "./Membership benefit/AllBenefit";
import "./MembershipBenefit.sass";


function MembershipBenefit(){
    return(
        <>
           <div className = "membership">
               <div className = "containerTitle">
                   <div className = "JUDUL">
                       CURRENT BENEFIT
                   </div>
               </div>
           </div>
           <div className = "card-container">
                    <div className = "card">
                        <div className = "grey-block"></div>
                        <div className = "store">Store</div>
                        <div className = "promo">promo</div>
                        <div className = "tc">tc</div>
                    </div>
                    <div className = "card">
                        <div className = "grey-block"></div>
                        <div className = "store">Store</div>
                        <div className = "promo">promo</div>
                        <div className = "tc">tc</div>
                    </div>
                    <div className = "card">
                        <div className = "grey-block"></div>
                        <div className = "store">Store</div>
                        <div className = "promo">promo</div>
                    </div>
            </div>
        <AllBenefit />
        </>
    )

}

export default MembershipBenefit;