import React,{Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less';
import {Link} from 'react-router-dom';
import LoginComponent from "../LoginComponent/index";
export default class Slider extends Component{
    constructor(){
        super();
        this.state={index:0}
    }
    render(){
        let opts = {
            continuous:false,
            callback:(index)=>{
              this.setState({
                  index
              })
            }
        };

        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                            <Link to="/search/jingdian">
                                <li>
                                <i className="iconfont icon-canting"></i>
                                <span>美食</span>
                            </li>
                            </Link>
                            <Link to="/search/jingdian"><li>
                                <i className="iconfont icon-canyin"></i>
                                <span>外卖</span>
                            </li></Link>
                            <Link to="/search/jingdian"><li>
                                <i className="iconfont icon-unfold"></i>
                                <span>美食</span>
                            </li></Link>
                            <Link to="/search/jingdian"><li>
                                <i className="iconfont icon-zhusu"></i>
                                <span>酒店</span>
                            </li></Link>
                            <Link to="/search/jingdian"><li>
                                <i className="iconfont icon-jianshen"></i>
                                <span>健身</span>
                            </li></Link>
                            <Link to="/search/jingdian"><li>
                                <i className="iconfont icon-youxian"></i>
                                <span>休闲</span>
                            </li></Link>
                            <Link to="/search/jingdian"><li>
                                <i className="iconfont icon-jingdian"></i>
                                <span>景点</span>
                            </li></Link>
                            <Link to="/search/jingdian"><li>
                                <i className="iconfont icon-feiji"></i>
                                <span>航班</span>
                            </li></Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to="/search/jingdian">
                                <li>
                                    <i className="iconfont icon-canting"></i>
                                    <span>美食</span>
                                </li>
                            </Link>
                            <Link to="/search/jingdian"><li>
                                <i className="iconfont icon-canyin"></i>
                                <span>外卖</span>
                            </li></Link>
                            <Link to="/search/jingdian"><li>
                                <i className="iconfont icon-unfold"></i>
                                <span>美食</span>
                            </li></Link>
                            <Link to="/search/jingdian"><li>
                                <i className="iconfont icon-zhusu"></i>
                                <span>酒店</span>
                            </li></Link>
                            <Link to="/search/jingdian"><li>
                                <i className="iconfont icon-jianshen"></i>
                                <span>健身</span>
                            </li></Link>
                            <Link to="/search/jingdian"><li>
                                <i className="iconfont icon-youxian"></i>
                                <span>休闲</span>
                            </li></Link>
                            <Link to="/search/jingdian"><li>
                                <i className="iconfont icon-jingdian"></i>
                                <span>景点</span>
                            </li></Link>
                            <Link to="/search/jingdian"><li>
                                <i className="iconfont icon-feiji"></i>
                                <span>航班</span>
                            </li></Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index==0?'active':''}></li>
                    <li className={this.state.index==1?'active':''}></li>
                </ul>
            </div>
        )
    }
}