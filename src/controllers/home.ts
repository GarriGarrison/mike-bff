import { Request, Response } from 'express'

export const getHomePage = (req: Request, res: Response) => {
  res.send('<h1>Hello</h1>')
}

export const createAtHome = (req: Request, res: Response) => {
  console.log(req.body)
  
  res.json({ message: 'Home page'})
}
