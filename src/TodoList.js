import React ,{ Component,Fragment } from 'react';
import TodoItem from './TodoItem';
import './style.css';//一般会先引入组件，最后引入样式
import store from './store/index.js'//引入仓库
import store from './store/actionTypes'
import { getInputChangeAction } from './store/actionCreators';
class TodoList extends Component {
  constructor(props){//构造函数优于任何函数，会被自动执行的函数
    super(props)//调用父类
    //当组件的state或者props（因为props的值来自state）发生改变的时候，render函数就会重新执行
    this.state = {//定义数据需要把数据放在状态里面（this.state就是这个组件的状态）
      inputValue:'hello',
      list:['学习英文','学习React']
    } 
    // 一般把this问题的绑定放在页面的顶部,提升性能优化，整个程序里面只会执行一次，避免子组件的无谓渲染
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleBtnClick = this.handleBtnClick.bind(this)
    console.log(store.getState())
    //store里面的数据变化，外面的也要跟着变化
    store.subscribe(this.handleStoreChange)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    //store.getState() 获取store里面的数据
  }
  handleStoreChange(){
    console.log('store change')
    this.setState(store.getState())//当store里面的数据发生变动的时候
    //store.getState()拿出数据，重新去设置他，渲染
  }
 //声明周期函数
  componentWillMount(){
    console.log('componentWillMount：当第一次在组件即将被挂载到页面的时刻自动执行')
  }
  componentDidMount(){
    console.log('componentDidMount：当第一次在组件挂载到页面的之后自动执行')
  }
  shouldComponentUpdate(){
    console.log("shouldComponentUpdate：组件被更新之前，他会自动被执行")
    return true//需要返回true或false，如果返回false，组件将不被更新；
  }
  //他和shouldComponentUpdate的区别：如果shouldComponentUpdate返回false，这个函数不被执行
  //shouldComponentUpdate返回true，这个函数才会被执行
  componentWillUpdate(){
    console.log("componentWillUpdate:组件更新前执行")
  }
  componentDidUpdate(){
    console.log('componentDidUpdate：组件更新完成之后被执行')
  }
  //一个组件要从父组件接受参数。如果这个组件第一次存在于父组件中，不会执行，如果这组件不是第一次存在组件中，会执行
  componentWillReceiveProps(){
    console.log("我是父组件，不会被执行")
  }
  //当父组件的render被运行一次的时候，子组件的render也会被重新渲染一次，因为子组件在父组件 里面
  render() {
    console.log('组件挂载到页面时刻执行')
    return (
      <Fragment>
        {/* label是扩大点击区域 ,为了防止for和表示的foe混淆，我们建议用htmlFor替换*/}
        <label htmlFor="insertArea">输入内容</label>
        <input 
        id="insertArea"
        className="input"
        value={this.state.inputValue}
        onChange={this.handleInputChange}
         />
         
         {/* 绑定事件的时候首字母一定要大写,为了防止css的类名class和class混淆，我们样式的class用className替换 */}
        <button onClick={this.handleBtnClick} >提交</button>
        <ul>
          {
            <div>
            {this.getTodoItem()}
            {/*
            this.state.list.map((item,index)=>{
              return (
                <div>
                  父组件传递数据给子组件通过属性的形式传递，例如content ,方法也可以通过属性的形式提交，记得把this强制绑定到父组件*
                <TodoItem content={item} index={index}
                delectItem={this.handleItemDel.bind(this)}
                />


                /输入<h1></h1>这样的标签会原样展示
                // <li key={index} 
                // onClick={this.handleItemDel.bind(this,index)}
                // >
                //   {item}
                // </li>

                //把<h1></h1>这样的元素进行转换 我们使用dangerouslySetInnerHTML={{__html:item}} 进行设置
                引入组件
                <li key={index} 
                onClick={this.handleItemDel.bind(this,index)}
                dangerouslySetInnerHTML={{__html:item}}
                >
                </li>
                
                </div>
              )
              // 实际开发中不建议用index做key
            })
            */}
            </div>
          }
        </ul>
      </Fragment>
    )
  }

  getTodoItem (){
    return (
      this.state.list.map((item,index)=>{
      return (
        <TodoItem content={item} index={index}
        key={item}
        deleteItem={this.handleItemDel.bind(this)}
        />
      )
    })
  )
  }
  handleInputChange(e){
    console.log(this)//如果把this.handleInputChange.bind(this)，bind(this)去掉，this就是undefined了，我们绑定this到当前组件
    console.log(e.target.value)//我们刚刚输入的内容，可以用ref来替换
    // this.setState({//修改数据不能直接this.state.inputValue,那样没有用，需要调用react的this.setState()方法去修改
    //   inputValue:e.target.value
    // })
    const value = e.target.value
    this.setState(()=>({
      inputValue:value
    }))
    // const action = {
    //   type:Type[CHANGE_INPUT_VALUE],//做什么事
    //   value:e.target.value
    // }换成下面一句
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }
  handleBtnClick(){
    // this.setState({
    //   list:[...this.state.list,this.state.inputValue],//[...arr]展开运算符
    //   inputValue:''
    // })
    //this.setState接受一个参数，表示修改之前的数据，更加靠谱的写法，可以避免我们不小心改变state的状态
    this.setState((prevState)=>({
      list:[...prevState.list,prevState.inputValue],
      inputValue:''
    }))
  }
  handleItemDel(index){
    console.log(index)
    //state 不允许我们做任何事情，我们要修改只能拷贝副本
    // const list = [...this.state.list]
    // list.splice(index,1)
    // this.setState({
    //   list:list
    // })

    this.setState((prevState)=>{
      const list = [...prevState.list]
      list.splice(index,1)
      return {list}
    })
  }
}
export default TodoList