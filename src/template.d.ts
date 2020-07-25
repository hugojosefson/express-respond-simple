import { Handler } from 'express'

export default function respond(code: number, body?: (string | object), forceCodeEvenIfEmptyBody?: boolean): Handler
