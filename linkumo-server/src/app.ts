import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'

dotenv.config({ path: '.env' })

import config from '~/configs'

import { ROOT } from '~/constants'

import { handleError } from '~/middlewares/errorMiddleware'
import authRouter from '~/routes/authRoutes'
import linkRouter from '~/routes/linkRoutes'
import tagRouter from '~/routes/tagRoutes'
import userRouter from '~/routes/userRoutes'

const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(
  cors({
    origin: config.CLIENT_URL,
    credentials: true
  })
)

app.use(`${ROOT}/auth`, authRouter)
app.use(`${ROOT}/users`, userRouter)
app.use(`${ROOT}/links`, linkRouter)
app.use(`${ROOT}/tags`, tagRouter)

app.use(handleError)

export default app
