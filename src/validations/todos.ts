import { celebrate, Joi, Segments } from 'celebrate'

export const validateTodoBody = celebrate({
  [Segments.BODY]: {
    title: Joi.string().required().min(2), // required -нужен, т.к. по умолчанию optional
    completed: Joi.boolean().required(),
  },
})
