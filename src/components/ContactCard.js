import React from "react";
import user from "./../images/wazidpic.png"

function ContactCard (props) {
    console.log("Wazid props: ", props)
    let {id, name, email} = props.contact
    return(
        <div className="item">
            <img className="ui avatar image" src={user} alt="wazid pic" />
            <div className="content">
                <div className="header">{name}</div>
                <div>{email}</div>
            </div>
            <i className="trash alternate outline icon" style={{color:"red", marginTop:"7px"}}></i>
        </div>
    )
}

export default ContactCard