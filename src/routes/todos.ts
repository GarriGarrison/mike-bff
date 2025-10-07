import { Router } from 'express'
import { celebrate, Joi, Segments } from 'celebrate'
import { createTodo, deleteTodo, getAllTodos, getTodoById, updateTodo } from '../controllers/todos'
import { hasValidId } from '../middlewares/has-valid-id'
import { validateTodoBody } from '../validations/todos'
import { validateParamId } from '../validations/params'

const router = Router()

//* Вариант 1
// router.get('/todos', getAllTodos)
//* Вариант 2
router.get('/', getAllTodos)

// router.get('/:id', hasValidId) // 1-й вариант
// router.get('/:id', [hasValidId], getTodoById) // 2-й вариант (через запятую)
// router.get('/:id', celebrate({
//   [Segments.PARAMS]: {
//     id: Joi.number().required(),
//   },
// }))
router.get('/:id', validateParamId, getTodoById)

// router.post('/', createTodo)
// router.post('/', celebrate({
//   [Segments.BODY]: {
//     title: Joi.string().required().min(2),  // required -нужен, т.к. по умолчанию optional
//     completed: Joi.boolean().required(), 
//   },
// }), createTodo)
router.post('/', validateTodoBody, createTodo)

router.put('/:id', updateTodo)

router.delete('/:id', deleteTodo)

export default router
