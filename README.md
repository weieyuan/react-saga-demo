# react-saga-demo
study redux-saga

## saga使用总结
* 作用  
用于管理应用程序副作用的库，让副作用的管理更容易，执行更高效，测试更容易。
* 监听action  
所监听的action的回调函数在action的reducer执行之后才会执行   
```
takeEvery: 监听所有匹配的action
takeLatest: 监听最近一次的匹配的action
take: 监听一次匹配的action
```
* 发布action  
```
put
put({type: "xxx", payload: payload})//等价于dispatch({type: "xxx", payload: payload})
```
* 方便测试异步操作的call函数  
```
//生成一条描述信息，描述了调用哪个函数，函数的参数值是什么
call(fn, arg1, arg2...)
```