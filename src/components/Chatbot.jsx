'use client'

import React, {useState, useId} from "react"
import axios from "axios"
import Message from "./Message"

const Chatbot = () => {
    //Mensaje del usuario
    const [userMessage, setUserMessage] = useState({});

    //Mensajes
    const [messages, setMessages] = useState([]);

    //Preguntar al bot
    const handleSend = async () => {
        if(userMessage.text != undefined && userMessage.text.trim()){
            setMessages([...messages, userMessage]); //Agregar mensaje del usuario
            
            try{
                const response = await axios.post('api', {message: userMessage}); //Enviando objeto mensaje del usuario al bot
                const botMessage = { text: response.data.reply, sender: 'bot' };
                setMessages([...messages, userMessage, botMessage]); //Agregar mensaje del bot
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
            <div>
                {messages.map((value, ind) => (<Message msg={value} key={ind} />))}
            </div>
            <div>
                <input type="text" name="userMessage" value={userMessage.text} onChange={(e) => createUserMessage(e)} />
            </div>
            <div>
                <button onClick={handleSend}>Enviar</button>
            </div>
        </div>
    )
}

export default Chatbot