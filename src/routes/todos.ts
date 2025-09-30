import { Router } from 'express'
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from '../controllers/todos'

const router = Router()

//* Вариант 1
// router.get('/todos', getAllTodos)
//* Вариант 2
router.get('/', getAllTodos)

router.get('/:id', getTodoById)

router.post('/', createTodo)

router.put('/:id', updateTodo)

router.delete('/:id', deleteTodo)

export default router
