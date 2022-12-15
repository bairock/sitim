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
})

export default withAuth(
  config({
    server: {
      port: 4000
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
        generateUrl: path => `https://admin.sitim.site/images${path}`,
        serverRoute: {
          path: '/images',
        },
        storagePath: 'images',
      },
    },
  })
)