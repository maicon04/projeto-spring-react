import Dashboard from "Pages/Dashboard";
import Home from "Pages/Home";
import ProgressBar from "components/ProgressBar/ProgressBar";
import { BrowserRouter, Route, Switch, } from "react-router-dom";
import { Suspense, lazy } from "react";

const Login = lazy(()=>import('./Pages/Login/index'));

const Routes = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div className="mt-5 pt-5"><ProgressBar /></div>}>
                <Switch>
                    <Route path="/login" component={Login} />
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                </Switch>
            </Suspense>
        </BrowserRouter>
    );
}

export default Routes;
