import { FaBell, FaUserCircle } from 'react-icons/fa';
import "./HeaderBar.css";

const ComponentHeaderBar=()=>{


    return (
        <div className='container-headerbar'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnCH_bBSx1qu1A0RvFhJiZw9bkA5XrAhsDvg&s" alt="logo"></img>
            <div className='container-iconos'>
                <FaBell/>
                <FaUserCircle/>
            </div>
            
        </div>
    )
}


export default ComponentHeaderBar;