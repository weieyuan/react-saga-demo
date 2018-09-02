# react-saga-demo
study redux-saga

## saga使用总结
* 作用  
用于管理应用程序副作用的库，让副作用的管理更容易，执行更高效，测试更容易。
* 监听action  
所监听的action的回调函数在action的reducer执行之后才会执行   
```
takeEvery: 监听所有匹配的action，非阻塞式
takeLatest: 监听最近一次的匹配的action，之前启动的任务如果还没有执行完那么会被取消，非阻塞式
take: 监听一次匹配的action，阻塞式，返回值是监听到的action对象
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
* 错误的处理  
两种方式：一种是使用try/catch，当yield后的primise对象被拒绝时，catch语句块就会执行；第二种是在代码中直接处理reject状态。
示例：  
```
//方式一
function* doSth(){
    try {
        const product = yield call(Api.fetch, "/products")
        yield put({type: "success"})
    }
    catch(error){
        yield put({type: "error"})
    }
}
//方式二
function getData(){
    return Api.fetch('/pruducts')
      .then((res) => ({res}))
      .catch((err) => ({err}))
}
function* doSth(){
    const {res, err} = yield call(getData)
    if (res) {
        yield put({type: "success"})
    }
    if (err) {
        yield put({type: "error"})   
    }
}
```
* 无阻塞式任务  
```
fork: 任务会在后台运行，不用等待任务结束，返回值是一个task对象，使用cancle可以取消该任务
使用示例：  
function* doSth(){
    while(true) {
        const {user, password} = yield take('login_request')
        const task = yield fork(authorize, user, password)
        const action = yield take(['login_error', 'login_out'])
        if (action.type == 'login_out') {
            yield cancle(task)
        }

    }

}
```
* 同时执行多个任务  
```
const [user, repos] = yield [
  call(fetch, "/user"),
  call(fetch, '/repos')
]
```
* 任务竞赛  
```
//只会等待第一个完成的任务执行完成，未完成的任务将会被取消
const {post, timeout} = yield race({
  posts: call(fetch, "/post"),
  timeout: call(delay, 1000)
})
```
* yield*的用法？？？
* 






