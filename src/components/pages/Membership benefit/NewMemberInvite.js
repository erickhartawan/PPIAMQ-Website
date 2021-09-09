import "./NewMemberInvite.sass"
import CircleButton from "../../Buttons/CircleButton";

function NewMemberInvite(){
    return(
        <>
            <div className= "Invite">
                <div className =  "Title-Card">
                    <div className = "Red-heading">
                        become our member
                    <div className = "White-heading">
                        Fill up the google form and come to one of our events to get your PPIA Membership Card. 
                    <div className = "button">
                        <CircleButton data={{ text: "JOIN US" }} />
                    </div>
                    </div>
                    </div> 
                </div>
            </div>
        </>
    )
}

export default NewMemberInvite;