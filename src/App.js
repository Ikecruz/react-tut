import './Cruz.css'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from './views/Home';
import Param from './views/Param';
import NotFound from './views/NotFound';

const App = () => {

    return(
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/param/:id/:name">
                    <Param />
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;