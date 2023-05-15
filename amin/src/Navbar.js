import { Link } from "react-router-dom";
//link are the same as ancor tags <a href="there">Link</a> ==== <link to="there">Click me</Link>
const Navbar = () => {
    return (
        <nav className="navbar">
        <h1>The Amin's Blog</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/create"> New blog</Link>
        </div>
        </nav>
        );
}

export default Navbar;