/**
 * Created by awu on 2016-12-19.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import TodoHeaderContainer from '../../containers/TodoHeaderContainer';
import TodoListContainer from '../../containers/TodoListContainer';

const Main = () => (
    <div>
        <TodoHeaderContainer />
        <TodoListContainer />
    </div>
);

export default Main;