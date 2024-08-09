import React, {useState} from "react";
import Style from '../app/page.module.css'

const Message = ({msg}) => {
    return (
        <div className={msg.sender == "bot" ? Style.msg_bot : Style.msg_user}>
            <p>{msg.text}</p>
        </div>
    )
}

export default Message