import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Dialog from 'react-toolbox/lib/dialog';
import Input from 'react-toolbox/lib/input';
import DatePicker from 'react-toolbox/lib/date_picker';

class NewTaskDialog extends Component {
  static propTypes = {
    onAddTask: PropTypes.func.isRequired,
    onCloseDialog: PropTypes.func.isRequired,
    showTaskDialog: PropTypes.bool.isRequired
}

constructor (props) {
  super(props);
  this.state = {
    name: '',
    description: '',
    due: new Date(),
    done: false
  };
}

  handleChange = (item, value) => {
    this.setState({[item]: value});
  };

  handleAddTask = () => {
    this.props.onAddTask(this.state);
    this.setState(
      {
        name: '',
        description: '',
        due: new Date(),
        done: false
      }
    );
  }

  render () {
    return (
      <Dialog
        active={this.props.showTaskDialog}
        title="New Task"
        actions={[
          { label: 'Cancel', onClick: this.props.onCloseDialog()},
          { label: 'Add', onClick: () => this.handleAddTask()}
        ]}
      >
        <Input type='text' label="Task name" maxLength={30} value={this.state.name} onChange={(value) => this.handleChange('name', value)} />
        <Input type='text' multiline label="Task description" maxLength={120} rows={3} value={this.state.description} onChange={(value) => this.handleChange('description', value)} />
        <DatePicker label='Deadline' locale="en-us" cancelLabel="Cancel" value={this.state.due} onChange={(value) => this.handleChange('due', value)} />
      </Dialog>
    );
  }
}

export default NewTaskDialog;

