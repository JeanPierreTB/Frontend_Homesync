import { useNavigate } from "react-router-dom";
import "./Leftbar.css";
import { FaCalendarAlt,FaCog,FaUsers,FaSignOutAlt } from 'react-icons/fa';
const Leftbar=()=>{

    const size=40;

    const navigate=useNavigate();
    return (
        <div className="container-leftbar">
            <FaCalendarAlt size={size} onClick={()=>navigate('/reservas')} />
            <FaCog size={size} onClick={()=>navigate('/solicitudes')}/>
            <FaUsers size={size}  />
            <FaSignOutAlt size={size} onClick={()=>navigate('/')} /> 

        </div>
    )

}


export default Leftbar;