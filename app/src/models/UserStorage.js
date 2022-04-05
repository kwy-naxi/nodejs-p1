"use strict"

class UserStorage {
    // 임시데이터
    static #users = {
        id : ["12345","admin","kim"],
        password : ["12345","admin","kim"],
        name: ["일이삼","관리자","용"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)){
                newUsers[field] = users[field];
            }
            return newUsers;
        },{});
        
        return newUsers;
    }
}

module.exports = UserStorage;