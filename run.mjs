import { CeramicClient } from '@ceramicnetwork/http-client'
import { DataModel } from '@glazed/datamodel'
import { DIDDataStore } from '@glazed/did-datastore'
import { DID } from 'dids'
import { Ed25519Provider } from 'key-did-provider-ed25519'
import { getResolver } from 'key-did-resolver'
import { fromString } from 'uint8arrays'

// Import the model aliases created during development time
// import modelAliases from 'model.json'
import { readFile } from 'fs/promises';
const modelAliases = JSON.parse(
  await readFile(
    new URL('./model.json', import.meta.url)
  )
);

// The key must be provided as an environment variable
const key = fromString(process.env.DID_KEY, 'base16')
// Create and authenticate the DID
const did = new DID({
  provider: new Ed25519Provider(key),
  resolver: getResolver(),
})
await did.authenticate()

// Create the Ceramic instance and inject the DID
const ceramic = new CeramicClient('http://101.35.25.157:7007')
ceramic.did = did

// Create the model and store
const model = new DataModel({ ceramic, model: modelAliases })
const store = new DIDDataStore({ ceramic, model })

// exampleNote and newNotes are schemas in the model
const exampleNote = await model.loadTile('exampleNote')
// console.log("~~~~exampleNote~~~~~")
// console.log(exampleNote)

const newNote = await model.createTile('SimpleNote', { text: 'My new note' })
// console.log("~~~~newNote~~~~~")
// console.log(newNote)


await store.set('myNote', { text: 'This is my note' })

await store.set('myNote', { text: 'hhhhhh' })

const res = await store.get('myNote')

console.log(res)