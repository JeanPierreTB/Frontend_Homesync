import { JitsiMeeting } from '@jitsi/react-sdk';
import "./Junta.css";
import ComponentHeaderBar from '../../Components/HeaderBar/HeaderBar';
import Leftbar from '../../Components/Leftbar/Leftbar';
import { useEffect ,useState} from 'react';
import { LoginI } from '../../Intefaces/LoginI';
import Chat from '../../Components/Chat_inquilino/Chat';



const PageJunta = () => {


 
  const [rol,setrol]=useState<number>();
  const YOUR_DOMAIN = "meet.jit.si"; 
  const YOUR_USERNAME = "usuario";   
  const YOUR_EMAIL = "usuario@dominio.com";
  
  useEffect(()=>{
    const usuario=localStorage.getItem('usuario');
    if (usuario !== null) {
      const usuarioObj: LoginI = JSON.parse(usuario);
      
      if (usuarioObj.nombre === "Admin") setrol(0);

      else setrol(1);
      
      
  }
    
  },[])
  
  return (
    <div className="container-junta">
      <ComponentHeaderBar nombre='Pagina de chat con inquilinos' />
      <div className='container-video' style={{width:'80rem',height:'30rem',display:'flex',alignItems:'center',gap:'2rem'}}>
        <Leftbar rol={rol} />
        <div className='container-jist'>
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
        
      </div>
      
    </div>
  );
};


export default PageJunta;