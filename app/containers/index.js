
import React, {Component} from 'react';
import RouterMap from '../routers/index'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Actions from '../actions/userInfo';
import {getStorage} from '../local'
 class App extends Component {
    constructor() {
        super();
        this.state = {
            done: false
        }
    }

    render() {
        return (
            <div>
                {this.state.done ? <RouterMap/> : <div>正在加载</div>}
            </div>
        )
    }

    componentDidMount() {
        let cityName = getStorage('cityName');
        if(cityName == null){
            cityName = '时尚';
        }
        this.props.userActions.update({cityName});
        this.setState({
            done: true
        });
       console.log(this.props.userActions)
    }
}
export default connect(
    state => {
        return {}
    },
    dispatch => {
        return {
            userActions: bindActionCreators(Actions, dispatch)
        }
    })
(App)