import React,{Component} from 'react';
import ReactSwipe from 'react-swipe'
export default class HomeSlider extends Component{
    render(){
        let options = {
            auto:3000,//加载完成后等待多少秒开始轮播
            continuous:true,//是否启动无缝轮播
            callback:function (index,elem) {}//当动画完成后执行回调函数
        }
        return (
            <div className="home-sliders">
                <ReactSwipe  swipeOptions={options}>
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                </ReactSwipe>
            </div>
        )
    }
}