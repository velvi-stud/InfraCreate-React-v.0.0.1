import datapass from './dataReducers/DataPass';
import selectednode from './dataReducers/SelectedNode.js';
import modulesretrieved from './dataReducers/ModulesRetrieved.js';
import {combineReducers} from 'redux';

const rootReducers = combineReducers(
    {
        datapass: datapass,
        selectednode: selectednode,
        modulesretrieved: modulesretrieved
    }
)
export default rootReducers;