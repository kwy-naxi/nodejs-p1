"use strict";

const User = require("../../models/User");

const output = {
    home : (req, res) => {
        res.render('home/index');
    },
    
    about : (req, res) => {
        res.render('home/about');
    },
    
    login : (req, res) => {
        res.render('home/login');
    },
};


const process = {
    login : (req, res) => {
       const user = new User(req.body);
       const response = user.login();
       return res.json(response);
    },
};

module.exports = {
    output,
    process,
};