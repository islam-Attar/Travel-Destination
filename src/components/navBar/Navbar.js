import './Navbar.css'
import { Link } from 'react-router-dom';
export default function Navbar(){
    return(
        <div>
            <nav>
                <Link id='headNav' to='/'>Home</Link>
            </nav>
        </div>
    )
}