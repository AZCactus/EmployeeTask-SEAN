const express = require('express');
const router = express.Router();
const model = require('../models');


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

router.post('/employee/:id', (req, res, next) => {
  id = `${req.params.id}`
    model.employee.build({
      id: id
    },{
      isNewRecord: false
    }).increment('totalTask')
    .then((employees) => {
        return res.json(employees)
      })
});



module.exports = router;
