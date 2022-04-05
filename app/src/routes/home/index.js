"use strict";

const express = require("express");
const router = express.Router();
const ctrl = require('./home.ctrl');

router.get('/', ctrl.output.home);
router.get('/about', ctrl.output.about);
router.get('/login', ctrl.output.login);

router.post('/login',ctrl.process.login);

module.exports = router;