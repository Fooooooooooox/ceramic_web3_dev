import { CeramicClient } from '@ceramicnetwork/http-client'
import { DID } from 'dids'
import { getResolver as getKeyResolver } from 'key-did-resolver'
import { getResolver as get3IDResolver } from '@ceramicnetwork/3id-did-resolver'

function createCeramicWith3ID() {
  const ceramic = new CeramicClient()
  const did = new DID({
    resolver: {
      // A Ceramic client instance is needed by the 3ID DID resolver to load DID documents
      ...get3IDResolver(ceramic),
      // `did:key` DIDs are used internally by 3ID DIDs, therefore the DID instance must be able to resolve them
      ...getKeyResolver(),
    },
  })
  // This will allow the Ceramic client instance to resolve DIDs using the `did:3` method
  ceramic.did = did
}

import { CeramicClient } from '@ceramicnetwork/http-client'
import { DID } from 'dids'
import { getResolver as getKeyResolver } from 'key-did-resolver'
import { getResolver as get3IDResolver } from '@ceramicnetwork/3id-did-resolver'
import ThreeIdProvider from '3id-did-provider'

// `authSecret` must be a 32-byte long Uint8Array
async function authenticateWithSecret(authSecret) {
  const ceramic = new CeramicClient()

  const threeID = await ThreeIdProvider.create({
    authId: 'myAuthID',
    authSecret,
    // See the section above about permissions management
    getPermission: (request) => Promise.resolve(request.payload.paths),
  })

  const did = new DID({
    provider: threeID.getDidProvider(),
    resolver: {
      ...get3IDResolver(ceramic),
      ...getKeyResolver(),
    },
  })

  // Authenticate the DID using the 3ID provider
  await did.authenticate()

  // The Ceramic client can create and update streams using the authenticated DID
  ceramic.did = did
}
