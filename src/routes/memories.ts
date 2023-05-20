import { FastifyInstance } from 'fastify'
import { prisma } from '../lib/prisma'

export async function memoriesRoutes(app: FastifyInstance) {
  app.get('/memories', async (req, res) => {
    const memories = await prisma.memory.findMany({
      orderBy: {
        createdAt: 'asc',
      },
    })

    return memories.map((memory) => {
      return {
        id: memory.id,
        coverUrl: memories.coverUrl,
        exerpt: memory.content.substring(0, 15).concat('...'),
      }
    })
  })

  app.get('/memories/:id', async (req, res) => {})
  app.post('/memories', async (req, res) => {})
  app.put('/memories/:id', async (req, res) => {})
  app.delete('/memories/:id', async (req, res) => {})
}
