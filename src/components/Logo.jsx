import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
const Logo=()=>{
    return(
        <Link to='/fashionista'>
            <div className="logo">
                <img src={logo} alt="" />
            </div>
        </Link>
    )
}
export default Logo;