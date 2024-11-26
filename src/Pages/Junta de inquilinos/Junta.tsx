import { JitsiMeeting } from '@jitsi/react-sdk';
import "./Junta.css";
import ComponentHeaderBar from '../../Components/HeaderBar/HeaderBar';
import Leftbar from '../../Components/Leftbar/Leftbar';
import { useEffect, useState } from 'react';
import { LoginI } from '../../Intefaces/LoginI';

const PageJunta = () => {

  const [rol, setRol] = useState<number>();
  const [isVideoCallActive, setIsVideoCallActive] = useState(false); 
  const [message, setMessage] = useState(""); 
  const [messages, setMessages] = useState<string[]>([]); 
  const YOUR_DOMAIN = "meet.jit.si"; 
  const YOUR_USERNAME = "usuario";   
  const YOUR_EMAIL = "usuario@dominio.com";

  useEffect(() => {
    const usuario = localStorage.getItem('usuario');
    if (usuario !== null) {
      const usuarioObj: LoginI = JSON.parse(usuario);
      if (usuarioObj.nombre === "Admin") setRol(0);
      else setRol(1);
    }
  }, []);

  const handleStartVideoCall = () => {
    setIsVideoCallActive(true);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages((prevMessages) => [...prevMessages, message]);
      setMessage(""); 
    }
  };

  return (
    <div className="container-junta">
      <ComponentHeaderBar nombre='Pagina de chat con inquilinos' />
      <div className='container-video' style={{ width: '80rem', height: '30rem', display: 'flex', alignItems: 'center', gap: '2rem' }}>
        <Leftbar rol={rol} />
        
        <div className='container-jist'>
        
          {!isVideoCallActive && (
            <div className='container-chat'>
              <div className='container-barra-chat'>
                <h3>Chat de Inquilinos</h3>
                <button onClick={handleStartVideoCall}>Iniciar Videollamada</button>
              </div>
              
              <div className="chat-messages">
                {messages.map((msg, index) => (
                  <div key={index} className="chat-message">
                    <p>{msg}</p>
                  </div>
                ))}
              </div>
              
            
              <div className="chat-container">
                <input
                  type="text"
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Escribe tu mensaje..."
                />
                <br />
                <button onClick={handleSendMessage}>Enviar mensaje</button>
              </div>
            </div>
          )}

          {isVideoCallActive && (

            <div>
              <JitsiMeeting
              domain={YOUR_DOMAIN}
              roomName="PleaseUseAGoodRoomName"
              configOverwrite={{
                startWithAudioMuted: true,
                disableModeratorIndicator: true,
                startScreenSharing: true,
                enableEmailInStats: false,
              }}
              interfaceConfigOverwrite={{
                DISABLE_JOIN_LEAVE_NOTIFICATIONS: true,
                ENABLE_CHAT: true,  
              }}
              userInfo={{
                displayName: YOUR_USERNAME,
                email: YOUR_EMAIL,
              }}
              onApiReady={(externalApi: any) => {
                console.log(externalApi);
              }}
              getIFrameRef={(iframeRef: any) => {
                iframeRef.style.height = '400px';
              }}
            />
            </div>
            
          )}
        </div>
        
      </div>
    </div>
  );
};

export default PageJunta;
