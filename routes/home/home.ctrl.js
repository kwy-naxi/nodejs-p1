"use strict";

const home = (req, res) => {
    res.render('home/index');
};

const about = (req, res) => {
    res.render('home/about');
};

const login = (req, res) => {
    res.render('home/login');
};


module.exports = {
    home,
    about,
    login,
};