import axios from 'axios'
const baseUrl = "http://localhost:3001/notes"

const getAll = () => {
  const request = axios.get(baseUrl)
  const nonExisting = {
    id:10000,
    content: 'This note is not saved to server',
    data: "2020-12-01T13:53:28.593Z",
    important: true
  }
  return request.then(response => response.data.concat(nonExisting))
}

const create = (newObj:object) => {
  const request = axios.post(baseUrl, newObj)
  return request.then(response => response.data)
}

const update = (id:number, newObj:object) => {
  const request = axios.put(`${baseUrl}/${id}`, newObj)
  return request.then(response => response.data)
}

export {getAll, create, update}