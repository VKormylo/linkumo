import config from '~/configs'

import app from '~/app'

app.listen(config.SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${config.SERVER_PORT}`)
})
