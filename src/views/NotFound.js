import { Link } from 'react-router-dom';

const NotFound = () => {
    return(
        <div>
            <p>NOT FOUND</p>
            <p>Please Return to main page:</p>
            <Link to="/">Home Page</Link>
        </div>
    )
}

export default NotFound;