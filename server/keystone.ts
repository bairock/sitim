import { config } from '@keystone-6/core'
import { createAuth } from '@keystone-6/auth'
import { statelessSessions } from '@keystone-6/core/session'
import { lists } from './schema'

const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    skipKeystoneWelcome: true,
  },
})

const session = statelessSessions({
  secret: '1c1211e729984bcaa4b8d12f07b4195d',
  secure: false,
})

export default withAuth(
  config({
    server: {
      port: 4000,
      cors: { origin: ['https://sitim.site', 'http://localhost:3000'], credentials: true },
    },
    graphql: {
      path: '/graphql'
    },
    db: {
      provider: 'sqlite',
      url: 'file:./keystone.db',
    },
    lists,
    session,
    storage: {
      local: {
        kind: 'local',
        type: 'image',
        generateUrl: path => `http://194.58.92.218:4000/images${path}`,
        serverRoute: {
          path: '/images',
        },
        storagePath: 'images',
      },
    },
  })
)