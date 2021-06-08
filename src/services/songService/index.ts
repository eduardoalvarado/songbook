import apiClient from '../api'
import { queryConstants } from './queryConstants'

class SongService extends apiClient {
  getSong(id:string) {
    const schema = queryConstants.queries.getSongById
    schema.variables = {id: id}
    return this.request(schema, 'POST')
  }
  getAllSongs() {
    const schema = queryConstants.queries.getSongs
    return this.request(schema, 'POST')
  }
}

export default new SongService()
