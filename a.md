1.变量声明let和const
预解析机制 : var有变量提升的机制

function fn(){
    var a=1
    console.log(a)
}
fn()  //1

//以上代码等同于：
function fn(){
    var a
    a=1
    console.log(a)
}
fn()  //1
把声明赋值和打印的语句顺序交换

function fn(){
    console.log(a)
    var a=1
}
fn()  //undefined

//以上代码等同于：
function fn(){
    var a
    console.log(a)
    a=1
}
fn()  //undefined
ES5的解析：从上到下解析，遇到var关键字，就把该声明提前到函数的最顶部，如果不在函数内就提升到全局作用域的最顶部，赋值留在原位，因为先声明了变量a，然后打印，最后再赋值，所以结果就是undefined。
但是使用let和const就可以解决变量提升的问题，let代表变量，const代表常量。

let
function fn(){
    let a=1
    console.log(a)
}
fn()  //1
把声明赋值和打印的语句顺序交换

function fn(){
    console.log(a)
    let a=1
}
fn()  //Error: a is not defined
let不存在变量提升的机制，不会被声明到最顶部，所以未声明就打印，会报错：变量未定义。
