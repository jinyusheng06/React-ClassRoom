import React,{Component} from 'react';
import './index.less'
import {CSSTransition,TransitionGroup} from 'react-transition-group'
export default class HomeHeader extends Component{
    constructor(){
        super()
        this.state = {show:false}
    }
    handleClick = ()=>{
        this.setState({show:!this.state.show})
    }
    getMenuLsit = ()=>(

            <CSSTransition classNames="fade" timeout={500}>
                <ul className="menu-list">
                    <li data-type="">全部课程</li>
                    <li data-type="react">React课程</li>
                    <li data-type="vue">Vue课程</li>
                </ul>
            </CSSTransition>

        )
    //{require('../../../images/logo.png')}
    render(){
        return (
            <div className="home-header">
                <div className="home-logo">
                    <img src='http://7xil5b.com1.z0.glb.clouddn.com/zhufenglogo.png'/>
                    <div onClick={this.handleClick}>
                        {
                            this.state.show?<i className="iconfont icon-guanbi"></i>:<i className="iconfont icon-uilist"></i>
                        }
                    </div>
                </div>
                <TransitionGroup>
                {
                    this.state.show&&this.getMenuLsit()
                }
                </TransitionGroup>
            </div>
        )
    }
}