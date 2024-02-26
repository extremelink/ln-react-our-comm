import logo from '../assets/logo.png'
function Header(){
    return (
        <header>
            <nav>
                <div className="nav-container">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <ul>
                    <li>Name</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Career</li>
                </ul>
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