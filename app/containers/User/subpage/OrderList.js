import React,{Component} from 'react';
import {getOrderList,postComment} from '../../../fetch/orderList';
import OrderListComponent from "../../../components/OrderListComponent/index";
export default class OrderList extends Component{
    constructor(){
        super();
        this.state={
            data:[]
        }
    }
    render(){
        return (
         <div>
             {this.state.data.length?
             <OrderListComponent data={this.state.data} commitComment={this.commitComment.bind(this)}/>:
             <div>正在加载</div>}
         </div>
        )
    }
    commitComment(id,comment,callback){
        postComment({id,comment}).then(res=>res.json()).then(data=>{
            callback();
        })
    }
    componentDidMount(){
        getOrderList(this.props.username).then(res=>res.json()).then(data=>{
            this.setState({
                data
            })
        })
    }
}