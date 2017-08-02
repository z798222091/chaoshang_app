import React,{Component} from 'react';
import './index.less'
import {Link} from 'react-router-dom';
import SearchInput from "../SearchInput/index";
export default class HomeHeader extends Component{
    render(){
        return (
         <div className="home-header back">
             <Link to="/city">
                 <div className="city">
                     {this.props.cityName}
                     <i className="iconfont icon-unfold"></i>
                 </div>
             </Link>
             <div className="search">
                 <i className="iconfont icon-search"></i>
                 <SearchInput value="" fn={this.toSearch.bind(this)}/>
             </div>
             <Link to="/login">
                 <div className="profile">
                     <i className="iconfont icon-mine_fill"></i>
                 </div>
             </Link>
         </div>
        )
    }
    toSearch(value){
        this.props.history.push('/search/all/'+value)
    }
}