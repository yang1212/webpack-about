// 字符串相加： 415
function strAdd(num1, num2) {
  if (num1 === '0' && num2 === '0') {
    return '0'
  }
  if (num1 === '0') {
    return num2
  }
  if (num2 === '0') {
    return num1
  }
  let add1 = num1.split('').reverse()
  let add2 = num2.split('').reverse()
  let result = []
  for(let i = 0; i < Math.max(add1.length, add2.length); i++) {
    let value = (add1[i] ? +add1[i] : 0) + (add2[i] ? +add2[i] : 0)
    let remainder = value % 10
    if (result[i]) {
      let temp = remainder + result[i]
      result[i] = temp
      if ((temp / 10) >= 1) {
        result[i + 1] = 1
        result[i] = temp % 10
      }
    } else { // 无进位
      result[i] = remainder
    }
    if ((value / 10) >= 1) {
      result[i + 1] = 1
    }
  }
  return result.reverse().join('')
}
// 最长公共前缀：14
function findCommonPrefix(strs) {
  if (strs.length === 1) { // ["a"]、[""]
    return strs[0]
  }
  let commonStr = ''
  const tempArr = strs.map(item => item.split(''))
  for (let i = 0; i < tempArr[0].length; i++) {
    for(let j = 1; j < tempArr.length; j++) {
      if (tempArr[0][i] !== tempArr[j][i]) { // 不相等时立即结束循环
        return tempArr[0].slice(0, i).join('')
      } else {
        if (i === tempArr[0].length - 1) {
          commonStr = tempArr[0].join('')
        }
      }
    }
  }
  return commonStr
}
// 搜索插入位置： 35
function findElement(nums, target) {
  let curIndex
  let temp = nums.some((item, index) => {
    if (item === target) {curIndex = index }
    return item === target
  })
  if (!temp) { // 未有此项
    for(let i in nums) {
      if (nums[i] >= target) {
        curIndex = i
        break
      } else {
        if (+i === nums.length - 1) {
          curIndex = Number(i) + 1
        }
      }
    }
  }
  return curIndex
}
// 最后一个单词的长度：58
function lastWordLength(s) {
  if (!s) { return 0 }
  s = s.replace(/(^\s*)|(\s*$)/g, "")
  s = s.split(' ')
  return s[s.length - 1].length
}
// 只出现一次的数字:: 136
function singleNum(nums) {
  // 0 ^ A = A；A ^ A = 0；A ^ B ^ B = A（^满足交换律）
  return nums.reduce((a, b) => {
    return a^b
  })
}
// 加1： 66
function addEndElement(digits) { // [9, 9, 6] --< [6, 9, 9]
  let arr = digits.reverse()
  arr[0] = arr[0] + 1
  arr[arr.length] = 0
  arr.map((item, index) => {
    if (item > 9) {
      arr[index] = 0
      arr[index + 1] = arr[index + 1] + 1
    }
  })
  return arr[arr.length - 1] === 0 ? arr.slice(0, arr.length - 1).reverse() : arr.reverse()
}
// 存在重复元素：217
function containRepeat(nums) {
  let result = Array.from(new Set(nums))
  return result.length < nums.length ? true : false
}
// 各位相加: 258
function addDigits(num) {
  let temp
  let result = num
  while (result > 9) {
    temp = result.toString().split('')
    result = temp.reduce((a, b) => {
      return +a + +b
    })
  }
  return result
}
// 移动零: 283
function moveZero(nums) {
  let i = nums.length
  let temp
  while (i > 1) {
    for(let j = 0; j < i - 1; j++) {
      if (nums[j] === 0) {
        temp = nums[j + 1]
        nums[j + 1] = nums[j]
        nums[j] = temp
      }
    }
    i--
  }
  return nums
}
// 丢失的数字: 268
function missNumber(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i + 1)) { return i + 1 }
  }
  return 0
}
// 找不同: 389
function findDifference(s, t) {
  s = s.split('')
  t = t.split('')
  s.forEach((item) => {
    t.splice(t.findIndex((v) => v === item), 1)
  })
  return t[0]
}
// 位1的个数: 191
function numLength(n) {
  console.log(34, n.toString(2))
  // 入参为二进制时，结果转为十进制，但结果不符合规则，知识盲区
  // return n.toString(2).replace(/0/g,'').length
  // let a = 11
  // console.log(n.toString(2))
}
// 多数元素  空间复杂度为O(1)，分治： TO DO
function majorityElement(nums) {
  let obj = {}
  let result = 1
  for (let i in nums) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1
    } else {
      obj[nums[i]] += 1
      console.log(obj)
    }
  }
  return result
}
// 数组交集：349
function arrMixed(nums1, nums2) {
  console.log(233)
  nums1.forEach((item => {
    console.log(item)
  }))
}

arrMixed([3, 2, 1], [1, 1])
