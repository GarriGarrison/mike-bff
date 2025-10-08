import { celebrate, Joi, Segments } from 'celebrate'

export const validateParamId = celebrate({
  [Segments.PARAMS]: {
    id: Joi.number().required(),
  },
})
