import "./Leftbar.css";
import { FaCalendarAlt,FaCog,FaUsers,FaSignOutAlt } from 'react-icons/fa';
const Leftbar=()=>{

    const size=40;
    return (
        <div className="container-leftbar">
            <FaCalendarAlt size={size} />
            <FaCog size={size} />
            <FaUsers size={size} />
            <FaSignOutAlt size={size} /> 

        </div>
    )

}


export default Leftbar;