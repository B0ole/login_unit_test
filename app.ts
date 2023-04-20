import * as mysql from 'mysql2/promise';


// const porra = await mysql.createConnection({
//     host:'localhost',
//     database:'frutaria','
//     user:'Rafael',
//     password:'' 
// });'

// try {
//     await porra.ping();
//     console.log('Connected to MySQL database!');
// } catch (error) {
//     console.error('Error connecting to MySQL database:', error);
// } finally {
//     // Close the connection when you are done
//     porra.end();
// }





async function connectToDatabase() {
    const porra = await mysql.createConnection({
      host:'127.0.0.1',
      database:'frutaria',
      user:'Rafael',
      password:'' 
    });


    try {
        await porra.ping();
        console.log('Connected to MySQL database!');
      } catch (error) {
        console.error('Error connecting to MySQL database:', error);
      } finally {
        // Close the connection when you are done
        porra.end();
      }
    }
    
    connectToDatabase();

// const login = document.querySelector('input[type="email"]') as HTMLInputElement;
// const dadoLogin = login.value;

// console.log(dadoLogin);



// const senha = document.querySelector('input[type="password"]') as HTMLInputElement;
// const passwordd = senha.value;

// console.log(passwordd);



