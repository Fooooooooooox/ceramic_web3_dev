import { CeramicClient } from '@ceramicnetwork/http-client'

// const { TileDocument } = require('@ceramicnetwork/stream-tile')
// const { CeramicClient } = require('@ceramicnetwork/http-client');

const API_URL = 'https://0.0.0.0:7007';

const ceramic = new CeramicClient(API_URL);

// const do = function async() {
//     const doc = await TileDocument.create(ceramic, {hello: 'world'})
// }


// console.log(doc.content)

// const streamId = doc.id.toString()
import { TileDocument } from '@ceramicnetwork/stream-tile'

// const { TileDocument } = require('@ceramicnetwork/stream-tile')

async function asyncCall() {
    try{
        let doc = await TileDocument.create(ceramic, {hello: 'world'})
        console.log(doc)
    }
    catch(error){
        console.error(error);
    }
}

asyncCall()