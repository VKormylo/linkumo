import app from './app'
import config from './configs/config'

app.listen(config.SERVER_PORT, () => {
  console.log(`Server is running on port ${config.SERVER_PORT}`)
})
