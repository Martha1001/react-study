import { get } from '../../pages/common/utils/fetch'

export const getGists = async () => {
  const res = await get('https://api.github.com/users/octocat/gists')
  return res
}

export const getNum = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(1)
    }, 2000)
  })
  return promise
}

