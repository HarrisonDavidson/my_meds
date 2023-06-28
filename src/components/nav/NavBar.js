import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="links">
                <Link to="/" style={{
                    color: "Blac",
                    borderRadius: '8px',
                    fontWeight: 'bold',
                    fontSize: '30px'
                }} >MyMeds</Link>
                <Link to="/create" style={{
                    color: "Blac",
                    borderRadius: '8px',
                    padding: '8px',
                }}>Add Medication</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;