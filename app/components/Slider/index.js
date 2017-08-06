import React, {Component} from 'react';
import ReactSwipe from 'react-swipe';
import './index.less';
import {Link} from 'react-router-dom';
import LoginComponent from "../LoginComponent/index";
export default class Slider extends Component {
    constructor() {
        super();
        this.state = {index: 0}
    }

    render() {
        let opts = {
            continuous: false,
            callback: (index) => {
                this.setState({
                    index
                })
            }
        };

        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                            <Link to="/search/jingdian">
                                <li>
                                    <img src="https://img10.static.yhbimg.com/yhb-img01/2017/08/01/10/01dcdd4b61ef8a9d5919481ec055702fc9.jpg?imageView2/2/w/1150/h/450" alt=""/>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to="/search/jingdian">
                                <li>
                                    <img src="https://img11.static.yhbimg.com/yhb-img01/2017/08/01/10/01c4ba74fd0bec8684c03c54b30584900e.jpg?imageView2/2/w/1150/h/450" alt=""/>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </ReactSwipe>
                <ul className="dots">
                    <li className={this.state.index == 0 ? 'active' : ''}></li>
                    <li className={this.state.index == 1 ? 'active' : ''}></li>
                </ul>
            </div>
        )
    }
}