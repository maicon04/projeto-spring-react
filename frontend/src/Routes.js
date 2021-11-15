import ProgressBar from "components/ProgressBar/ProgressBar";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { Suspense, lazy } from "react";

const Login = lazy(() => import('./Pages/Login/index'));
const Register = lazy(() => import('./Pages/Register/index'));
const Home = lazy(() => import('./Pages/Home/index'));
const Dashboard = lazy(() => import('./Pages/Dashboard/index'));

const token = localStorage.getItem('token');
const PrivateRoutes = ({ component: Component, ...rest}) =>(
    <Route {...rest} render={props => (
       token && token !== "undefined" ? (<Component {...props} />) : (<Redirect to={{pathname:'/login',state:{from:props.location}}}/>)
    )} />
)

const Routes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div className="mt-5 pt-5"><ProgressBar /></div>}>
                <Switch>
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/" exact component={Login} />
                    <PrivateRoutes path="/home" component={Home} />
                    <PrivateRoutes path="/dashboard" component={Dashboard} />
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default Routes;
