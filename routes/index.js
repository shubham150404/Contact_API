require('dotenv').config();
var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
const User = require('../model/user')
const User_Controllers = require('../Controller/UserController')
var jwt = require('jsonwebtoken');



/* GET home page. */
router.post('/UserConstact',User_Controllers.User_contact_create);

router.get('/UserGet',User_Controllers.User_Contact_sequre,User_Controllers.User_Contact_get);

router.put('/UserUpdate/:id',User_Controllers.User_Contact_sequre,User_Controllers.User_Contact_Update);

router.delete('/UserDelete/:id',User_Controllers.User_Contact_sequre,User_Controllers.User_Contact_Delete);

module.exports = router;
