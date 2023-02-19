const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json())


//Solve Cors
    app.use(cors({credentials: true , origin:'http://localhost:3000'}));

// Config a pasta Public                                  
    app.use(express.static(__dirname + '/public'));  

// Import Routes 
    const UserRoutes = require('./routes/userRoutes');


// Routes to Use
    app.use('/users' , UserRoutes );


try{
    app.listen(5000);
    console.log("Rodando na porta 5000 o back end")
}catch(err){
    console.log(err)
};
