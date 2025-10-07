import express from 'express'
import path from 'path'
import { errors } from 'celebrate'
import { createAtHome, getHomePage } from './controllers/home'
// import todosRouter from './routes/todos'
import appRouter from './routes'

const app = express()
const port = process.env.PORT || 3000

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(express.static(path.join(__dirname, '..', 'public')))

//* Вариант 1
// app.use(todosRouter)
//* Вариант 2
// app.use('/todos', todosRouter)
app.use(appRouter)

app.get('/', getHomePage)

app.post('/', createAtHome)

app.get('/about', (req, res) => {
  res.send('<h1>Hello from About page</h1>')
})

// Обработчик 404: должен быть последним в стеке
// app.use((req, res) => {
//   res.status(404).send('<h1>404: Not Found</h1>')
// })

//! Пример из курса - не работает
// app.all('*', (req, res) => {
//   res.status(404).send('<h1>Nothing found!</h1>')
// })

app.use(errors())  // ошибки валидации, вызываем после всех роутов

app.listen(port, () => {
  console.log(`Server has been started on port ${port}`)
})
