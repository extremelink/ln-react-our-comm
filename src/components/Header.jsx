import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'
function Header(){
    return (
        <header>
            <nav>
                <div className="nav-container">
                    <div className="logo">
                        <img src={logo} alt="" />
                    </div>
                    <div className="link-container">
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;

export function Greet(){
    return <p>Hello World!!</p>
}
export function GreetOne(){
    return <p>Hello greeting!!</p>
}