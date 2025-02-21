import { RequestHandler } from 'express';
import { Todo } from '../models/todo';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL!,process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

const TODOS: Todo[] = [];

export const createTodo: RequestHandler = async(req, res, next) => {
    const text = (req.body as {text: string}).text;
    const newId = Math.floor(Math.random() * 10000000).toString();

    const { data, error } = await supabase
    .from('todo')
    .insert([
    { id: newId, text: text, status: 0 },
    ])
    .select();
    if(error) {
        throw new Error(error.message);
    }
    res.status(201).json({ message: 'Created the todo.', createdTodo: data });
};

export const getTodos: RequestHandler = async(req, res, next) => {
    let { data: todo, error } = await supabase
    .from('todo')
    .select('*');
    if(error) {
        throw new Error(error.message);
    }
    res.json({ todos: todo });
};

export const updateTodos: RequestHandler<{id: string}> = async(req, res, next) => {
    const todoId = req.params.id;
    const updated = (req.body as {text:string, status:number});

    const { data, error } = await supabase
    .from('todo')
    .update(updated)
    .eq('id', todoId)
    .select();

    if(error) {
        throw new Error(error.message);
    }
    res.json({ message: 'Updated!', updatedTodo: data});
};

export const deleteTodo: RequestHandler = async(req, res, next) => {
    const todoId = req.params.id;
    const { error } = await supabase
    .from('todo')
    .delete()
    .eq('id', todoId);

    if(error) {
        throw new Error(error.message);
    }
    res.status(204).json({ message: 'Todo deleted!' });
};