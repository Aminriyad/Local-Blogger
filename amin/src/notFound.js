import { Link } from "react-router-dom";

const NotFound = () => {
    return (
    <div className="not-found">
        <h2>Sorry The Page Can't be Found</h2>
        <button><Link to={"/"}>Back to the main Page</Link></button>
    </div>
    );
}
export default NotFound;