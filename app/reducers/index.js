//合并所有的reducers 导出让store使用
import {combineReducers} from 'redux';
import {userInfo} from './userInfo';
import  {store} from './store';
export default combineReducers({
    userInfo,
    store
});