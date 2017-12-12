import React,{Component} from 'react';
import {Link,NavLink} from 'react-router-dom'
import './index.less'
export default class Tab extends Component{
    render(){
        return (
            <nav>
                <NavLink exact to="/">
                    <i className="iconfont icon-xingqiu"></i>
                    <span>首页</span>
                </NavLink>
                <NavLink to="/course">
                    <i className="iconfont icon-react"></i>
                    <span>我的课程</span>
                </NavLink>
                <NavLink to="/profile">
                    <i className="iconfont icon-xiaolian"></i>
                    <span>个人中心</span>
                </NavLink>
            </nav>
        )
    }
}