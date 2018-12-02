import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import './Model.css'
class ModelMode extends  Component {
  constructor(props){
    super(props)
    this.container = document.querySelector('#model-root')
  }
  render(){
    return ReactDOM.createPortal(this.props.children,this.container)
  }
}
export default class Model extends Component {
  constructor(props){
    super(props)
    this.state = {
      show:false
    }
  }
  handleChange=()=>{
    this.setState((preState)=>({
      show:!preState.show
    }))
  }
  render(){
    return (
      <div>
        <button onClick={this.handleChange}>显示弹窗</button>
        {
          this.state.show ? <ModelMode>
          <div className="model-container">
            <div className="model-content">
              <h1>我是弹窗</h1>
            </div>
          </div>
        </ModelMode> :null
        }
      </div>
    )
  }
}