/**
 * Created by awu on 2016-12-20.
 */
import {combineReducers} from 'react-immutable';
import ui from '../ui/uiReducers';
import todo from '../data/todoReducers';

const rootReducers = combineReducers({
    todo
});

export default rootReducers;