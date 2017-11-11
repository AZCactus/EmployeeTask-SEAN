const express = require('express');
const router = express.Router();
const model = require('../models');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


router.get('/task1', (req, res) => {
    model.task.findAll({
      where: {id: 1}
    }).then((tasks) => {
      return res.json(tasks)
    })
});

router.get('/task2', (req, res) => {
    model.task.findAll({
      where: {id: 2}
    }).then((tasks) => {
      return res.json(tasks)
    })
});

router.get('/task3', (req, res) => {
    model.task.findAll({
      where: {id: 3}
    }).then((tasks) => {
      return res.json(tasks)
    })
});

router.get('/task4', (req, res) => {
    model.task.findAll({
      where: {id: 4}
    }).then((tasks) => {
      return res.json(tasks)
    })
});


router.post('/assign/:id', (req, res, next) => {
  id = `${req.params.id}`
  console.log(req.query)
    model.assign.build({
      employeeId: id,
      taskName: req.query.name
    })
    .then((employees) => {
        return res.json(employees)
      })
});







module.exports = router;
