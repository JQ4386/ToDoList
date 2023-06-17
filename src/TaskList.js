import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './TaskList.css';

function TaskList({ tasks, deleteTask }) {
  return React.createElement(
    'div',
    { className: 'task-list' },
    React.createElement(
      TransitionGroup,
      null,
      React.createElement(
        'table',
        { className: 'table' },
        React.createElement(
          'tbody',
          null,
          tasks.map((task) =>
            React.createElement(
              CSSTransition,
              {
                key: task.id,
                timeout: 500,
                classNames: {
                  enter: 'task-enter',
                  enterActive: 'task-enter-active',
                  exit: 'task-exit',
                  exitActive: 'task-exit-active',
                },
              },
              React.createElement(
                'tr',
                { className: 'table-row' },
                React.createElement('td', { className: 'task-checkbox' },
                  React.createElement('input', { type: 'checkbox', disabled: true })
                ),
                React.createElement('td', { className: 'task-text' }, task.text),
                React.createElement('td', { className: 'task-delete' },
                  React.createElement(
                    'button',
                    {
                      className: 'btn btn-secondary',
                      onClick: () => deleteTask(task.id),
                    },
                    'Delete'
                  )
                )
              )
            )
          )
        )
      )
    )
  );
}

export default TaskList;
