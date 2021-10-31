import { getRepository } from "typeorm";
import { Student } from '../entity/Student';
import { Request, Response } from "express";
 
export const getStudents = async(request: Request, response: Response) => {
    const student = await getRepository(Student).find()
    return response.json(student);
};

export const saveStudent = async(request: Request, response: Response) => {
    const student = await getRepository(Student).save(request.body)
    return response.json(student);
};

export const getStudent = async(request: Request, response: Response) => { // Procurar Tarefa atraves do id (lista apenas a tarefa escolhida) (GET)
    const {id} = request.params
    const student = await getRepository(Student).findOne(id)
    return response.json(student);
};

export const updateStudent = async(request: Request, response: Response)=>{
    const {id} = request.params
    const student = await getRepository(Student).update(id, request.body)
};

export const deleteStudent = async (request: Request, responde: Response)=>{
    const {id} = request.params
    const student = await getRepository(Student).delete(id)
};

export const finishedStudent = async(request: Request, response: Response) => {
    const {id} = request.params
    const student = await getRepository(Student).update(id, {
        matriculado: true,
    })
 
};


