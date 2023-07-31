const express = require('express');
const app = express();
app.use(express.json());
const swaggerui = require('swagger-ui-express');
const swaggerjsdoc = require('swagger-jsdoc');
const cors = require('cors')
app.use(cors())


const option = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "node js api documentation for mysql",
            version: "1.0.0"
        },
        servers: [
            {
                url: 'http://localhost:8000'
            }
        ]
    },
    apis: ['./Routes/EmployeeRoute/EmployeeRoute.js']
   }



const employeeRouter = require('./Routes/EmployeeRoute/EmployeeRoute');

app.use('/testing',swaggerui.serve,swaggerui.setup(swaggerjsdoc(option)))

app.use('/', employeeRouter);


const port=8000;
app.listen(port,()=>{
    console.log(`server is running on ${port} port`)
});
