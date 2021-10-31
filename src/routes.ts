import { Router, request, response, Request, Response} from 'express'
import { saveStudent } from './controller/StudentController';
import { getStudents } from './controller/StudentController';
import { getStudent } from './controller/StudentController';
import { deleteStudent } from './controller/StudentController';
import { updateStudent } from './controller/StudentController';
import { finishedStudent } from './controller/StudentController';
 
const routes = Router()
 
routes.get('/student', getStudents)
routes.post('/student', saveStudent)
routes.get('/student/:id', getStudent)
routes.put('/student/:id', updateStudent)
routes.delete('/student/:id', deleteStudent)
routes.patch('/student/:id', finishedStudent) 
export default routes