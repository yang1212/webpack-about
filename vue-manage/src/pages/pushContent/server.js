import { post } from '../../common/js/require'

export function getLifeData (params) {
  let url = '/calculate/getLifeData'
  return new Promise((resolve, reject) => {
    post(url, params).then((res) => {
      resolve(res)
    }).catch((data) => {
      reject(data)
    })
  })
}

export function addLifeData (params) {
  let url = '/calculate/addLifeData'
  return new Promise((resolve, reject) => {
    post(url, params).then((res) => {
      resolve(res)
    }).catch((data) => {
      reject(data)
    })
  })
}

export function getList (params) {
  let url = '/calculate/getList'
  return new Promise((resolve, reject) => {
    post(url, params).then((res) => {
      resolve(res)
    }).catch((data) => {
      reject(data)
    })
  })
}

export function updateData (params) {
  let url = '/calculate/updateData'
  return new Promise((resolve, reject) => {
    post(url, params).then((res) => {
      resolve(res)
    }).catch((data) => {
      reject(data)
    })
  })
}

export function delData (params) {
  let url = '/calculate/delData'
  return new Promise((resolve, reject) => {
    post(url, params).then((res) => {
      resolve(res)
    }).catch((data) => {
      reject(data)
    })
  })
}
