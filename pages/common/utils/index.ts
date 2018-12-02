// 对象序列化 {name: will, age: 8} => name=will&age=8
export const serializeFunc = (data) => {
  let result = ''
  for (const i in data) {
    if (data.hasOwnProperty(i)) {
      result += `&${i}=${data[i]}`
    }
  }
  return result.substring(1, result.length)
}
