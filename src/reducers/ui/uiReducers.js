/**
 * Created by awu on 2016-12-20.
 */
import {handleActions} from 'react-actions';
import UiState from '../../constants/models';

export default handleActions({
    SHOW: (state, {payload}) => {
        state.set('todos', payload.todo);
    }
}, UiState);