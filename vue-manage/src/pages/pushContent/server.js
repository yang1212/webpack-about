import { post } from '../../common/js/require'

export function getLifeData (params) {
  let url = '/pushContent/calculate/getLifeData'
  return new Promise((resolve, reject) => {
    post(url, params).then((res) => {
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

export function getList (params) {
  let url = '/pushContent/calculate/getList'
  return new Promise((resolve, reject) => {
    post(url, params).then((res) => {
      resolve(res)
    }).catch((data) => {
      reject(data)
    })
  })
}

export function updateData (params) {
  let url = '/pushContent/calculate/updateData'
  return new Promise((resolve, reject) => {
    post(url, params).then((res) => {
      resolve(res)
    }).catch((data) => {
      reject(data)
    })
  })
}

export function delData (params) {
  let url = '/pushContent/calculate/delData'
  return new Promise((resolve, reject) => {
    post(url, params).then((res) => {
      resolve(res)
    }).catch((data) => {
      reject(data)
    })
  })
}

export function sumbitImgData (params) {
  let url = '/pushContent/calculate/fileData'
  return new Promise((resolve, reject) => {
    post(url, params).then((res) => {
      resolve(res)
    }).catch((data) => {
      reject(data)
    })
  })
}
