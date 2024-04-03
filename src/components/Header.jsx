import { NavLink } from 'react-router-dom';
import Logo from './Logo';
function Header(){
    return (
        <header>
            <nav>
                <div className="nav-container">
                    <div className="logo">
                        {<Logo />}
                    </div>
                    <div className="link-container">
                        <ul>
                            <NavLink exact to="/" activeClassName="active">Home</NavLink>
                            <NavLink to="/products" activeClassName="active">Products</NavLink>
                            <NavLink to="/about" activeClassName="active">About</NavLink>
                            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                            {/* <li><Link to='/' style={{visited:'yellow',active:'blue'}}>Home</Link></li>
                            <li><Link to ='/products'>Products</Link></li>
                            <li><Link to='/about'>About</Link></li>
                            <li><Link to='/contact'>Contact</Link></li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;
