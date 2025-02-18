import { RequestHandler } from 'express';
import { Todo } from '../models/todo';
import { createClient } from '@vercel/edge-config';

const TODOS: Todo[] = [];
const edgeConfig = createClient(process.env.EDGE_CONFIG);

export const createTodo: RequestHandler = (req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newTodo = new Todo(Math.random().toString(), text, 0);

    TODOS.push(newTodo);
    res.status(201).json({ message: 'Created the todo.', createdTodo: newTodo });
};

export const getTodos: RequestHandler = async(req, res, next) => {
    const todo = await edgeConfig.get('todo') as Todo;
    res.json({ todos: todo });
};

export const updateTodos: RequestHandler<{id: string}> = (req, res, next) => {
    const todoId = req.params.id;
    const updated = (req.body as {text:string, status:number});
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if(todoIndex < 0) {
        throw new Error('could not find todo!');
    }

    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updated.text, updated.status);
    res.json({ message: 'Updated!', updatedTodo: TODOS[todoIndex]});
};

export const deleteTodo: RequestHandler = (req, res, next) => {
    const todoId = req.params.id;
    const todoIndex = TODOS.findIndex(todo => todo.id === todoId);

    if(todoIndex < 0) {
        throw new Error('could not find todo!');
    }
    TODOS.splice(todoIndex, 1);
    res.json({ message: 'Todo deleted!' });
};