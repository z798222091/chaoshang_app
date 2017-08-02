import React,{Component} from 'react';
import {render} from 'react-dom';
import ListItem from "./ListItem/index";
export default class ListComponent extends Component{
    render(){
        return (
         <div>
             <div><h3 style={{marginTop:'20px',marginLeft:'20px',color:'#666'}}>猜你喜欢</h3></div>
             {this.props.data.map((item,index)=>(
            <ListItem key={index} data={item}/>
             ))}
         </div>
        )
    }
}