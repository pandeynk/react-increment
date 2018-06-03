import {combineReducers} from 'redux';
import counter from './IncReducers';

const rootReducers = combineReducers({
    counter
}) ;

export default rootReducers;
