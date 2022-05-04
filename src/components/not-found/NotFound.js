import { Link } from "react-router-dom";
import './NotFound.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from '@fortawesome/free-solid-svg-icons'

function NotFound() {
    return (
        <div className="not-found">
            <h1><FontAwesomeIcon icon={faFaceFrown} /> Page not found</h1>
            <Link to='/'>Return to home</Link>
        </div>
    )
}

export default NotFound;