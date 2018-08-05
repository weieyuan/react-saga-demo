# react-saga-demo
study redux-saga

## saga使用总结
* 监听action 
所监听的action的回调函数在action的reducer执行之后才会执行   
```
takeEvery: 监听所有匹配的action
takeLatest: 监听最近一次的匹配的action
take: 监听一次匹配的action
```