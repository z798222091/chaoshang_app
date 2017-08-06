import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import CurrentCity from '../../components/CurrentCity';
import {connect} from 'react-redux';
import * as Actions from '../../actions/userInfo';
import {bindActionCreators} from 'redux';
import ChooseCity from '../../components/ChooseCity';
 class City extends Component{
    render(){
        return (
         <div>
             <HeaderComponent title="选择分类" history={this.props.history}/>
             <CurrentCity cityName={this.props.userInfo.cityName}/>
             <ChooseCity changeCity={this.changeCity.bind(this)}/>
         </div>
        )
    }
    changeCity(city){
        let oldInfo = this.props.userInfo;
        oldInfo.cityName = city;
        this.props.userActions.update(oldInfo);
        this.props.history.push('/') ;
    }
}
export default connect(
    state=>{
      return {userInfo:state.userInfo}
    },
    dispatch=>{
        return {userActions:bindActionCreators(Actions,dispatch)}
    }
)(City)