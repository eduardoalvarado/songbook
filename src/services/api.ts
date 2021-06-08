import axios_, {Method} from 'axios'
class Api {
  requestUrl: string;
  headers: object;
  constructor() {
    this.requestUrl = process.env.VUE_APP_API_HOST
    this.headers = {
      'Content-type': 'application/json'
    }
  }
  async request(schema:object, method:Method) {
    return await axios_.request({
      baseURL: this.requestUrl,
      method: method,
      data: schema,
      headers: this.headers
    })
  }
}

export default Api
