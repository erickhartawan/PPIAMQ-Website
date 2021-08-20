import "./MembershipBenefit.sass";
import AllBenefit from "./Membership benefit/AllBenefit";
import NewMemberInvite from "./Membership benefit/NewMemberInvite";



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
        <NewMemberInvite />
        <div className = "before-footer"></div>
        </>
    )

}

export default MembershipBenefit;