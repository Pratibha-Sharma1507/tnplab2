
const express = require('express');
const employeeRouter = express.Router();
const {postEmployee,getEmployee,updateEmployee,deleteEmployee} = require('../../Controller/Employee/Employee')

/**
 *  @swagger
 *  components:
 *        schemas:
 *              employee:
 *                  type: object
 *                  properties:
 *                      Emp_id:
 *                              type: string
 *                      Emp_name:
 *                              type: string
 *                      Dept:
 *                              type: string
 *                      Salary:
 *                              type: number
 *
 */

/**
 * @swagger
 * /viewemployee:
 *        get:
 *             summary: node js api
 *             description: node js api
 *             responses:
 *                 200:
 *                    description: to test Get method
 *                    content:
 *                         application/json:
 *                                  schema:
 *                                      type: array
 *                                      items:
 *                                          $ref : '#components/schemas/display'
 */

/**
 * @swagger
 * /addemployee:
 *      post:
 *          summary: node js api
 *          description: nodejs api
 *          requestBody:
 *                  required: true
 *                  content:
 *                     application/json:
 *                         schema:
 *                              $ref : '#component/schemas/display'
 *          responses:
 *               200:
 *                    description: added successfully
 */

/**
 * @swagger
 * /updateemployee/{Emp_id}:
 *                patch:
 *                    summary: node js api
 *                    description: node js api
 *                    parameters:
 *                      - in: path
 *                        name: Emp_id
 *                        required: true
 *                        description: string Emp_id required
 *                        schema:
 *                              type: string
 *                    requestBody:
 *                        required: true
 *                        content:
 *                          application/json:
 *                            schema:
 *                               $ref : '#components/schemas/display'
 *                    responses:
 *                       200:
 *                         description: added successfully
 *                         content:
 *                            application/json:
 *                                  schema:
 *                                      type: array
 *                                      items:
 *                                          $ref : '#components/schemas/display'
 */


/**
 * @swagger
 * /deleteemployee/{Emp_id}:
 *             delete:
 *                  summary: this api is used to check if delete method is working or not
 *                  description: this api is used to check if delete method is working or not
 *                  parameters:
 *                     - in: path
 *                       name: Emp_id
 *                       required: true
 *                       description: string Role_id required
 *                       schema:
 *                         type: string
 *                  responses:
 *                       200:
 *                            description: to test delete method
 */



employeeRouter.post('/addemployee',postEmployee)
employeeRouter.get('/viewemployee',getEmployee)
employeeRouter.patch('/updateemployee/:Emp_id',updateEmployee)
employeeRouter.delete('/deleteemployee/:Emp_id',deleteEmployee)

module.exports = employeeRouter;
