import type { NextFunction, Request, Response } from 'express'
import { NotFoundError } from '../errors/not-found-error'

const todos = [
  { id: 1, title: 'Learn Node.js', completed: false },
  { id: 2, title: 'Learn Express', completed: false },
  { id: 3, title: 'Learn MongoDB', completed: false },
]

export const getAllTodos = (req: Request, res: Response) => {
  res.json(todos)
}

export const getTodoById = (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const todo = todos.find((todo) => todo.id === id)

  // if (!todo) throw new Error('Nothing found')
  if (!todo) throw new NotFoundError('Todo not found') // кастомная ошибка

  res.json(todo)
}

export const createTodo = (req: Request, res: Response) => {
  const newTodo = req.body

  newTodo.id = (todos.at(-1)?.id || 0) + 1

  todos.push(newTodo)

  res.status(201).json(newTodo)
}

export const updateTodo = async (req: Request, res: Response, next:NextFunction) => {
  const id = Number(req.params.id)
  const updatedTodo = req.body

  // fetch().then().catch(err => next(err))
  // fetch().then().catch(next) // тоже самое что и строчкой выше
  try {
    new Error('')
  } catch (error) {
    next(error)
  }

  const todoIndex = todos.findIndex((todo) => todo.id === id)

  // if (todoIndex < 0) throw new Error('Nothing found')
  if (todoIndex < 0) throw new NotFoundError('Todo not found') // кастомная ошибка

  todos[todoIndex] = updatedTodo

  res.json(updatedTodo)
}

export const deleteTodo = (req: Request, res: Response) => {
  const id = Number(req.params.id)

  const todoIndex = todos.findIndex((todo) => todo.id === id)

  // if (todoIndex < 0) throw new Error('Nothing found')
  if (todoIndex < 0) throw new NotFoundError('Todo not found') // кастомная ошибка

  todos.splice(todoIndex, 1)

  res.status(200).send()
}
