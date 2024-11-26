import { useNavigate } from "react-router-dom";
import "./Leftbar.css";
import { FaCalendarAlt,FaCog,FaUsers,FaSignOutAlt, FaChartBar, FaBuilding,FaClipboardList, FaUser} from 'react-icons/fa';

interface LeftbarProps {
    rol?: number | undefined;
}

const Leftbar:React.FC<LeftbarProps>=({rol})=>{

    const size=40;

    const navigate=useNavigate();

    const handleclik=()=>{
        localStorage.removeItem('usuario');
        navigate('/')
    }

    
    
    
    return (
        <div className="container-leftbar">
            {rol===1? (
                <>
                    <FaCalendarAlt size={size} onClick={()=>navigate('/reservas')} />
                    <FaClipboardList size={size} onClick={()=>navigate('/solicitudes')}/>
                    <FaUsers size={size} onClick={()=>navigate('/junta')}  />
                    <FaSignOutAlt size={size} onClick={handleclik} /> 
                </>
                
            ): rol===2? (
                <>
                <FaClipboardList size={size} onClick={()=>navigate('/solicitudes')} />
                <FaUser size={size} onClick={()=>navigate('/perfil')} />
                <FaSignOutAlt size={size} onClick={handleclik} /> 

                </>
            ):(
                <>
                    <FaClipboardList size={size} onClick={()=>navigate('/solicitudes')} />
                    <FaChartBar size={size} onClick={()=>navigate('/capital')}/>
                    <FaBuilding size={size} onClick={()=>navigate('/agregar-departamento')} />
                    <FaSignOutAlt size={size} onClick={handleclik} /> 
                </>
            )}
            

        </div>
    )

}


export default Leftbar;