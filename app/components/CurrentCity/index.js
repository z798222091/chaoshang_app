import React,{Component} from 'react';
import './index.less'
export default class SliderArrows extends Component{
    render(){
        return (
         <div className="current-city">
             {this.props.cityName}
             <hr/>
         </div>
        )
    }
}