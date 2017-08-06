import React,{Component} from 'react';
import './index.less'
export default class ChooseCity extends Component{
    render(){
        return (
         <div className="city">
             <h3>选择分类</h3>
             <ul>
                 <li onClick={this.props.changeCity.bind(this,'时尚')}>时尚</li>
                 <li onClick={this.props.changeCity.bind(this,'潮流')}>潮流</li>
                 <li onClick={this.props.changeCity.bind(this,'新奇')}>新奇</li>
                 <li onClick={this.props.changeCity.bind(this,'文艺')}>文艺</li>
                 <li onClick={this.props.changeCity.bind(this,'大牌')}>大牌</li>
                 <li onClick={this.props.changeCity.bind(this,'原创')}>原创</li>
             </ul>
         </div>
        )
    }
}