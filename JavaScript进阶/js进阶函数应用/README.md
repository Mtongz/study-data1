<!--
 * @Description: 进阶总结
 * @Autor: Tong
 * @Date: 2021-07-01 15:27:04
 * @LastEditors: Tong
 * @LastEditTime: 2021-07-01 17:13:50
-->
### 一、函数（call apply bind）主要应用场景
* call 经常做继承
* apply 经常跟数组有关，比如借助于数学对象实现数组最大最小值
* bind 不调用函数，但是还想改变this指向，比如改变定时器内部的this指向
  
### 二、严格模式
#### 变量
* 1.变量要先声明再赋值使用
* 2.禁止删除已声明的变量

#### this
* 3.this指向问题
  * 3.1 全局作用域中函数的this是undefined
  * 3.2 构造函数不加new调用，this会报错

#### 函数变化
* 4.函数不能有重名参数（重名会覆盖）
* 5.函数必须声明在顶层.新版本的JavaScript 会引入“块级作用域”（ES6中已引入)。为了与新版本接轨，不允许在非函数的代码块内声明函数。
* 错误示范：
```javascript
if() {
  function f1() {
    console.log(123)
    f1()
  }
}
5.2
for(let i = 0; i < 100; i++) {
  function f2() {
    console.log(123)
    f2()
  }
}
```

### 三、高阶函数
* 高阶函数是对其他函数进行操作的函数，它<font color=red>接收函数作为参数</font>或<font color=red>将函数作为返回值输出</font>。
```javascript
//1
function fn(callback) {
  callback&&callback()
}
fn(function(){alert('123')})

//2
function fn() {
  return function() {}
}
fn()
```
#### 四、闭包
* 1.指有权访问另一个函数作用域中的变量的<font color=red>函数</font>
* 2.fn外面的作用域可以访问fn内部的局部变量
* 3.变量的主要作用：延伸了变量的作用范围
* 4.return函数是闭包实现的主要原理

```javascript

```


  