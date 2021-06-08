// 由题目可推导： 最长前缀长度不会超过数组中任意一个数据的长度

// 将第一个值依次与所有值的字符一一比较，取公共值

function findCommonPrefix1(strs: Array<string>):string {
  if (strs.length === 1) {
    return strs[0]
  }
  let commonStr = ''
  const tempArr = strs.map(item => item.split(''))
  for (let i = 0; i < tempArr[0].length; i++) {
    for(let j = 1; j < tempArr.length; j++) {
    //   if (tempArr[0][i] !== tempArr[j][i]) { // 不相等时立即结束循环
    //     return tempArr[0].slice(0, i).join('')
    //   } else {
    //     if (i === tempArr[0].length - 1) {
    //       commonStr = tempArr[0].join('')
    //     }
    //   }
    }
  }
  return commonStr
}

console.log(findCommonPrefix1(['aaac', 'aaad']))