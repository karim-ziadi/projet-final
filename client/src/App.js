import "./App.css";
// import Errors from "./Components/Errors/Error";
import Landpage from "./Pages/LandPage/LandPage";
import Login from "./Pages/Login/Login";
import Profile from "./Pages/Profile/Profile";
import Register from "./Pages/Register/Register";
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import PrivateRoute from "./Router/PrivateRoute";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { current } from "./Redux/actions/user";
function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(current());
    }, []);
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Landpage} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <PrivateRoute path="/profile" component={Profile} />
                {/* <Route path="/*" component={Errors} /> */}
            </Switch>
        </div>
    );
}

export default App;
