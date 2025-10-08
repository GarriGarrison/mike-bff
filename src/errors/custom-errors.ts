export abstract class CustomError extends Error {
  abstract statusCode: number

  constructor(message: string) {
    super(message)

    Object.setPrototypeOf(this, CustomError.prototype) // необходимо, т.к. работаем со встроенным классом ошибок Error
  }

  abstract serializeError(): { message: string }
}
