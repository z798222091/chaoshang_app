import React, {Component} from 'react';
import {
    HashRouter as Router, //路由容器
    Route,
    Switch,//单条路由
    BrowserRouter
} from 'react-router-dom';
import Home from '../containers/Home';
import Detail from '../containers/Detail';
import Login from '../containers/Login';
import User from '../containers/User';
import City from "../containers/City/idex";
import Search from "../containers/Search"
export default class RouterMap extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route exact path="/" component={Home}></Route>
                        <Route path="/detail/:id" component={Detail}/>
                        <Route path="/login/:route?" component={Login}/>
                        <Route path="/user" component={User}/>
                        <Route path="/city" component={City}/>
                        <Route path="/search/:kind/:keyword?" component={Search}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}