import React,{Component} from 'react';
import Tab from "./components/Tab/index";
import './style/comm.less'
import {HashRouter as Router,Route} from 'react-router-dom'
import Home from "./containers/Home/index";
import Course from "./containers/Course/index";
import Profile from "./containers/Profile/index";
export default class App extends Component{
    render(){
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home}/>
                    <Route path="/course" component={Course}/>
                    <Route path="/profile" component={Profile}/>
                    <Tab/>
                </div>
            </Router>
        )
    }
}