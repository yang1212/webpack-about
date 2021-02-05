import { post } from '../../common/js/imgRequire'

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
