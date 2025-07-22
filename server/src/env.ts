import { z } from 'zod'

const evnSchema = z.object({
  GIMINI_API_KEY: z.string(),
})

export const env = evnSchema.parse({
  GIMINI_API_KEY: process.env.GIMINI_API_KEY,
})
