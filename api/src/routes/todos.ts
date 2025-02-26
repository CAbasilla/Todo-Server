import { Router } from "express";

import { createTodo, deleteTodo, getAllTodos, getTodoStats, updateTodos } from '../controllers/todos';

const router = Router();

router.post('/', createTodo);

router.get('/', getAllTodos);

// router.get('/:id', getTodos);

router.get('/:status', getTodoStats);

router.patch('/:id', updateTodos);

router.delete('/:id', deleteTodo);

export default router;