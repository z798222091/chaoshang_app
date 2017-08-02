import React,{Component} from 'react';
import './index.less';
export default class UserInfo extends Component{
    render(){
        return (
         <div className="user-info" >
             用户名: {this.props.userInfo.username}<br/>
             城市: {this.props.userInfo.cityName}
         </div>
        )
    }
}