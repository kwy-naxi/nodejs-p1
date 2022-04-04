"use strict";


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

// 임시데이터
const users = {
    id : ["12345","admin","kim"],
    password : ["12345","admin","kim"],
};

const process = {
    login : (req, res) => {
        const id = req.body.id,
        password = req.body.password;

        if(users.id.includes(id)){
            const idx = users.id.indexOf(id);
            if(users.password[idx] === password){
                return res.json({
                    success: true,
                });
            }
        }
        
        return res.json({
            success: false,
            msg: "실패했습니다.",
        });
    },
};

module.exports = {
    output,
    process,
};