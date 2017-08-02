import React,{Component} from 'react';
import {render} from 'react-dom';
import HomeHeader from '../../components/HomeHeader';
import Slider from "../../components/Slider/index";
import Ad from "./subpage/Ad";
import {connect} from 'react-redux'
import List from "./subpage/List";
 class Home extends Component{
    render(){
        return (
         <div>
            <HomeHeader cityName={this.props.userInfo.cityName} history={this.props.history}/>
             <Slider/>
             <Ad/>
             <List cityName={this.props.userInfo.cityName}/>
         </div>
        )
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    }
)(Home)
