import { Link } from "react-router-dom";

const Home = () => {

    return(
        <div>
            <ul>
                <li>
                    <Link to="/param/10/cruz">
                        Go to param page
                    </Link>
                </li>
            </ul>
            <p>Home Page</p>
        </div>
    );
}

export default Home;