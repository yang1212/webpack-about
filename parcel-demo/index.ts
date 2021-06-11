"use strict"
function sortM<T>(arr: T[]):T[]{
  let i = arr.length - 1
  let temp
  while (i > 0) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
    i--
  }
  return arr
}

// n个数，外层需要经过 n - 1轮
// 内层需两两比较， 一圈过后，可确认一个最值。 比较次数为： 剩下未排序数个数 - 1,以此循环。

function sortK<T>(arr: T[]):T[] {
  if (arr.length <= 1) { return arr }
  let tag = arr[Math.floor(arr.length / 2)]
  let leftArr = []
  let rightArr = []
  arr.splice(Math.floor(arr.length / 2), 1)
  for (let i = 0; i < arr.length - 1; i++) {
    if (tag > arr[i]) {
      leftArr.push(arr[i])
    } else {
      rightArr.push(arr[i])
    }
  }
  return sortK(leftArr).concat(tag, sortK(rightArr))
}

function sortC<T>(arr: T[]):T[] {
  for(let j = 1; j < arr.length; j++) {
    let key = arr[j]
    let orderlyNum = j - 1 // 有序数组下标最大值即为key值前一项
    while (arr[orderlyNum] > key && orderlyNum > -1) {
      arr[orderlyNum + 1] = arr[orderlyNum]
      orderlyNum--
    }
    arr[orderlyNum + 1] = key //  此步是用于完全有序的数组
  }
  return arr
}

sortC([2, 3, 1, 5])


// this实际上是函数被调用时发生的绑定

// 1) 不带任何修饰的函数调用。（严格模式下： 全局环境this绑定到undefined)

// 2) 隐式绑定(隐式绑定丢失)

// 3) 硬绑定（call, apply)

// 4) new绑定