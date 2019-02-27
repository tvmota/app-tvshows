import Api from './Api'

export async function showsList () {
  let resp = (await Api.get('shows?page=1')).data
  let showsArr = []

  Array.from({ length: 10 }, () => showsArr.push(resp[Math.floor(Math.random() * resp.length)]))
  return showsArr
}

export async function searchQueryShow (query) {
  let resp = (await Api.get(`search/shows?q=${query}`)).data
  return resp
}

export async function searchShow (id) {
  let resp = (await Api.get(`shows/${id}`)).data
  return resp
}
