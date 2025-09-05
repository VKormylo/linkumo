import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'

dotenv.config({ path: '.env' })

import { ROOT } from '~/constants'
import { handleError } from '~/middlewares/errorMiddleware'
import authRouter from '~/routes/authRoutes'
import userRouter from '~/routes/userRoutes'
import config from '~/configs'

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

app.use(handleError)

export default app
