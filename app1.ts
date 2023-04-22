import {  DataTypes, Sequelize } from 'sequelize'




    const conex = new Sequelize('test','root','root ',{
    host:'127.0.0.1',
    dialect:'mysql'
    });
    conex
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });



    const User = conex.define('user',{
        username:{
            type:DataTypes.STRING,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING,
            allowNull:false
        }
    });

    const form = document.querySelector("form") as HTMLFormElement;
    const login = document.querySelector("#email") as HTMLInputElement;
    const senha = document.querySelector("#password") as HTMLInputElement;



    form.addEventListener("submit", event=>{
    const username = login.value;
    const password = senha.value;

    // const user = await User.findOne({where:{username:username,password:password}});

    //  if(user){
    //      console.log('Entraou');

    //  }
    //  else{console.log('se fudeu')}

    // })
    User.findOne({where:{username:username,password:password}})
    .then(user => {
        if(user){
        console.log('Entrou');
        }
        else{
        console.log('Senha incorreta');
        }
    });





    });
