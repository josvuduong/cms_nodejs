const express = require('express');
const router = express.Router();
const noticesController = require('../app/controllers/NoticesController')

router.get('/', noticesController.list);
router.get('/add', noticesController.add);
router.get('/edit/:id', noticesController.edit);
router.get('/delete/:id', noticesController.delete);
module.exports = router;