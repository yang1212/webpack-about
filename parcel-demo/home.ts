// 1、函数:

// 入参为数组：Array<number>代表数组组成的值类型为number
function missValue(nums: Array<number>): number {
  for (let i = 0; i < nums.length; i++) {
    if (!nums.includes(i + 1)) { return i + 1 }
  }
  return 0
}
// missValue([1])

// 入参设置默认值
function missValueD(numOption: {suit: string; card?: number; }[]): number {
  console.log(numOption)
  return 0
}
// missValueD([{suit: 'a'}])


// 2、接口：

interface tempValue {
  label: string,
  name?: string // 可选属性, 属性名后添加?
  [propName: string]: any // 带有任意数量的其它属性
}
function missValueJ(nums: temp3) : number{
  return 1
}


// 3、类：

// 接口的继承 + 联合类型的使用
// 联合类型(高级类型版块)：表示一个值可以是几种类型之一。 我们用竖线（ |）分隔每个类型，所以 number | string | boolean表示一个值可以是 number， string，或 boolean
interface temp1 {
  label: string
  name?: string
}
interface temp2 extends temp1 {
  label: 'temp2Label'
}
interface temp3 extends temp1 {
  lable: 'temp3Label'
}
type temp4 = temp2 | temp3
function testFn(num: temp4): number {
  console.log(num)
  return 1
}
testFn({label: 'temp2Label'})


// 4、泛型： 能够支持当前的数据类型，同时也能支持未来的数据类型, 并使得返回的值类型与入参类型一致

function missValueT<T>(nums: T) : T {
  return nums
}
// missValueT(2)

function missValueT1<T>(nums: T[]) : T[] {
  console.log(nums.length)
  return nums
}
