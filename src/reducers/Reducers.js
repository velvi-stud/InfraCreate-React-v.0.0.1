import datapass from './Datapass.js';
import selectednode from './Selectednode.js';
import {combineReducers} from 'redux';

const rootReducers = combineReducers(
    {
        datapass: datapass,
        selectednode: selectednode
    }
)
export default rootReducers;