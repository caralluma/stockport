const Express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');

const TODOS_PATHBASE = 'data';
const TODOS_FILENAME = 'tasks.json';
const TODOS_FILEPATH = path.join(__dirname, TODOS_PATHBASE, TODOS_FILENAME);

const api = new Express();

api.use(bodyParser.urlencoded({
  extend: true
}));
api.use(bodyParser.json());

api.get('/tasks', (req, res) => {
  readTodoFile()
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.status(500).end(`Failed to read the file (${err.message})!`);
    });
});

api.post('/add-task', (req, res) => {
  modifyTodoFileAndAnswer((todos) => {
    todos.push(req.body);
  }, res);
});

api.post('/check-task', (req, res) => {
  modifyTodoFileAndAnswer((todos) => {
    const task = req.body;

    todos[task.index].done = task.checked;
  }, res);
});

api.get('/clear-tasks', (req, res) => {
  modifyTodoFileAndAnswer(todos => todos.filter(task => !task.done), res);
});

module.exports = api;

function modifyTodoFileAndAnswer (action, res) {
  readTodoFile()
    .then((todos) => {
      writeTodoFile(action(todos) || todos)
        .then(() => {
          res.end('Success');
        })
        .catch((err) => {
          res.status(500).end(`Failed to write the file (${err.message})!`);
        });
    })
    .catch((err) => {
      res.status(500).end(`Failed to read the file (${err.message})!`);
    });
}

function writeTodoFile (todo) {
  return new Promise((res, rej) => {
    fs.writeFile(TODOS_FILEPATH, JSON.stringify(todo), (err) => {
      err && rej(err);
      res();
    });
  });
}

function readTodoFile () {
  return new Promise((res, rej) => {
    fs.readFile(TODOS_FILEPATH, { encoding: 'utf8' }, (err, data) => {
      err && rej(err);

      try {
        res(JSON.parse(data));
      } catch (e) {
        rej(e);
      }
    });
  });
}
