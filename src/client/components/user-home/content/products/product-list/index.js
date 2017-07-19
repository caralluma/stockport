import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import { List, ListCheckbox } from 'react-toolbox/lib/list';

const TodoList = (props) => {
  const { content, error, tasks } = props;
  switch (content) {
    case 'spinner':
      return <ProgressBar type='circular' mode='indeterminate' multicolor />;
    case 'content': {
      const todos = tasks.length > 0 ? tasks.map((task, index) => <ListCheckbox
        caption={`${task.name} [Deadline: ${moment(task.due).locale('en-us').format('DD MMM YYYY')}]`}
        legend={task.description}
        checked={task.done}
        onChange={() => props.onChecked(index, !task.done)}
        key={`${task.name}${index}`}
      />) : <p>No tasks. Click Add Task button.</p>;
      return (
        <List selectable ripple>
          {todos}
        </List>
      );
    }
    case 'error':
      return <p>{error.message}</p>;
    default:
      return <p>Unknown error</p>;
  }
};

  TodoList.propTypes = {
    content: PropTypes.string.isRequired,
    error: PropTypes.object,
    onChecked: PropTypes.func.isRequired,
    tasks: PropTypes.array
  };

export default TodoList;
