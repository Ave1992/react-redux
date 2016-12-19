/**
 * Created by awu on 2016-12-19.
 */
import Immutable from 'immutable';

export const TodoState = Immutable.fromJS({
    'todos':[],
    'todo':{
        id:'',
        text:'',
        updateAt:'',
        completed:false
    }
});