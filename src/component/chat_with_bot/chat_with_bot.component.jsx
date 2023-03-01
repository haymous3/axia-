import { useEffect } from 'react'
import './chat_with_bot.style.scss'
const ChatWithBot = ({bot}) => {


    useEffect(() => {
        if(bot === 'bot'){
            (function(d, m){
                var kommunicateSettings = 
                    {"appId":"1bc13bc34a2d59d3784c509a137bbf024","popupWidget":true,"automaticChatOpenOnNavigation":true};
                var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
                window.kommunicate = m; m._globals = kommunicateSettings;
            })(document, window.kommunicate || {})
        }else{
            (function(d, m){
                var kommunicateSettings = 
                    {"appId":"1bc13bc34a2d59d3784c509a137bbf024","popupWidget":false,"automaticChatOpenOnNavigation":false};
                var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
                s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
                var h = document.getElementsByTagName("head")[0]; h.removeChild(s);
                window.kommunicate = m; m._globals = kommunicateSettings;
            })(document,  {})
            
        }
        
        
       
        
        
;
/* NOTE : Use web server to view HTML files as real-time update will not work if you directly open the HTML file in the browser. */

    }, [bot])

    return(
        <div>
        <h3>Chat with bot</h3>
        </div>
    )
}

export default ChatWithBot