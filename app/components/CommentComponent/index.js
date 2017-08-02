import React,{Component} from 'react';
import {render} from 'react-dom';
import CommentItem from "./CommentItem/index";
export default class CommentComponent extends Component{
    render(){
        return (
         <div>
             {this.props.data.map((item,index)=>(
                 <CommentItem data={item} key={index}/>
             ))}
         </div>
        )
    }
}