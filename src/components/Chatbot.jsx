'use client'

import React, {useState, useId} from "react"
import axios from "axios"
import Message from "./Message"
import Styles from '../app/page.module.css'
import { ST } from "next/dist/shared/lib/utils"

const Chatbot = () => {
    //Mensaje del usuario
    const [userMessage, setUserMessage] = useState({});

    //Mensajes
    const [messages, setMessages] = useState([]);

    //Preguntar al bot
    const handleSend = async () => {
        if(userMessage.text != undefined && userMessage.text.trim()){
            //setMessages([...messages, userMessage]);

            try{
                const response = await axios.post('api', {message: userMessage}); //Enviando objeto mensaje del usuario al bot
                const reply = response.data.reply;
                let botMessages = [];

                reply.map((value, index) => {
                    const botMessage = { text: value, sender: 'bot' };
                    botMessages.push(botMessage);
                });
                
                setMessages([...messages, userMessage, ...botMessages]);
                
            }catch(er){
                console.error(er); //Mostrar error en la consola
                const errorMessage = { text: 'El bot parece no contestar. Ponte en contacto con soporte técnico.', sender: 'error' };
                setMessages([...messages, errorMessage]); //Agregar mensaje de error
            }
        }

        setUserMessage({ text: '', sender: 'user' }); //Limpiar mensaje del usuario
    }

    //Crear mensaje del usuario
    const createUserMessage = (e) => {
        setUserMessage({ text: e.target.value, sender: 'user' });
    }

    //Componente html
    return (
        <div>
            <div className={Styles.chatbot_caja}>
                {messages.map((value, ind) => (<Message msg={value} key={ind} />))}
            </div>
            <form className={Styles.chatbot_input} action={handleSend}>
                <input type="text" name="userMessage" className={Styles.input_send} value={userMessage.text} onChange={(e) => createUserMessage(e)} />
                <button className={Styles.btn_send} onClick={handleSend}>Enviar</button>
            </form>
        </div>
    )
}

export default Chatbot