import 'isomorphic-unfetch'
import { serializeFunc } from './index'

const LOCAL_HOST = '127.0.0.1'
const LOCAL_PORT = process.env.port || 3030

interface Options {
  url: string,
  method?: string,
  headers?: {},
  data?: string | {},
  body?: BodyInit,
  credentials?: RequestCredentials
}
export function request(options: Options) {
  const defaults = {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  }
  options = Object.assign({}, defaults, options)
  const { url, data, headers } = options

  options.headers = Object.assign({}, defaults.headers, headers)

  const isNode = typeof window === 'undefined'
  let requestUrl = url
  if (isNode && !requestUrl.startsWith('http')) {
    requestUrl = `http://${LOCAL_HOST}:${LOCAL_PORT}${url}`
  }

  if (data && options.method.toUpperCase() === 'POST') {
    if (options.headers['Content-Type'] === 'application/json') {
      options.body = JSON.stringify(data)
    } else {
      options.body = serializeFunc(data)
    }
  }

  delete options.url
  return fetch(requestUrl, options).then(res => {
    if (res.status === 200) {
      return res.json()
    } else {
      console.log(`[fetch error]: ${options.method} ${requestUrl} ${res.status} (${res.statusText})!`)
      return res
    }
  }, err => err)
}

export const get = url => request({
  url,
  method: 'GET',
})

export const post = (url, data) => request({
  url,
  data,
  method: 'POST',
})
