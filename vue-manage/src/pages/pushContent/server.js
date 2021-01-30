import { get, post } from '../../common/js/require'

export function getLifeData (params) {
  let url = '/pushContent/calculate/getLifeData'
  return new Promise((resolve, reject) => {
    get(url, params).then((res) => {
      resolve(res)
    }).catch((data) => {
      reject(data)
    })
  })
}

export function addLifeData (params) {
  let url = '/pushContent/calculate/addLifeData'
  return new Promise((resolve, reject) => {
    post(url, params).then((res) => {
      resolve(res)
    }).catch((data) => {
      reject(data)
    })
  })
}
