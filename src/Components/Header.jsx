import { Link } from 'react-router-dom';

const Header = () => {
    return (
    <header>
        <h1>React Demo</h1>    
        <nav>
            <ul>
                <li>
                    <Link to='/'>Landing page</Link>
                <li><Link to='/Persons'>Persons</Link></li>   
                <li><Link to='/About'>About</Link></li>                     
                </li>
            </ul>
        </nav>
    </header>
    );
};

export default Header;