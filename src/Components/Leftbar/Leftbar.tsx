import { useNavigate } from "react-router-dom";
import "./Leftbar.css";
import { FaCalendarAlt,FaCog,FaUsers,FaSignOutAlt, FaChartBar, FaBuilding,FaClipboardList} from 'react-icons/fa';
import { useEffect } from "react";

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
                    <FaUsers size={size}  />
                    <FaSignOutAlt size={size} onClick={handleclik} /> 
                </>
                
            ):(
                <>
                    <FaClipboardList size={size} onClick={()=>navigate('/solicitudes')} />
                    <FaChartBar size={size} onClick={()=>navigate('/capital')}/>
                    <FaBuilding size={size}  />
                    <FaSignOutAlt size={size} onClick={handleclik} /> 
                </>
            )}
            

        </div>
    )

}


export default Leftbar;