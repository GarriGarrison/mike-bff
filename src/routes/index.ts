import { Request, Response, Router } from 'express'
import todosRouter from './todos'

const router = Router()

router.use('/todos', todosRouter)

router.use((req: Request, res: Response) => {
  res.status(404).json({ message: 'Not Found' })
})


export default router
