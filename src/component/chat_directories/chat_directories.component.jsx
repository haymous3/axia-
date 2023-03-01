// import { useParams } from "react-router-dom";
import ChatWithBot from "../chat_with_bot/chat_with_bot.component";
import './chat_directories.style.scss'
const ChatDirectories = ({chatTypes}) => {


    console.log(chatTypes)

   

    return(
        <div>

        {
            chatTypes === 'bot' ? <ChatWithBot bot={chatTypes}/> : null
        }
            
                
            
        
        </div>
    )
}

export default ChatDirectories