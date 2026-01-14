/* eslint-disable import/order */
import app from '~/app'

import config from '~/configs'

app.listen(config.SERVER_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server is running on port ${config.SERVER_PORT}`)
})
