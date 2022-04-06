"use strict"

//const { json } = require("body-parser");

const id = document.querySelector("#id"),
name = document.querySelector("#name"),
password = document.querySelector("#password"),
confirmPassword = document.querySelector("#confirm-password"),
registerbtn = document.querySelector("#button");

registerbtn.addEventListener("click",register);

function register(){
    const req = {
        id : id.value,
        name : name.value,
        password : password.value,
        confirmPassword : confirmPassword.value,
    };
    console.log(req);

    // fetch("/register", {
    //     method: "POST",
    //     headers:{
    //         "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(req),
    // })
    //     .then((res) => res.json())
    //     .then((res) => {
    //         if (res.success) {
    //             location.href = "/";
    //         } else {
    //             alert(res.msg);
    //         }
    //     })
    //     .catch((err) => {
    //         console.error("로그인 중 에러 발생!");
    //     });
}

