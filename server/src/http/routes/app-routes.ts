import { FastifyInstance } from 'fastify'
import { createTransaction } from './controllers/create-transaction.ts'

export async function appRoutes(app: FastifyInstance) {
  app.post('/transactions', createTransaction)
}
