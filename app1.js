"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sequelize_1 = require("sequelize");
/*Podemos criar um módulo só para a conexão com o BD.
Após isso precisamos fazer uma query, armazenamos as informações que o usuario entrar, caso a query retorne uma linha, ele irá logar.
*/
//const Sequelize = require('sequelize');
var conex = new sequelize_1.Sequelize('test', 'root', 'root ', {
    host: '127.0.0.1',
    dialect: 'mysql'
});
conex
    .authenticate()
    .then(function () {
    console.log('Connection has been established successfully.');
})
    .catch(function (err) {
    console.error('Unable to connect to the database:', err);
});
var User = conex.define('user', {
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
var form = document.querySelector("form");
var login = document.querySelector("#email");
var senha = document.querySelector("#password");
form.addEventListener("submit", function (event) {
    var username = login.value;
    var password = senha.value;
    // const user = await User.findOne({where:{username:username,password:password}});
    //  if(user){
    //      console.log('Entraou');
    //  }
    //  else{console.log('se fudeu')}
    // })
    User.findOne({ where: { username: username, password: password } })
        .then(function (user) {
        if (user) {
            console.log('Entrou');
        }
        else {
            console.log('Senha incorreta');
        }
    });
});
