import React,{Component} from 'react';
import {render} from 'react-dom';
import Star from "../../Star/index";
import './index.less';
export default class CommentItem extends Component{
    render(){
        let {username,comment,star}=this.props.data;
        return (
         <div className="comment-item">
            <div>
                <i className="iconfont icon-mine_fill"></i>
                {username}
            </div>
             <Star count={star}/>
             <div>
                 {comment}
             </div>
         </div>
        )
    }
}