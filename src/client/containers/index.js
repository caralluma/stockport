import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { showDialog, hideDialog } from '../actions/dialog-actions';
import { getTasks, addTask, checkTask, clearTasks } from '../actions/task-actions';
import Main from '../components/user-home/index';

function mapStateToProps (state) {
  return {
    showTaskDialog: state.dialog.showTaskDialog,
    tasks: state.task.tasks,
    content: state.task.showTasks,
    error: state.task.error
  };
}

function mapDispatchToProps (dispatch) {
  return {
    showDialog: bindActionCreators(showDialog, dispatch),
    hideDialog: bindActionCreators(hideDialog, dispatch),
    getTasks: bindActionCreators(getTasks, dispatch),
    addTask: bindActionCreators(addTask, dispatch),
    checkTask: bindActionCreators(checkTask, dispatch),
    clearTasks: bindActionCreators(clearTasks, dispatch)
  };
}

@connect(mapStateToProps, mapDispatchToProps)
class App extends Component {
  static propTypes = {
    addTask: PropTypes.func.isRequired,
    checkTask: PropTypes.func.isRequired,
    clearTasks: PropTypes.func.isRequired,
    content: PropTypes.string.isRequired,
    error: PropTypes.object.isRequired,
    getTasks: PropTypes.func.isRequired,
    hideDialog: PropTypes.func.isRequired,
    showDialog: PropTypes.func.isRequired,
    showTaskDialog: PropTypes.bool.isRequired,
    tasks: PropTypes.array.isRequired
  }

  componentDidMount () {
    this.props.getTasks();
  }

  handleAddButtonClick = () => {
    this.props.showDialog();
  }

  handleAddTask = (task) => {
    this.props.addTask(task);
  }

  handleCloseDialog = () => {
    this.props.hideDialog();
  }

  handleChecked = (index, checked) => {
    this.props.checkTask(index, checked);
  }

  handleClear = () => {
    this.props.clearTasks();
  }

  render () {
    const { showTaskDialog, tasks, content, error } = this.props;
    return (
      <Main
        showTaskDialog={showTaskDialog}
        onAddButtonClick={() => this.handleAddButtonClick}
        onAddTask={(task) => this.handleAddTask(task)}
        onCloseDialog={() => this.handleCloseDialog}
        onChecked={(index, checked) => this.handleChecked(index, checked)}
        onClear={() => this.handleClear()}
        tasks={tasks}
        content={content}
        error={error}
      />
    );
  }
}


export default App;
