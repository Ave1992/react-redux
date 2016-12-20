/**
 * Created by awu on 2016-12-20.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';
import TodoHeader from '../../components/TodoHeader';

import {
    changeText,
    createTodo
} from '../../actions';

const mapStateToProps = (state) => ({
    todo: state.getIn(['todo', 'todo'])
});

const mapDispatchToProps = (dispatch) => ({
    onChangeText: (event) => (
        dispatch(changeText({text: event.target.value}))
    ),

    onCreateTodo: () => {
        dispatch(createTodo());
        dispatch(changeText({text: ''}));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoHeader);

const TodoHeader = ({
    onChangeText,
    onCreateTodo,
    todo
}) => (
    <div >
        <h1 >TodoHeader</h1>
        <input type="text" value={todo.get('text')} onChange={onChangeText}/>
        <button onClick={onCreateTodo}>送出</button>
    </div>
);

export default TodoHeader;

